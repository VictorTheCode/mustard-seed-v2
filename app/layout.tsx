import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./typography.css";
import { ThemeProvider } from "@/components/theme-provider";

const display = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Light.woff", weight: "300" },
    { path: "../public/fonts/ClashDisplay-Regular.woff", weight: "400" },
    { path: "../public/fonts/ClashDisplay-Medium.woff", weight: "500" },
    { path: "../public/fonts/ClashDisplay-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/ClashDisplay-Bold.woff", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustard Seed Church | MSC",
  description: "A place of worship, community, and transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} h-full antialiased`}>
      <body className={display.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
