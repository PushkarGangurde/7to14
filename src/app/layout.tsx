import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Our Space | Pushkar & Tanu",
  description: "A private digital space for our memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <LenisProvider>
          <main className="pb-24">
            {children}
          </main>
          <Navbar />
          <Toaster position="top-center" />
          <VisualEditsMessenger />
        </LenisProvider>
      </body>
    </html>
  );
}
