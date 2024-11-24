import { poppins, robotoMono } from "./fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
};

export default RootLayout;
