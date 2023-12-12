const Footer = () => {

    // get currect year
    const currentyear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
        <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
          <img
            className="h-full object-contain"
            src="https://componentland.com/images/logo-circle.png"
            alt=""
          />
        </div>
        <p className="py-10 text-center text-gray-300">
          © {currentyear} devsrsihab | All Rights Reserved
        </p>
      </footer>
      
    );
};

export default Footer;