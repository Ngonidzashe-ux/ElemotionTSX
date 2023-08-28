//Check ButtonProduct
import React from "react";

const ButtonExplore = ({ styles }: { styles: any }) => {
  return (
    <div
      className={`py-2 flex w-full justify-center items-center xl:px-24 md:px-6 px-6 text-center bg-gray-800 font-poppins font-medium text-[18px] text-dimWhite outline-non ${styles} 
    rounded-[10px]`}
    >
      COMING SOON!!!
    </div>
  );
};

export default ButtonExplore;
