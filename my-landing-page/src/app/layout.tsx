import { poppins, robotoMono, iceland } from "./fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HotJar } from "@/components/Hotjar";

export const metadata: Metadata = {
  title: "SOLVR",
  description:
    "Revolutionise your business with cutting-edge AI & custom software solutions",
  icons: {
    icon: "/solvr_logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoMono.variable} ${iceland.className}`}
    >
      <head>
        <HotJar />
      </head>
      <body className="font-body">
        <Navbar />
        {children}

        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      </body>
    </html>
  );
};

export default RootLayout;
