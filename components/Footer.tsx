import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-5">
        <div className="flex flex-col justify-start items-start gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-sm text-gray-400">
            Fresh Cars 2024
            <br />
            ALL right reserved &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
