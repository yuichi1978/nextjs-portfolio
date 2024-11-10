import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function InstructorCard() {
  return (
    <Card title="My Courses">
      <span className="text-secodary-foreground font-semibold">
        Trusted by over <b>10.000+</b> students
      </span>
      <Timeline>
        {courses.map((course, index) => (
          <TimelineItem
            key={index}
            date={course.date}
            title={course.title}
            subTitle={course.subTitle}
            link={course.link}
            tag={course.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const courses = [
  {
    date: "",
    title: "",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
];
