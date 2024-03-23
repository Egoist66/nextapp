import { Metadata } from "next";
import { FC } from "react";


export const metadata: Metadata = {
  title: "Contacts",
  description: "Simple blog app",
};


const Contacts: FC = () => {
  return (
    
    <div className="container 2xl mx-auto">
      <h1 className="text-3xl text-center">Contacts</h1>
    </div>
    
  );
};

export default Contacts;
