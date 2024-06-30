import React, { useEffect, useState } from "react";

export const StudentPresent = ({ obj, onPresentClick }) => {
  const [clickedP, setclickedP] = useState(false);
  const [clickedA, setclickedA] = useState(false);
  const [studentArray, setstudentArray] = useState([]);
  const handleclickP = () => {
    setclickedP(true);
    setclickedA(false);
    onPresentClick(true);
  };
  const handleclickA = () => {
    setclickedP(false);
    setclickedA(true);
    onPresentClick(false);
  };

  return (
    <div>
      <div className="pt-3 pb-3 pl-5 pr-5 mr-5 rounded-md mb-3 mt-3 bg-blue-300 ">
        <h1 className=" text-center">{obj.username}</h1>
        <div className="flex flex-row mt-3">
          <button
            className={`flex ${
              clickedP ? ` bg-gray-400` : `bg-green-400`
            } p-2 rounded-lg`}
            onClick={handleclickP}
          >
            Present
          </button>
          <button
            className={`flex ${
              clickedA ? ` bg-gray-400` : `bg-red-400`
            } ml-2 p-2 rounded-lg`}
            onClick={handleclickA}
          >
            Absent
          </button>
        </div>
      </div>
    </div>
  );
};
