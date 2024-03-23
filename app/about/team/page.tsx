import { Metadata } from "next";
import { FC } from "react";


export const metadata: Metadata = {
  title: "About team",
  description: "Simple blog app",
};


const AboutTeam: FC = () => {
  return (
    
    <div className="container 2xl mx-auto">
      <h1 className="text-3xl text-center">Our team</h1>
    </div>
  
  );
};

export default AboutTeam;
