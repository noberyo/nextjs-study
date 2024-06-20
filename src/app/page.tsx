import NavLink from "./components/navlink/navlink";
import SourceLink from "./components/sourcelink/sourcelink";

export default function Home() {
  return (
    <>
      <header className="px-4 py-4 border-b border-slate-900">
        <div className="text-slate-300 font-bold text-xl">NBR STUDY NEXTJS</div>
      </header>

      <main className="py-8 px-24">
        <div className="mb-8">
          <SourceLink url="https://github.com/noberyo/nextjs-study/"></SourceLink>
        </div>
        <h2 className="mb-8 text-4xl font-bold text-slate-400">SAMPLES</h2>
        <div className="flex gap-2">
          <NavLink href="/image_tag">Image Tag</NavLink>
          <NavLink href="/button_page">Button</NavLink>
        </div>
      </main>
    </>
  );
}
