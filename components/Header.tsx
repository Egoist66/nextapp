'use client';
import { FC } from "react";
import { Navigation } from "./Navigation";
import { SearchComment } from "./features/SearchComment";
import { Providers } from "./providers/Providers";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  {
    path: "/about",
    name: "About",
  },
];

export const Header: FC = () => {

  return (
   <Providers>
      <header className="p-5 z-10  sticky top-0  bg-gray-800">
        <div className="container 2xl mx-auto">
          <div className="flex justify-between flex-wrap gap-10 items-center">
              <Navigation navItems={navItems} />
              <SearchComment />
          </div>

          
        </div>
      </header>
   </Providers>
  );
};
