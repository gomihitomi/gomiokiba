import "@/app/style.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Head from "next/head";

const googleFont = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// TODO: 外部ファイル化
const title = "ごみおきば";
const description =
  "バーチャルインターネットラクガキマン吾味人美と、吾味人志のサイト。300％フィクションです。";
const url = "https://gomiokiba.com/";
const ogImageUrl = `${url}/img/ogp.png`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [ogImageUrl],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    card: "summary_large_image",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={googleFont.className}>{children}</body>
    </html>
  );
}
