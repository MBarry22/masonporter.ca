This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Contact form email setup

This project can send contact form emails via SMTP (e.g., SendGrid).

1) Install dependencies (already added): `nodemailer`
2) Configure environment variables (create `.env.local` in the `portfolio` folder):

```
# SMTP configuration (example: SendGrid)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=REPLACE_WITH_REAL_KEY

# Delivery addresses
CONTACT_TO=you@example.com
# Optional "From" header (defaults to SMTP_USER)
CONTACT_FROM="Portfolio Contact" <no-reply@example.com>
```

3) Restart `npm run dev` after adding `.env.local`.

The API route at `pages/api/contact.js` will validate inputs, block simple spam via a honeypot, and send the email. If SMTP is not configured, it will accept the message and log a note instead of failing, so the UI remains smooth during local development.

### Use EmailJS instead of SMTP (no server creds)

You can send directly from the browser using EmailJS. Add these to `.env.local`:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
```

Then configure your EmailJS template variables to match:
- from_name, user_name, message

When these env vars are present, the contact form will use EmailJS; otherwise it falls back to the SMTP API route.

Troubleshooting EmailJS (HTTP 412 or “Extension context invalidated”):
- Ensure your public key, service ID, and template ID are correct.
- In EmailJS dashboard, add your site origin to Allowed Origins (e.g., http://localhost:3000, and your production domain).
- Make sure your template variables match what the form sends: from_name, user_name, message.
- If EmailJS fails for any reason, the form now automatically falls back to the SMTP route.
