import React from "react";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";

const BookForm = () => {
  return (
    <form className="min-h-[40px] bg-green-50 w-full p-2 rounded-lg shadow-md book-form-slide">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex border-b lg:border-r p-2 transition-transform transform hover:scale-105 lg:hover:scale-100 check-in">
          <CheckIn />
        </div>
        <div className="flex border-b lg:border-r p-2 transition-transform transform hover:scale-105 lg:hover:scale-100 check-out">
          <CheckOut />
        </div>
        <div className="flex border-b lg:border-r p-2 transition-transform transform hover:scale-105 lg:hover:scale-100 adult-dropdown">
          <AdultDropdown />
        </div>
        <div className="flex border-b p-2 transition-transform transform hover:scale-105 lg:hover:scale-100 kids-dropdown">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
