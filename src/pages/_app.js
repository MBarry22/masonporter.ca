import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mason Porter — Full-Stack Developer | masonporter.ca</title>
        <meta
          name="description"
          content="Full-stack developer and IT systems specialist in Calgary, AB. Production business systems, SaaS platforms, automation tools, permission-aware document intelligence demos, and release-operations tooling."
        />
        <meta
          property="og:title"
          content="Mason Porter — Full-Stack Developer & IT Systems Specialist"
        />
        <meta
          property="og:description"
          content="SaaS, workflow automation, document intelligence demos, release and incident-control demos, and enterprise systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masonporter.ca" />
        <link rel="canonical" href="https://masonporter.ca" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
