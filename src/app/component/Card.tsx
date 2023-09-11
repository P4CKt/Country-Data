import DummyData from "@/types/index";
import React from "react";

interface DummyDataProps {
  dummyData: DummyData;
}

function Card({ dummyData }: DummyDataProps): JSX.Element {
  return (
    <section  className="p-2 bg-[#13143b62] text-[14px] font-medium text-white">
      <div
        className="bg-[rgba(148,163,184,0.57)] rounded-2xl m-4 w-[20vh] flex flex-col flex-3 md:hover:bg-fuchsia-700 h-[20vh] "
        key={dummyData.code}
      >
        <div className="flex-1 ml-2 mt-2">
          <p>Code: {dummyData.code}</p>
          <p>Name: {dummyData.name}</p>
          <p>Currency: {dummyData.currency}</p>
        </div>
        <div className="  flex items-center justify-center flex-2 rounded-sm">
          <div className="m-2 rounded-sm outline-1 outline bg-blue-700 w-2/3 flex justify-center outline-white">
            <h1 className="text-white font-semibold text-[20px]">{dummyData.emoji}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
