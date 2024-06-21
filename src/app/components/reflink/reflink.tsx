import Link from "next/link";

export default function RefLink({ url }: { url: string }) {
  return (
    <div className="px-4 py-2 bg-slate-900 rounded-xl flex gap-4 items-center">
      <h4 className="text-sm text-slate-500">Ref link</h4>
      <p className="">
        <Link
          className="text-sm text-blue-500 hover:underline"
          href={url}
          target="_blank"
        >
          {url}
        </Link>
      </p>
    </div>
  );
}
