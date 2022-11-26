import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const router = useRouter();

  return (
    <>
      <li className="ms-0 ms-sm-5 mt-5 mt-sm-0 p-2">
        {/* 將語言切換為中文 */}
        <Link href={router.pathname} locale="zh-TW" className="text-white">
          中文
        </Link>
        <span className="text-white">&nbsp;/&nbsp;</span>
        {/* 將語言切換為英文 */}
        <Link href={router.pathname} locale="en" className="text-white">
          English
        </Link>
      </li>
    </>
  );
}
