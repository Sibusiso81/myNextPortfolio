import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sibusiso Zulu",
  description: "Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators",
  openGraph: {
    title: "Sibusiso Zulu",
    description: "Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators",
    url: "https://i.ibb.co/qD3Vnm3/og-image.jpg",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co/qD3Vnm3/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "SibusisoZulu",
    title: "Sibusiso Zulu",
    description: "Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta property="og:title" content="Sibusiso Zulu" />
        <meta property="og:description" content="Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta property="og:url" content="https://i.ibb.co/qD3Vnm3/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/qD3Vnm3/og-image.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Og Image Alt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yoursite" />
        <meta name="twitter:title" content="Sibusiso Zulu" />
        <meta name="twitter:description" content="Generated by Sibusiso Zulu,an attempt to transcend my CV and create a better connection with potential recruiters and colleborators" />
        <meta name="twitter:image" content="https://i.ibb.co/qD3Vnm3/og-image.jpg" />
        <meta property="og:whatsapp" content="https://i.ibb.co/qD3Vnm3/og-image.jpg" />
        <meta property="og:instagram" content="https://i.ibb.co/qD3Vnm3/og-image.jpg" />
        <meta property="og:linkedin" content="https://www.linkedin.com/in/sibusiso-zulu/" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
