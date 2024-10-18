import Image from "next/image";
import logo from "@/public/images/logo.jpeg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="90"
        width="90"
        quality={100}
        className="rounded-full"
        alt="The Go Drive logo"
      />
    </Link>
  );
}

export default Logo;
