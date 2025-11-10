import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode, SiRefinedgithub } from "react-icons/si";

function SocialMediaLinks({pageCall}) {
  const baseClass =
    "text-lg rounded-full p-2 shadow-2xl transition-all duration-300";

  return (
    

      <div className={`md:flex flex justify-evenly items-center w-1/2 ${pageCall=="home"? "gap-4 md:gap-5":"gap-10 mt-4"} `}>
        
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/jagdishsinghboura/"
          target="_blank"
          className={`${baseClass} border border-blue-400 ${pageCall=="home"? "hover:ring-8":"hover:ring-4"} hover:ring-blue-400 hover:ring-opacity-40 hover:-rotate-12`}
        >
          <FaLinkedinIn className={`${pageCall=="home"? "m-2 text-xl md:text-3xl" :"m-2 text-xl"} hover:text-blue-400`} />
        </Link>

        {/* Leetcode */}
        <Link
          href="https://leetcode.com/u/jagdishsinghboura6783/"
          target="_blank"
          className={`${baseClass} border border-orange-400 ${pageCall=="home"? "hover:ring-8":"hover:ring-4"} hover:ring-orange-400 hover:ring-opacity-40 hover:rotate-12`}
        >
          <SiLeetcode className={`${pageCall=="home"? "m-2 text-xl md:text-3xl" :"m-2 text-xl"} hover:text-orange-400`} />
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${process.env.MOBILE_NUMBER}`}
          target="_blank"
          className={`${baseClass} border border-green-400 ${pageCall=="home"? "hover:ring-8":"hover:ring-4"} hover:ring-green-400 hover:ring-opacity-40 hover:-rotate-12`}
        >
          <FaWhatsapp className={`${pageCall=="home"? "m-2 text-xl md:text-3xl" :"m-2 text-xl"} hover:text-green-400`} />
        </Link>

        {/* Twitter */}
        <Link
          href="https://twitter.com/yourProfile"
          target="_blank"
          className={`${baseClass} border border-yellow-400 ${pageCall=="home"? "hover:ring-8":"hover:ring-4"} hover:ring-yellow-400 hover:ring-opacity-40 hover:rotate-12`}
        >
          <FaTwitter className={`${pageCall=="home"? "m-2 text-xl md:text-3xl" :"m-2 text-xl"} hover:text-yellow-400`} />
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/jagdishsinghboura"
          target="_blank"
          className={`${baseClass} border border-slate-400 ${pageCall=="home"? "hover:ring-8":"hover:ring-4"} hover:ring-slate-400 hover:ring-opacity-40 hover:-rotate-12`}
        >
          <SiRefinedgithub className={`${pageCall=="home"? "m-2 text-xl md:text-3xl" :"m-2 text-xl"} hover:text-slate-400`} />
        </Link>

      </div>
    
  );
}

export default SocialMediaLinks;
