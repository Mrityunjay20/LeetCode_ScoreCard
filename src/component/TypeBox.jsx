export default function TypeBox({questionType, questionColour, solvedStatus}){

    return(<>
        <div className=" h-max bg-[#353535] rounded-lg my-4 mx-4 px-6 py-1">
            <h1 className={"w-full text-center text-lg "+questionColour}>{questionType}</h1>
            <p className="text-white text-center">{solvedStatus}</p>
        </div>
    </>)
}