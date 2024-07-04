import '../App.css'
export default function ProgressElement({ BeatsPercent,solvedStatus,TotalStatus }) {
  return (
    //border-x-[6px] border-y-[6px] border-l-teal-500 border-t-yellow-500 border-r-red-500 border-b-transparent  border-opacity-40
    <div className="h-48 w-48 my-12  rounded-full items-center mx-auto ">
      <div  className="flex flex-col justify-center  items-center mx-auto text-center text-white h-full">
        {BeatsPercent ?(
          <div id='d2' className="duration-500 fadeIn">
            <h6 className="text-xl -mt-4 mb-2">Beats</h6>
            <h6 className="text-lg">
              <span className="text-4xl font-semibold">{BeatsPercent}</span>%
            </h6>
          </div>
        ):(
          <div id="d1" className="duration-500 fadeIn">
            <h6 className="text-lg">
              <span className="text-3xl font-semibold">{solvedStatus}</span>/{TotalStatus}
            </h6>
            <h6 className="text-xl mt-2 mb-2 font-semibold"><span className="text-green-500">✓ </span>Solved </h6>
          </div>
        ) }
      </div>
      <p className="items-end text-center -mt-8 text-white opacity-60">
        1 Attempting
      </p>
    </div>
  );
}
