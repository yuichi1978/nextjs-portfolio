import Image from "next/image";
import Card from "../ui/card";
import Button from "../ui/button";
import SignatureImg from "@/public/assets/images/gallery/react-project.jpg";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";

export default function ResumeCard() {
  return (
    <Card className="md:h-full 2xl:h-fit">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        ■ What I learned from January 2023 to
        October 2024. Experience in
        full-stack development and a track record of building web applications
        using diverse skills From January 2023 to October 2024, I focused on
        building applications using React and related technologies and acquired
        a wide range of skills. 
      </p>
      {/* Signature */}
      <div>
        {/* Name Logo */}
        <Image src={SignatureImg} alt="Yuichi Ota" className="font-oswald" />
      </div>
      {/* Social and resume btn */}
      <div
        className="
        flex items-center justify-between md:absolute md:bottom-6 md:left-6
        md:w-[calc(100%-48px)]"
      >
        {/* Socials */}
        <Socials />
        <Button isIcon className="">
          <FaDownload />
        </Button>
      </div>
    </Card>
  );
}
