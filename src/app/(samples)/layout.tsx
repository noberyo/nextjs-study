import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-8 py-8">{children}</div>
    </>
  );
}
