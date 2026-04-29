import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mason Porter — Full-Stack Developer | masonporter.ca</title>
        <meta
          name="description"
          content="Full-stack developer and IT systems specialist in Calgary, AB. SaaS platforms, workflow automation, AI-assisted developer tools (Flowwright 2.0), and production business systems."
        />
        <meta
          property="og:title"
          content="Mason Porter — Full-Stack Developer & IT Systems Specialist"
        />
        <meta
          property="og:description"
          content="SaaS, workflow automation, AI-assisted tools, and enterprise systems. Recent work includes Flowwright 2.0, a controlled browser automation studio demo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masonporter.ca" />
        <link rel="canonical" href="https://masonporter.ca" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
