import nodemailer from "nodemailer";

const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 5; // max 5 per minute per IP
const recentByIp = new Map();

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // Basic rate limiting by IP
  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  const now = Date.now();
  const arr = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  arr.push(now);
  recentByIp.set(ip, arr);
  if (arr.length > RATE_MAX) {
    return res.status(429).json({ ok: false, error: "Too many requests. Please try again later." });
  }

  const { name, email, message, company } = req.body || {};

  // Honeypot: if 'company' is filled, treat as spam
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      console.log("Contact (no SMTP configured)", { name, email, message });
      return res.status(200).json({
        ok: true,
        note: "Message accepted (SMTP not configured on server)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const fromAddress = CONTACT_FROM || `Website Contact <${SMTP_USER}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact send error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send message" });
  }
}


