import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Shared/Nav/Nav";
import Footer from "../components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habson Ltd.",
  description: "Crafting Experiences That Unlock Brand Magic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
