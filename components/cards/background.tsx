import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <div>
      <Card className="md:h-full" title="My Background">
        <div>
          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
            Originnating from a humble beginning in a &nbsp;
            <span className="text-white underline">
              remote mountain village in Morocco
            </span>
            <span className="text-white underline">
              October 2024. Experience in full-stack development and a track
              record of building web applications using diverse skills From
              January 2023 to October 2024, I focused on building applications
              using React and related technologies and acquired a wide range of
              skills.
              <br />
            </span>
            <span className="text-white underline">
              using React and related technologies and acquired a wide range of
              skills.
            </span>
            <span className="text-white underline">
              using React and related technologies and acquired a wide range of
              skills.
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}
