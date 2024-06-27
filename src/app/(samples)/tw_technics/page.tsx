"use client";

import RefLink from "@/app/components/reflink/reflink";
import SourceLink from "@/app/components/sourcelink/sourcelink";
import Link from "next/link";

export default function TwTechnics() {
  const clickHandler = (e: React.MouseEvent) => {
    console.log(e);
    alert("選択");
  };

  return (
    <>
      <h1 className="mb-8 text-4xl text-slate-400 font-bold">
        Tailwind Technics
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <SourceLink url="https://github.com/noberyo/nextjs-study/tree/main/src/app/(samples)/tw_technics/page.tsx"></SourceLink>
        </div>

        <div className="mb-20 flex flex-col gap-40">
          <div>
            <h2 className="mb-4 font-bold text-xl">
              div内部に配置したbuttonのクリック領域をdiv全体に広げる
            </h2>
            <div className="flex gap-4">
              <div className="mb-8 relative border border-slate-600 bg-slate-700 p-4 rounded-md hover:bg-slate-600 duration-200">
                <h3 className="mb-2 font-bold text-md">
                  このセクションをタップしてください
                </h3>
                <ul className="pl-4">
                  <li className="list-disc">親の＜div＞要素に relative</li>
                  <li className="list-disc">
                    子の＜button＞に absolute inset-0
                  </li>
                  <li className="list-disc">＜button＞内に＜span＞ sr-only</li>
                </ul>
                <button className="absolute inset-0" onClick={clickHandler}>
                  <span className="sr-only">選択</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
