//Check the ButtonProduct for comments
import React from "react";

const ButtonSignUp = ({ styles }: { styles: any }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-non ${styles} rounded-[10px]
    transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100`}
    >
      SIGN UP
    </button>
  );
};

export default ButtonSignUp;
