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

        <HeroImage />
      </div>
    </>
  );
}
