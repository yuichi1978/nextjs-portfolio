import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import { FaPhoneVolume } from "react-icons/fa";
import ContactCard from "@/components/cards/contact";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call us directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="470 - 760 - 6331"
              btnText="Call us"
            />
            <ContactCard
              title="Chat with us"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="Test@email.com"
              btnText="Email us"
            />
          </div>
          {/* Contact from */}
        </div>
      </Card>
    </div>
  );
}
