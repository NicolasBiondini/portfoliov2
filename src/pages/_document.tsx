import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en" className={`overflow-x-hidden `}>
      <Head></Head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5QREECFYBC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5QREECFYBC');
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/*
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,300;1,500&display=swap"
          rel="stylesheet"
        ></link>
*/
