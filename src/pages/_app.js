import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mason Porter — Full-Stack Developer | masonporter.ca</title>
        <meta
          name="description"
          content="Full-stack developer and IT systems specialist in Calgary, AB. SaaS platforms, workflow automation, permission-aware document intelligence demos, developer tools, and production business systems."
        />
        <meta
          property="og:title"
          content="Mason Porter — Full-Stack Developer & IT Systems Specialist"
        />
        <meta
          property="og:description"
          content="SaaS, workflow automation, document intelligence demos, and enterprise systems — including Flowwright 2.0 and VaultLens."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masonporter.ca" />
        <link rel="canonical" href="https://masonporter.ca" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
