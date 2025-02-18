import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

// Icons
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close of DatePicker

  const handleIconClick = () => {
    setIsOpen(!isOpen); // Toggle the DatePicker open/close state
  };

  return (
    <div className="relative flex items-center justify-end h-full">
      {/* Icon */}
      <div className="absolute z-10 pr-8" onClick={handleIconClick}>
        <div>
          <BsCalendar className="text-accent text-base transition-opacity hover:opacity-70 cursor-pointer" />
        </div>
      </div>

      <DatePicker
        selected={startDate}
        className="w-full h-full uppercase font-tertiary tracking-[1px] font-semibold text-base"
        placeholderText="CheckIn"
        onChange={(date) => setStartDate(date)}
        open={isOpen} // Controlled by the isOpen state
        onClickOutside={() => setIsOpen(false)} // Close when clicking outside
      />
    </div>
  );
};

export default CheckIn;
