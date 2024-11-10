import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationsData.map((certification, index) => (
          <TimelineItem
            key={index}
            date={certification.date}
            title={certification.title}
            subTitle={certification.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationsData = [
  {
    date: "2021",
    title: "Teacher and instructor",
    subTitle: "RedHat",
  },
  {
    date: "2020",
    title: "Frontend Engineer",
    subTitle: "Huwaei",
  },
  {
    date: "2020",
    title: "Frontend Engineer",
    subTitle: "Cisco",
  },
  {
    date: "2019",
    title: "Frontend Engineer",
    subTitle: "W3C",
  },
];
