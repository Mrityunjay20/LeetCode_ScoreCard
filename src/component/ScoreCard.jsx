import axios from "axios";
import { useEffect, useState } from "react";
import IndividualProgress from "./ProgressBarIndividual";
import ProgressElement from "./ProgressElement";
import TypeBox from "./TypeBox";

export default function Scorecard() {
  const LeetcodeId = `anmolchoubey02`; //Add your Leetcode id here

  const bgColor = "bg-[#282828]";
  const EasyColour = "text-teal-500";
  const MedColour = "text-yellow-500";
  const HardColour = "text-red-500";
  const BaseColour = "text-violet-500";
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [barColour, setBarColour] = useState(BaseColour); // Ensure BaseColour is defined

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await axios.get(
          `https://leetcode-stats-api.herokuapp.com/${LeetcodeId}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false
      }
    };

    fetchData(); // Call the function on component mount
  }, []);

  useEffect(() => {
    if (data.totalSolved && data.totalQuestions) {
      setPercent((data.totalSolved / data.totalQuestions) * 100);
    }
  }, [data]);

  function onHover(value, questionColour) {
    setPercent(0);
    // setTimeout(() => {
    //   setBarColour("text-gray-200");
    // }, 200);
    

    // Use setTimeout with 1000 milliseconds (1 second) delay
    setTimeout(() => {
      // After the delay, set the percent to the desired value
      setPercent(value);
      setBarColour(questionColour);
    }, 300);
    
    
  }

  function onMouseLeave() {
    setPercent(0);
    // setTimeout(() => {
    //   setBarColour("text-gray-200");
    // }, 200);
    setTimeout(() => {
      setPercent((data.totalSolved / data.totalQuestions) * 100);
      setBarColour(BaseColour);
    }, 300);
    
  }

  return (
    <div className="">
      {isLoading ? (
        <div
          className={
            "flex items-center xl:w-1/2 lg-w-1/2 h-max  mx-auto rounded-lg " +
            bgColor
          }
        >
          <button
            type="button"
            class="bg-indigo-500 text-white font-semibold py-48 px-48 mx-auto rounded inline-flex items-center"
            disabled
          >
            <svg
              class="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l-4 4-4-4z"
              ></path>
            </svg>
            Processing...
          </button>
        </div>
      ) : (
        <div
          className={
            "flex xl:w-1/2 py-4 px-2 h-max mx-auto  rounded-lg " +
            bgColor
          }
        >
          <div className="w-1/2 sm:pl-8">
            <br />

            <IndividualProgress barColour={barColour} progress={percent}>
              {console.log(percent)}
              <ProgressElement
                onHoverFn={onHover}
                onMouseLeave={onMouseLeave}
                solvedStatus={data.totalSolved}
                TotalStatus={data.totalQuestions}
                acceptanceRate={data.acceptanceRate}
                LeetId={LeetcodeId}
              />
            </IndividualProgress>
            <h1 className="text-white w-1/2 text-center mx-auto">
              Global Ranking: <br/>{data.ranking} 
            </h1>
          </div>
          <div className="g:w-3/6 sm:w-3/6 sm:pl-8  h-full flex-row items-end flex-1">
            <TypeBox
              onHoverFn={onHover}
              onMouseLeave={onMouseLeave}
              questionType={"Easy"}
              questionColour={EasyColour}
              solvedStatus={data.easySolved}
              TotalStatus={data.totalEasy}
            />
            <TypeBox
              onHoverFn={onHover}
              onMouseLeave={onMouseLeave}
              questionType={"Med."}
              questionColour={MedColour}
              solvedStatus={data.mediumSolved}
              TotalStatus={data.totalMedium}
            />
            <TypeBox
              onHoverFn={onHover}
              onMouseLeave={onMouseLeave}
              questionType={"Hard"}
              questionColour={HardColour}
              solvedStatus={data.hardSolved}
              TotalStatus={data.totalHard}
            />
            <a href={`https://leetcode.com/u/${LeetcodeId}`}>
            <div
              
              className="relative text-white w-32 bg-yellow-600 hover:bg-yellow-700 duration-300  h-max text-center right-0 rounded-lg my-4 mx-auto px-6 py-1"
            >
              Visit Profile
            </div>
            </a>
          </div>
          <br />
        </div>
      )}
    </div>
  );
}
