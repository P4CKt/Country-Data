import DummyData from "@/types/index";
import React, { useState } from "react";

interface SelectProps {
  setSelect: (select: string) => void;
  select: string;
}
interface IndexProps extends SelectProps {
  setIndex: (index: number) => void;
  index: number;
}

interface DummyDataProps extends IndexProps {
  dummyData: DummyData;
}

function Card({
  dummyData,
  select,
  setSelect,
  index,
  setIndex,
}: DummyDataProps): JSX.Element {
  let colorArray = [
    "rgba(30, 99, 50, 0.651)",
    "rgba(22, 79, 145, 0.57)",
    "rgba(138, 63, 109, 0.57)",
    "rgba(139, 138, 53, 0.57)",
    "rgba(25, 80, 75, 0.57)",
    "rgba(121, 96, 16, 0.57)",
    "rgba(16, 194, 105, 0.57)",
    "rgba(151, 8, 44, 0.57)",
    "rgba(36, 206, 30, 0.377)",
  ];

  const handleClick = (item: string) => {
    setSelect(item);
    setIndex((index + 1)%colorArray.length);
  
  };
  const currentBackgroundColor =
    select !== dummyData.code ? "rgba(148,163,184,0.57)" : colorArray[index];
  return (
    <section className="p-2 bg-[#13143b62] text-[14px]  font-medium text-white">
      <div
        onClick={() => handleClick(dummyData.code)}
        className={`rounded-2xl m-4 w-[20vh] cursor-pointer	 flex flex-col flex-3  h-[20vh]`}
        key={dummyData.code}
        style={{backgroundColor: currentBackgroundColor , transition: 'background-color 0.3s',}}
      >
        <div className="flex-1 ml-2 mt-2">
          <p>Code: {dummyData.code}</p>
          <p>Name: {dummyData.name}</p>
          <p>Currency: {dummyData.currency}</p>
        </div>
        <div className="  flex items-center justify-center flex-2 rounded-sm">
          <div className="m-2 rounded-sm outline-1 outline bg-blue-700 w-2/3 flex justify-center outline-white">
            <h1 className="text-white font-semibold text-[20px]">
              {dummyData.emoji}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
