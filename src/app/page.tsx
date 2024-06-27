import NavLink from "../components/elements/navlink/navlink";
import SourceLink from "../components/elements/sourcelink/sourcelink";

export default function Home() {
  return (
    <>
      <main className="py-8 px-24">
        <div className="mb-8">
          <SourceLink url="https://github.com/noberyo/nextjs-study/"></SourceLink>
        </div>
        <h2 className="mb-8 text-4xl font-bold text-slate-400">SAMPLES</h2>
        <div className="mb-20 flex gap-2">
          <NavLink href="/image-sample">Image Tag</NavLink>
          <NavLink href="/button-sample">Button</NavLink>
          <NavLink href="/link-sample">Link</NavLink>
          <NavLink href="/tw-technics">Tailwind Technics</NavLink>
        </div>
      </main>
    </>
  );
}
