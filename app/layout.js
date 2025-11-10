import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jagdish-singh-boura",
  description: "Portfolio : jagidish singh boura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  relative  overflow-auto scrollbar-hide`}
        >
       <div className=" bg-linear-to-r from-slate-100 to-slate-200  dark:from-slate-800 dark:to-slate-900 ">
         <Navbar/>
       </div>
        {children}
      </body>
    </html>
  );
}
