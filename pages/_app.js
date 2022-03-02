import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "./../styles/globals.css";

const sendMetric = ({ name, value }) => {
  const url = `https://qckm.io?m=${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`;

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    fetch(url, { method: "POST", keepalive: true });
  }
};

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      sendMetric(metric);
      break;
    case "LCP":
      sendMetric(metric);
      break;
    case "CLS":
      sendMetric(metric);
      break;
    case "FID":
      sendMetric(metric);
      break;
    case "TTFB":
      sendMetric(metric);
      break;
    default:
      break;
  }
}

const title = "Orbital";
const url = "https://orbital-webapp.vercel.app/";
const image = "/orbital-cover.jpg";
const description = "Drexel UXID Senior Project Team";
const author = "The Orbital Team";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="language" content="english" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="author" content={author} />
        <meta name="designer" content={author} />
        <meta name="publisher" content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="" />
        <meta name="robots" content="index,follow" />
        <meta name="distribution" content="web" />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="site" />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={image} />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" color="#000000" href="/safari-pinned-tab.svg" />
        {/* <link rel="apple-touch-startup-image" href="/startup.png" /> */}

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1.0"
        />
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:site" content="@" /> */}
      </Head>
      <main className="overflow-x-hidden">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
