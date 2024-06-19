import NavLink from "./components/navlink/navlink";

export default function Home() {
  return (
    <>
      <header className="px-4 py-4 border-b border-slate-900">
        <div className="text-slate-300 font-bold text-xl">NBR STUDY NEXTJS</div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex gap-2">
          <NavLink href="/image_tag">Image Tag</NavLink>
          <NavLink href="/image_tag">Image Tag</NavLink>
        </div>
      </main>
    </>
  );
}
