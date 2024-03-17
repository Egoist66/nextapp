import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog app",
  description: "Simple blog app",
};




const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
