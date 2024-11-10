import Button from "./button";
import { SiUdemy } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, index) => (
        <Button key={index} link={social.link} isIcon>
          <span className="w-7 h-7 place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <SiUdemy className="w-4 h-4" />,
    link: "https://www.udemy.com/user/mohamed-hajji-25",
    username: "Mohmed Hajji",
  },
  {
    icon: <RiYoutubeFill className="w-5 h-5" />,
    link: "https://www.udemy.com/user/mohamed-hajji-25",
    username: "Mohmed Hajji",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linekedin.com/in/medhajji",
    username: "Mohmed Hajji",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/med-hajji7",
    username: "Mohmed Hajji",
  },
];
