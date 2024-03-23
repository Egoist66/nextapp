
import { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

import cat from '../public/cat.jpg'

export const metadata: Metadata = {
  title: "Home",
  description: "Simple blog app",
};


const Home: FC = () => {


  return (
    <>
      <div className="container 2xl mx-auto">
        <h1 className="text-3xl text-center pb-10">Home</h1>
        <Image
          placeholder="blur"
          width={300}
          className="rounded"
          alt="image" 
          src={cat}
        />
      </div>

     
    </>
  );
};



export default Home;
