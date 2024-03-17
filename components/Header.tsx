import { FC } from "react";
import { Navigation } from "./Navigation";
import { SearchComment } from "./features/SearchComment";

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
    <header className="p-5 z-10 relative  bg-gray-800">
      <div className="container 2xl mx-auto">
        <div className="flex justify-between">
            <Navigation navItems={navItems} />
            <SearchComment />
        </div>
      </div>
    </header>
  );
};
