import type { Metadata, Viewport } from "next";
import { siteUrl, siteTitle, siteDescription } from "@/lib/site";
import { Inter, Lora, Caveat, Courier_Prime } from "next/font/google";
import "./globals.css";
import { ContactProvider } from "@/context/ContactContext";
import MotionPreferences from "@/components/ui/MotionPreferences";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookProvider } from "@/context/BookContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier",
});

export const viewport: Viewport = {
  themeColor: "#16100b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  authors: [{ name: "Tomás Reyes", url: siteUrl }],
  creator: "Tomás Reyes",
  robots: { index: true, follow: true },
  icons: { apple: "/icon.png" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Tomás Reyes · Portfolio",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} ${caveat.variable} ${courierPrime.variable} dark`}
    >
      <body className="relative min-h-dvh w-full bg-[#16100b] font-sans text-[#2c1810] antialiased selection:bg-[#c9a84c] selection:text-[#1a1209]">
        <noscript><style>{`.portfolio-scroll-view{display:block!important}body{height:auto!important;overflow:auto!important}`}</style></noscript>
        <LanguageProvider>
          <MotionPreferences><BookProvider><ContactProvider>{children}</ContactProvider></BookProvider></MotionPreferences>
        </LanguageProvider>
      </body>
    </html>
  );
}
