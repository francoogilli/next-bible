import type { Metadata } from "next";
import { Geist, Inter, Plus_Jakarta_Sans, Galada, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const galada = Galada({
  variable: "--font-galada",
  weight: "400",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biblia",
  description: "Descubrí la Biblia de forma gratuita en Español",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${plusJakartaSans.variable} ${galada.variable} ${geistSans.variable} ${merriweather.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
