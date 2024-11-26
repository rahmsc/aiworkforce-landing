import { poppins, robotoMono, iceland } from "./fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoMono.variable} ${iceland.className}`}
    >
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
