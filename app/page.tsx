import { Metadata } from "next";
import { FC } from "react";


export const metadata: Metadata = {
  title: "Home",
  description: "Simple blog app",
};


const Home: FC = () => {
  return (
    <>
      <div className="container 2xl mx-auto">
        <h1 className="text-3xl text-center pb-10">Home</h1>
      </div>
    </>
  );
};



export default Home;
