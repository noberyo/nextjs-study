import React from "react";
import Hero from "./components/hero/hero";

export default function ImageTag() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-8">
      <h1 className="mb-8 text-3xl text-slate-400 font-bold">next/Image Tag</h1>
      <div className="max-w-4xl mx-auto">
        <Hero />
      </div>
    </div>
  );
}
