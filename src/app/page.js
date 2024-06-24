import Image from "next/image";
import React from "react";

import image11 from '../../public/image11.png'

export default function Home() {
  return (
    <div>
      <h1>Home Page </h1>
      <Image src={image11.src} alt="image" width={image11.width} height={image11.height}/>
    
    </div>
  );
}
