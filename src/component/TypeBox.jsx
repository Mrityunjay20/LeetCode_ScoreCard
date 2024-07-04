export default function TypeBox({
  onHoverFn,
  onMouseLeave,
  questionType,
  questionColour,
  solvedStatus,
  TotalStatus,
  beatsPercent,
}) {
  return (
    <>
      <div
        onMouseEnter={() =>
          onHoverFn(
            (solvedStatus * 100) / TotalStatus,
            questionColour,
            beatsPercent
          )
        }
        onMouseLeave={onMouseLeave}
        className=" h-max max-w-36 right-0 bg-[#353535] rounded-lg my-4 mx-2 px-6 py-1"
      >
        <h1 className={"w-full font-semibold text-center text-lg " + questionColour}>
          {questionType}
        </h1>
        <p className="text-white text-center">
          {solvedStatus}/{TotalStatus}
        </p>
      </div>
    </>
  );
}
