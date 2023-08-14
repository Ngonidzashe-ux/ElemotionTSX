//Check Button Product
import React from "react";

const ButtonAppStore = ({ styles }: { styles: any }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 w-[160px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-non ${styles} rounded-[10px] 
  transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100`}
    >
      App Store
    </button>
  );
};

export default ButtonAppStore;
