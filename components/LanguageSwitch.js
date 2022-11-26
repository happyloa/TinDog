import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const router = useRouter();

  return (
    <div>
      <Link href={router.pathname} locale="zh-TW">
        中文
      </Link>
      /
      <Link href={router.pathname} locale="en">
        English
      </Link>
    </div>
  );
}
