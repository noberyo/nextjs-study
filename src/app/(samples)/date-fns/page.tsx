import RefLink from "@/components/elements/reflink/reflink";
import SourceLink from "@/components/elements/sourcelink/sourcelink";
import {
  addDays,
  addSeconds,
  format,
  formatDistanceToNow,
  subDays,
  subSeconds,
} from "date-fns";
import { format as formatTz } from "date-fns-tz"; // UTCをタイムゾーンに変換できる
import { ja } from "date-fns/locale/ja";
import { dynamicFormatDistanceToNow } from "./dynamic-format-distance-to-now";

export default function Page() {
  const date = new Date();

  return (
    <>
      <h1 className="mb-8 text-4xl text-slate-400 font-bold">date-fns</h1>
      <div className="max-w-4xl mx-auto pb-24">
        <div className="mb-20">
          <SourceLink url="https://github.com/noberyo/nextjs-study/tree/main/src/app/(samples)/date-fns"></SourceLink>
        </div>

        <div className="mb-20 space-y-8 text-2xl">
          <p>
            {format(date, "yyyy年MM月dd日 HH時mm分ss秒（E）", { locale: ja })}
          </p>
          <p>{format(date, "yyyy年M月d日 H時m分s秒（E）", { locale: ja })}</p>
          <p>
            {formatTz(date, "yyyy年M月d日 H時m分s秒（E）", {
              locale: ja,
              timeZone: "Asia/Tokyo",
            })}
          </p>
          <hr />
          <p>
            {formatDistanceToNow(subSeconds(date, 60), {
              addSuffix: true, // N分【前】を追加するか
              locale: ja,
            })}
          </p>
          <p>{dynamicFormatDistanceToNow(date)}</p>
          <hr />
          <p>{dynamicFormatDistanceToNow(subSeconds(date, 60))}</p>
          <p>{dynamicFormatDistanceToNow(addSeconds(date, 3600))}</p>
          <p>{dynamicFormatDistanceToNow(addSeconds(date, 3600 * 24))}</p>
          <hr />
          <p>{dynamicFormatDistanceToNow(subDays(date, 1))}</p>
          <p>{dynamicFormatDistanceToNow(subDays(date, 10))}</p>
          <hr />
          <p>{dynamicFormatDistanceToNow(addDays(date, 1))}</p>
          <p>{dynamicFormatDistanceToNow(addDays(date, 2))}</p>
        </div>

        <h3 className="mb-4 text-3xl text-slate-400 font-bold">REFERENCES</h3>
        <div className="flex flex-col gap-2">
          <RefLink url="https://date-fns.org/"></RefLink>
          <RefLink url="https://www.youtube.com/watch?v=7-Pcxa1EzUc"></RefLink>
        </div>
      </div>
    </>
  );
}
