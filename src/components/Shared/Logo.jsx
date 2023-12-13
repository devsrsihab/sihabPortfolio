import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/devsrsihabLogo.svg"
const Logo = () => {
    return (
        <Link
        href="#"
        className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 text-4xl w-full h-full object-contain text-green-500">
         <Image
         width={200}
         height={120}
         src={logo}
         alt="devsrsihab.com"
         />
        </span>
      </Link>
    );
};

export default Logo;