import TypeBox from "./TypeBox";

export default function Scorecard({ bgColor }) {
  return (
    <div className={"flex xl:w-1/3 h-max mx-auto rounded-lg " + bgColor}>
      <div className="w-4/6"></div>
      <div className="w-2/6">
        <TypeBox
          questionType={"Easy"}
          questionColour={"text-teal-500"}
          solvedStatus={"7/808"}
        />
        <TypeBox
          questionType={"Med."}
          questionColour={"text-yellow-500"}
          solvedStatus={"1/1682"}
        />
        <TypeBox
          questionType={"Hard"}
          questionColour={"text-red-600"}
          solvedStatus={"0/714"}
        />
      </div>
    </div>
  );
}
