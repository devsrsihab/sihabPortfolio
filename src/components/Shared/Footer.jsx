import Image from "next/image";
import logo from "@/src/assets/images/logo/devsrsihabLogo.svg"

const Footer = () => {

    // get currect year
    const currentyear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
        <div className="absolute flex items-center -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-primary bg-white p-2">
          <div className="w-full">
        <Image
         className="w-full h-full object-cover"
         width={200}
         height={200}
         src={logo}
         alt="devsrsihab"
         />

          </div>
        </div>
        <p className="py-10 text-center text-gray-300">
          © {currentyear} devsrsihab | All Rights Reserved
        </p>
      </footer>
      
    );
};

export default Footer;