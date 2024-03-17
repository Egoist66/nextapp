import { Metadata } from "next";
import { FC } from "react";


export const metadata: Metadata = {
    title: "About",
    description: "Simple blog app",
};

const About: FC = () => {
    return (
        
        <div>
            <h3 className="font-semibold text-xl pt-10">Select subitems</h3>
        </div>
        
     
        
    )
}

export default About