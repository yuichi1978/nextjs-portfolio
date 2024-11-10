import React from "react";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import BackgroundCard from "@/components/cards/background";
import Gallery from "@/components/ui/gallery";
import ExperienceCard from "@/components/cards/experience";
import EducationCard from "@/components/cards/education";
import CertificationsCard from "@/components/cards/certifications";
import InstructorCard from "@/components/cards/instructor";

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div
          className="
          space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3
          "
        >
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div
          className="
          space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3
          "
        >
          <div className="space-y-4">
            <InstructorCard />
            <CertificationsCard />
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
