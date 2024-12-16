import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src="/logo.svg" width={54} height={54} priority alt="logo" />
    </Link>
  );
}
