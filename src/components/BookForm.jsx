import React from "react";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";

const BookForm = () => {
  return (
    <form className="min-h-[70px] bg-green-50 w-full p-4 rounded-lg shadow-md">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;
