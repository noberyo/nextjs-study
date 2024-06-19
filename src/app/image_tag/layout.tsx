import React from "react";
import { LayoutProps } from "../../../.next/types/app/layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="px-4 py-4 border-b border-slate-900">
        <div className="text-slate-300 font-bold text-xl">NBR STUDY NEXTJS</div>
      </header>
      <div>{children}</div>
    </>
  );
}
