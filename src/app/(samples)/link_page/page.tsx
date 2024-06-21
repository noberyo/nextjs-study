import RefLink from "@/app/components/reflink/reflink";
import SourceLink from "@/app/components/sourcelink/sourcelink";
import Link from "next/link";

export default function LinkPage() {
  return (
    <>
      <h1 className="mb-8 text-4xl text-slate-400 font-bold">
        &lt;Link&gt; - next/Link Tag
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <SourceLink url="https://github.com/noberyo/nextjs-study/tree/main/src/app/(samples)/link_page/page.tsx"></SourceLink>
        </div>

        <div className="mb-20 flex flex-col gap-40">
          <Link href="/image_tag">&gt; 通常の遷移</Link>
          <Link
            href={{
              pathname: "/button_page",
              query: { name: "test" },
            }}
          >
            &gt; hrefにはオブジェクトも指定できる
          </Link>
          <Link href="/button_page" replace={true}>
            &gt;
            replace=&#123;true&#125;。現在のURLをブラウザ履歴に残さないで遷移
          </Link>
          <Link href="/button_page" scroll={false}>
            &gt; scroll=&#123;false&#125;。遷移してもスクロールさせない
          </Link>
        </div>
        <RefLink url="https://nextjs.org/docs/pages/api-reference/components/link"></RefLink>
      </div>
    </>
  );
}
