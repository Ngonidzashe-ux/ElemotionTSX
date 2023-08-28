//Check Button Product
import React from "react";

const ButtonQuote = ({ styles }: { styles: any }) => {
  return (
    <button
      type="button"
      className={`py-2 px-10 bg-primary font-poppins font-medium text-[18px] text-secondary outline-non ${styles} rounded
    transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-100 hover:text-primary`}
    >
      Get Quote
    </button>
  );
};

export default ButtonQuote;
