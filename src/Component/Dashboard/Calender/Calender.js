import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex bg-highlightWhite w-[32rem] h-auto min-h-[32rem]">
      <div className="w-full h-full bg-highlightWhite rounded-lg shadow-none border-none  ">
        <Calendar
          onChange={setValue}
          value={value}
          className="!w-full !h-full !border-none flex flex-col justify-center items-center"
          next2Label={null}
          prev2Label={null}
          tileClassName={({ date, view }) => {
            const isToday = date.toDateString() === new Date().toDateString();

            return `w-12 h-12 flex items-center justify-center text-center
               hover:rounded-full
              ${isToday ? "bg-blue-700 text-white rounded-full" : ""}`;
          }}
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
