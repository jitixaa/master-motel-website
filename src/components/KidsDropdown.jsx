import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

// Icons
import { BsChevronDown } from "react-icons/bs";

const List = [
  { name: "1 Adult" },
  { name: "2 Adult" },
  { name: "3 Adult" },
  { name: "4 Adult" },
];

const KidsDropdown = () => {
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
          <BsChevronDown className="text-accent text-base" />
        </div>
      </div>

      <DatePicker
        selected={startDate}
        className="w-full h-full uppercase font-tertiary tracking-[1px] font-semibold text-base"
        placeholderText="Kids"
        onChange={(date) => setStartDate(date)}
        open={isOpen} // Controlled by the isOpen state
        onClickOutside={() => setIsOpen(false)} // Close when clicking outside
      />
    </div>
  );
};

export default KidsDropdown;
