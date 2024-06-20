import Image from "next/image";
import HeroImage from "./components/hero_image/hero_image";
import SourceLink from "@/app/components/sourcelink/sourcelink";

export default function ImageTag() {
  return (
    <>
      <h1 className="mb-8 text-3xl text-slate-400 font-bold">next/Image Tag</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <SourceLink url="https://github.com/noberyo/nextjs-study/tree/main/src/app/(samples)/image_tag"></SourceLink>
        </div>

        <div className="mb-4">
          <HeroImage />
        </div>

        <div className="mb-4">
          <div className="mb-4 relative aspect-[1/1] max-w-xs">
            <Image className="object-cover" fill src="/bg.jpg" alt="" />
          </div>
          <div className="mb-4 relative aspect-[1/1] max-w-xs bg-slate-800">
            <Image className="object-contain" fill src="/bg.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
