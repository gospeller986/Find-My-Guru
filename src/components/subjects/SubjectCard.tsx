import React, { ReactNode } from "react";

interface SubjectProp {
  title: string;
  icon: ReactNode;
  bgcolor?: string;
  textcolor?: string;
}

export const SubjectCard = (prop: SubjectProp) => {
  return (
    <div
      className=" bg-white h-40 w-40 rounded-xl flex justify-center 
    items-center p-6 flex-col gap-6  border border-gray-300 shadow-lg"
    >
      <div className={` ${prop.bgcolor} px-8 py-4 rounded-3xl ${prop.textcolor} text-5xl flex justify-center items-center `}
      style={{
        backgroundColor: prop.bgcolor,
        color : prop.textcolor
      }}
      >
        {prop.icon}
      </div>

      <div>
        <h1 className="text-xl font-bold text-center">{prop.title}</h1>
      </div>
    </div>
  );
};
