import Link from "next/link";
import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <Link
      className="px-4 py-2 border border-slate-700 bg-slate-900 text-slate-400 rounded-lg hover:border-slate-500 hover:bg-slate-800 duration-150"
      href={href}
    >
      {children}
    </Link>
  );
}
