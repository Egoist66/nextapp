import Link from "next/link";
import { FC } from "react";

const AboutLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="container 2xl mx-auto">
            <h1 className="text-3xl text-center">About</h1>

            <ul>
                <li><Link className="text-blue-900 underline" href="/about/contacts">Contacts</Link></li>
                <li><Link className="text-blue-900 underline"  href="/about/team">About team</Link></li>
            </ul>

            {children}
        </div>
    );
  };
  
  export default AboutLayout;