import { useState } from "react";
import "../App.css";
export default function ProgressElement({ solvedStatus, TotalStatus, LeetId, acceptanceRate, onHoverFn, onMouseLeave }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverFn(acceptanceRate, "text-green-500")
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    //border-x-[6px] border-y-[6px] border-l-teal-500 border-t-yellow-500 border-r-red-500 border-b-transparent  border-opacity-40
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <div className="h-48 w-48 my-12  rounded-full items-center mx-auto ">
        <div className="flex flex-col justify-center  items-center mx-auto text-center text-white h-full">
          {
            <div id="d1" className="duration-500 fadeIn">
              <h6 id="d3" className="text-lg">
              <span className="text-3xl font-semibold text-green-500">{acceptanceRate}</span>%
              </h6>
              
            </div>
          }
        </div>
        <p className="items-end text-center -mt-12 mb-1 text-white opacity-60">
        Acceptance<br/> Rate for user{" "}
        </p>
      </div>
      ) : (
        <div className="h-48 w-48 my-12  rounded-full items-center mx-auto ">
          <div className="flex flex-col justify-center  items-center mx-auto text-center text-white h-full">
            {
              <div id="d1" className="duration-500 fadeIn">
                <h6 id="d3" className="text-lg">
                  <span className="text-3xl font-semibold">{solvedStatus}</span>
                  /{TotalStatus}
                </h6>
                <h6 id="d3" className="text-xl mt-2 mb-2 font-semibold">
                  <span className="text-green-500">✓ </span>Solved{" "}
                </h6>
              </div>
            }
          </div>
          <p className="items-end text-center -mt-12 text-white opacity-60">
            Stats for User <br /> {LeetId}
          </p>
        </div>
      )}
    </div>
  );
}
