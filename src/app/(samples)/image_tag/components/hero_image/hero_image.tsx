import Image from "next/image";
import React from "react";
import img from "./bg.jpg";

export default function HeroImage() {
  return (
    <>
      <Image src={img} placeholder="blur" alt=""></Image>
    </>
  );
}
