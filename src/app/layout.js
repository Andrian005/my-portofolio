import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 max-w-screen-xl mx-auto px-2 sm:px-6 md:px-10 pt-24 pb-16 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

