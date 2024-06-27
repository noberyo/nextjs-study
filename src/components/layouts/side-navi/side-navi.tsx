import Link from "next/link";

type InternalLink = {
  id: string;
  label: string;
  path: string;
};

export default function SideNavi() {
  const links: InternalLink[] = [
    { id: "image", label: "next/Image", path: "/image-sample" },
    { id: "link", label: "next/Link", path: "/link-sample" },
    { id: "button", label: "Button", path: "/button-sample" },
    { id: "tailwind", label: "Tailwind Technics", path: "/tw-technics" },
  ];

  return (
    <>
      <h2 className="px-4 p-2 text-sm text-slate-600">Samples</h2>
      <nav className="mb-4">
        <ul>
          {links.map((li) => (
            <li key={li.id}>
              <Link
                className="block px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800"
                href={li.path}
              >
                {li.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
