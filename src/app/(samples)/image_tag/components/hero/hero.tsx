import Image from "next/image";
import React from "react";
import img from "./bg.jpg";

export default function Hero() {
  return (
    <>
      <Image className="mb-4" src={img} placeholder="blur" alt=""></Image>
      {/* TODO: コード表示 <pre className="px-4 py-4 bg-slate-800 rounded-xl text-slate-300 font-light">
        <code>
          &lt;Image src=&#123;img&#125; placeholder="blur"
          alt=""&gt;&lt;/Image&gt;
        </code>
  </pre>*/}
    </>
  );
}
