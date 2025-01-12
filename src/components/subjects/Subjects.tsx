import React from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScienceIcon from "@mui/icons-material/Science";
import LanguageIcon from "@mui/icons-material/Language";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BookIcon from "@mui/icons-material/Book";
import PublicIcon from "@mui/icons-material/Public";
import { SubjectCard } from "./SubjectCard";

export const Subjects = () => {
  const subs = [
    {
      title: "Maths",
      icon: <CalculateIcon />,
      bgcolor: "bg-blue-100",
      textcolor: "text-blue-600",
    },
    {
      title: "Science",
      icon: <ScienceIcon />,
      bgcolor: "bg-green-100",
      textcolor: "text-green-600",
    },
    {
      title: "English",
      icon: <LanguageIcon />,
      bgcolor: "bg-yellow-100",
      textcolor: "text-yellow-600",
    },
    {
      title: "History",
      icon: <HistoryEduIcon />,
      bgcolor: "bg-red-100",
      textcolor: "text-red-600",
    },
    {
      title: "Computers",
      icon: <ComputerIcon />,
      bgcolor: "bg-purple-100",
      textcolor: "text-purple-600",
    },
    {
      title: "Art",
      icon: <BrushIcon />,
      bgcolor: "bg-pink-100",
      textcolor: "text-pink-600",
    },
    {
      title: "Sports",
      icon: <SportsBasketballIcon />,
      bgcolor: "bg-orange-100",
      textcolor: "text-orange-600",
    },
    {
      title: "Music",
      icon: <MusicNoteIcon />,
      bgcolor: "bg-indigo-100",
      textcolor: "text-indigo-600",
    },
    {
      title: "Literature",
      icon: <BookIcon />,
      bgcolor: "bg-teal-100",
      textcolor: "text-teal-600",
    },
    {
      title: "Geography",
      icon: <PublicIcon />,
      bgcolor: "bg-cyan-100",
      textcolor: "text-cyan-600",
    },
  ];
  return (
    <div className="mb-10 font-[family-name:var(--font-geist-sans)]">
      <div
        className="flex flex-col justify-center items-center lg:text-7xl text-4xl font-bold  h-full w-full
       bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
       bg-[size:24px_24px] py-8 "
      >
        <h1>Where Questions</h1>
        <h1>Meet Answers</h1>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center lg:px-40 "
        style={{ 
            justifyContent: "center"
            
         }}
      >
        {subs.map((subject) => (
          <div className="item" key={subject.title}>
            <SubjectCard
              title={subject.title}
              icon={subject.icon}
              bgcolor={subject.bgcolor}
              textcolor={subject.textcolor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
