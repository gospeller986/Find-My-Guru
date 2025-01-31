import { Button } from '@mui/material'
import React from 'react'


interface SwitchProps {
    activeType : string ;
    setActiveType : (activeType: string) => void ;
}

export const Switch = (props : SwitchProps) => {
    const { activeType = "student", setActiveType } = props
  return (
    <div className="flex flex-row gap-2 justify-end bg-[rgb(227,215,191)] p-4 rounded-full shadow-2xl">
        <Button
          variant={activeType === "student" ?"contained" : "text"}
          sx={{ bgcolor: `${activeType === "student" ? "white" : ""}`, color: "black" , fontWeight: "bold", borderRadius: 10 , textDecoration : "none" , textTransform : "none"}}
          onClick={() => setActiveType("student")}
        >
          Find Tutors
        </Button>
        <Button
          variant={activeType === "tutor" ?"contained" : 'text'}
          sx={{ bgcolor: `${activeType === "tutor" ? "white" : ""}`, color: "black" , fontWeight: "bold", borderRadius: 10 , textDecoration : "none" , textTransform : "none"}}
          onClick={() => setActiveType("tutor")}
        >
          Join as Tutor
        </Button>
      </div>
  )
}
