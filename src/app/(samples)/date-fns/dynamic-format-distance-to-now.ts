import { format, differenceInDays, formatDistanceToNow } from "date-fns";
import { format as formatTz } from "date-fns-tz";
import { ja } from "date-fns/locale";

/**
 * 現在日時から2日以内なら、経過時間を返す。それ以外はyyyy年MM月dd日 HH:mmで返す
 * @param date
 * @returns
 */
export const dynamicFormatDistanceToNow = (date: Date) => {
  const now = new Date();
  if (Math.abs(differenceInDays(date, now)) < 2) {
    return formatDistanceToNow(date, { addSuffix: true, locale: ja });
  } else {
    return format(date, "yyyy年MM月dd日 HH:mm");
  }
};
