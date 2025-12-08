import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const company = form.get("company"); // honeypot

    // If EmailJS env is present, send via EmailJS (no server creds needed)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        const emailjs = (await import("@emailjs/browser")).default;
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: email,
              user_name: name,
              to_name: "Portfolio Contact",
              message,
            },
            { publicKey }
          );
          setStatus("sent");
          return;
        } catch (emailjsError) {
          // If EmailJS fails (e.g., 412 precondition, origin not allowed, bad IDs), fall back to server
          console.warn("EmailJS failed, falling back to SMTP route:", emailjsError);
        }
      }

      // Fallback to server API (SMTP)
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message, company }),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot field for bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full rounded-md border border-neutral-200 px-4 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded-md border border-neutral-200 px-4 py-2"
      />
      <textarea
        name="message"
        placeholder="How can I help?"
        rows={5}
        required
        className="w-full rounded-md border border-neutral-200 px-4 py-2"
      />
      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-brand-700 px-5 py-2.5 text-white hover:bg-brand-800 transition disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" ? (
        <p className="text-sm text-green-700">
          Thanks — I’ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong. Please email me directly.
        </p>
      ) : null}
    </form>
  );
}


