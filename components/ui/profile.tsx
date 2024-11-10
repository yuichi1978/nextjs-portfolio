import Image from "next/image";
import MyImage from "@/public/assets/images/my_image.jpg";

export default function Profile() {
  return (
    <div
      className="
      flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground
    "
    >
      {/* Photo */}
      <div
        className="
        relative w-[100px] h-[100px] rounded-full flex items-center 
        justify-center bg-gradient-to-r from-blue-joust to-green-benzol
      "
      >
        <Image
          src={MyImage}
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
          alt="Yuichi photo"
        />
        {/* Online */}
        <div className="absolute right-0 bottom-5 w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos"></div>
      </div>
      <div className="text-3xl font-medium">Yuichi Ota</div>
    </div>
  );
}
