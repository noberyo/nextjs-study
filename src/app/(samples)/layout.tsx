import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="px-4 py-4 border-b border-slate-900">
        <div className="text-slate-300 font-bold text-xl">
          <Link href="/">NBR STUDY NEXTJS</Link>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-8 py-8">{children}</div>
    </>
  );
}
