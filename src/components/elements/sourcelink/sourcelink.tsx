import Link from "next/link";

export default function SourceLink({ url, ...props }: { url: string }) {
  return (
    <div className="px-4 py-2 bg-slate-800 rounded-xl flex gap-4 items-center">
      <h4 className="text-sm text-slate-500">Source Code</h4>
      <p className="">
        <Link
          className="text-sm text-slate-300 hover:underline"
          href={url}
          target="_blank"
        >
          {url}
        </Link>
      </p>
    </div>
  );
}
