import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
// import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";
import "./globals.css";

// Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
// const PixelFont = localFont({
//   src: "../public/assets/fonts/pixel font-7.ttr",
//   variable: "--font-pixel",
// })

// Metadata
export const metadata: Metadata = {
  title: "Nextjs Portfolio application",
  description: "official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable)}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
