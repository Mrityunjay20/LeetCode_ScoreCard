import { useState } from "react";
import { AllData } from "../Test/TestData";
import IndividualProgress from "./ProgressBarInividual";
import ProgressElement from "./ProgressElement";
import TypeBox from "./TypeBox";

export default function Scorecard() {
  const bgColor = "bg-[#282828]";
  const EasyColour="text-teal-500"
  const MedColour="text-yellow-500"
  const HardColour="text-red-500"
  const BaseColour ="text-violet-500"


  const [percent,setPercent] = useState((AllData.matchedUser.submitStatsGlobal.acSubmissionNum[0].count/AllData.allQuestionsCount[0].count)*100);
  const [barColour,SetBarColour]= useState(BaseColour);
  const [beatsStatus, setBeatsStatus] = useState(false)

  function onHover(value,questionColour,beatsPercent){
    setPercent(value);
    SetBarColour(questionColour);
    setBeatsStatus(beatsPercent);
  }

  function onMouseLeave(){
    setPercent((AllData.matchedUser.submitStatsGlobal.acSubmissionNum[0].count/AllData.allQuestionsCount[0].count)*100)
    SetBarColour(BaseColour);
    setBeatsStatus(false);
  }

  return (
    <div
      className={
        "flex items-center xl:w-1/2 lg-w-1/2 h-max mx-auto rounded-lg " +
        bgColor
      }
    >
      <div className="lg:w-4/6 xl:5/6">
        <IndividualProgress barColour={barColour} progress={percent}>
          <ProgressElement BeatsPercent={beatsStatus} 
          solvedStatus={AllData.matchedUser.submitStatsGlobal.acSubmissionNum[0].count}
          TotalStatus={AllData.allQuestionsCount[0].count} />
        </IndividualProgress>
      </div>
      <div className="lg:w-2/6 xl:1/6 h-full flex-row items-end flex-1">
        <TypeBox
          onHoverFn={onHover}
          onMouseLeave={onMouseLeave}
          questionType={"Easy"}
          questionColour={EasyColour}
          solvedStatus={AllData.matchedUser.submitStatsGlobal.acSubmissionNum[1].count}
          TotalStatus={AllData.allQuestionsCount[1].count}
          beatsPercent={AllData.matchedUser.problemsSolvedBeatsStats[0].percentage}
        />
        <TypeBox
          onHoverFn={onHover}
          onMouseLeave={onMouseLeave}
          questionType={"Med."}
          questionColour={MedColour}
          solvedStatus={AllData.matchedUser.submitStatsGlobal.acSubmissionNum[2].count}
          TotalStatus={AllData.allQuestionsCount[2].count}
          beatsPercent={AllData.matchedUser.problemsSolvedBeatsStats[1].percentage}
        />
        <TypeBox
          onHoverFn={onHover}
          onMouseLeave={onMouseLeave}
          questionType={"Hard"}
          questionColour={HardColour}
          solvedStatus={AllData.matchedUser.submitStatsGlobal.acSubmissionNum[3].count}
          TotalStatus={AllData.allQuestionsCount[3].count}
          beatsPercent={AllData.matchedUser.problemsSolvedBeatsStats[2].percentage}
        />
      </div>

      {/* only for testing */}
      {/* <input
        type="range"
        min="1"
        max="100"
        value={percent}
        onChange={onChange}
        className="slider"
        id="myRange"
      /> */}
    </div>
  );
}
