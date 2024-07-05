export default function TypeBox({
  onHoverFn,
  onMouseLeave,
  questionType,
  questionColour,
  solvedStatus,
  TotalStatus,
}) {
  return (
    <>
      <div
        onMouseEnter={() =>
          onHoverFn(
            (solvedStatus * 100) / TotalStatus,
            questionColour
          )
        }
        onMouseLeave={onMouseLeave}
        className=" h-max max-w-36 bg-[#353535] rounded-lg my-4 mx-auto px-4 py-1"
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
