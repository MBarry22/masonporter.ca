import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const primary = path.join(publicDir, "MP_Resume.pdf");
    const fallback = path.join(publicDir, "mason-porter-resume.pdf");

    const filePath = fs.existsSync(primary)
      ? primary
      : fs.existsSync(fallback)
      ? fallback
      : null;

    if (!filePath) {
      return res.status(404).json({ ok: false, error: "Resume not found" });
    }

    // Basic validation: check PDF header
    try {
      const fd = fs.openSync(filePath, "r");
      const header = Buffer.alloc(5);
      fs.readSync(fd, header, 0, 5, 0);
      fs.closeSync(fd);
      const signature = header.toString("utf8");
      if (!signature.startsWith("%PDF-")) {
        return res.status(415).json({
          ok: false,
          error:
            "Resume file is not a valid PDF. Please replace with an exported PDF.",
          detectedHeader: signature,
        });
      }
    } catch (e) {
      // If we fail to read, fall through to generic error handler
      console.error("PDF header check failed:", e);
    }

    const stat = fs.statSync(filePath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Cache-Control", "no-store");

    const asInline = String(req.query.inline || "").toLowerCase() === "1";
    const dispositionType = asInline ? "inline" : "attachment";
    const filename = path.basename(filePath);
    res.setHeader("Content-Disposition", `${dispositionType}; filename="${filename}"`);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    console.error("Resume serve error:", err);
    res.status(500).json({ ok: false, error: "Failed to serve resume" });
  }
}


