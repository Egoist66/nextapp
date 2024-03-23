import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Providers from "@/store/Provider";


import "./styles/globals.scss";

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
          <main className="min-h-screen pt-10 pl-5 pr-5">
              <Providers>
                {children}
              </Providers>
          </main>
        <Footer />
        
      </body>
    </html>
  );
};

export default RootLayout;
