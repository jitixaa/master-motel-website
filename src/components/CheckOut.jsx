import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

// Icons
import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close of DatePicker

  const handleIconClick = () => {
    setIsOpen(!isOpen); // Toggle the DatePicker open/close state
  };

  return (
    <div className="relative flex items-center justify-end h-full">
      {/* Icon */}
      <div className="absolute z-10 pr-8" onClick={handleIconClick}>
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>

      <DatePicker
        selected={endDate}
        className="w-full h-full uppercase font-tertiary tracking-[1px] font-semibold text-base"
        placeholderText="CheckOut"
        onChange={(date) => setEndDate(date)}
        open={isOpen} // Controlled by the isOpen state
        onClickOutside={() => setIsOpen(false)} // Close when clicking outside
      />
    </div>
  );
};

export default CheckOut;
