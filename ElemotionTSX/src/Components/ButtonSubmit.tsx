//Check Button Product
import React from "react";

const ButtonConnect = ({ styles }: { styles: any }) => {
  return (
    // Used button type submit to show that its not just a control button but a submission one.
    /*type="submit": This attribute specifies the type of the button as "submit." It is used within a <form> element to indicate that clicking
     this button will trigger the form submission.*/

    <button
      type="submit"
      className={`py-3 px-5 bg-blue-gradient font-poppins font-medium text-[20px] text-primary outline-non ${styles} rounded 
  transition ease-in-out delay-30 hover:-translate-y-0.5 hover:scale-105 duration-50`}
    >
      SUBMIT
    </button>
  );
};

export default ButtonConnect;
