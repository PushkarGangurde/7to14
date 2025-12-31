import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { LenisProvider } from "@/components/LenisProvider";
import SplashCursor from "@/components/SplashCursor";

import { AuroraGradient } from "@/components/AuroraGradient";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "7to14 | Our Journey",
  description: "A private digital space for our memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${fredoka.variable} antialiased min-h-screen font-sans`}>
          <AuroraGradient />
          <LenisProvider>
          <main className="pb-24">
            {children}
          </main>
          <Navbar />
          <Toaster position="top-center" />
          <VisualEditsMessenger />
          <SplashCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
