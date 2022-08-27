import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link
          href="/icons/icon192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link rel="apple-touch-icon" href="/icons/icon192.png"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
