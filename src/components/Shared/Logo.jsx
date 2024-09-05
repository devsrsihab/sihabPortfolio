import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/images/logo/devsrsihabLogo.svg"
const Logo = () => {
    return (
      <a
        href="#homeHero"
        className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 text-4xl w-full h-full object-contain text-green-500">
          <Image width={500} height={500} src={logo} alt="devsrsihab.com" />
        </span>
      </a>
    );
};

export default Logo;