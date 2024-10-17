import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex bg-highlightWhite w-[30rem] h-[30rem]">
      <div className="w-full h-full p-4 bg-highlightWhite rounded-lg shadow-none border-none">
        <Calendar
          onChange={setValue}
          value={value}
          className="w-full h-full !border-none"
          next2Label={null}
          prev2Label={null}
          tileClassName={({ date, view }) => {
            const isToday = date.toDateString() === new Date().toDateString();

            return `w-12 h-12 flex items-center justify-center text-center
              hover:bg-blue-100 hover:rounded-full
              ${isToday ? "bg-blue-700 text-white rounded-full" : ""}`; // Ensure circular shape
          }}
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
