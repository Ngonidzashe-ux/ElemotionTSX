//Check Button Product
import React from "react";

const ButtonDiscoverInv = ({ styles }: { styles: any }) => {
  return (
    <button
      type="button"
      className={`py-4 px-10 w-[300px]  bg-primary font-poppins font-medium text-[22px] text-secondary outline-non ${styles} rounded-[10px]
      transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-secondary hover:text-black duration-100`}
    >
      DISCOVER MORE
    </button>
  );
};

export default ButtonDiscoverInv;
