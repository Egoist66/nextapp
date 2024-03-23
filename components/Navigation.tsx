"use client";

import Link from "next/link";
import { FC } from "react";
import { usePathname} from "next/navigation";


type NavProps = {
  navItems: Array<{ path: string; name: string }>;
};

export const Navigation: FC<NavProps> = ({ navItems }) => {
  const pathName = usePathname();


  return (
    <nav>
      <ul className="text-cyan-400 flex gap-10">
        {navItems?.map((navItem) => {
          const isActive = pathName === navItem.path;
          return (
            <li key={navItem.path}>
              <Link
                scroll={true}
                className={isActive ? "activeNavLink": ""}
                href={navItem.path}
              >
                {navItem.name}
              </Link>
            </li>
          );
        })}

        
      </ul>
    </nav>
  );
};
