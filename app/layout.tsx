import type { Metadata } from "next";
import { Inter, Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import MainNavbar from "./Components/Navbars/MainNavbar";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
