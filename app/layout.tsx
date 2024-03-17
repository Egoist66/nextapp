import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { FC } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { App } from "./app";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog app",
  description: "Simple blog app",
  
};




const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <App>{children}</App>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
