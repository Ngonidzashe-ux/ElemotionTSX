/*This line defines the ButtonProduct component using an arrow function. It accepts an object destructuring parameter { styles }, 
which means it expects an object prop named styles. The component's code block will contain the implementation of the button. 
The styles passed as the prop can be applied to the button element or its parent container to customize its appearance. */
const ButtonProduct = ({ styles }: { styles: any }) => {
  return (
    /*type='button': Specifies the type of the button as 'button', indicating it is a button control.
    outline-non: Removes the default outline style applied to the button when it is in focus.
    transition ease-in-out delay-100: Specifies the transition effect for the button, making the changes smooth with an ease-in-out timing 
    function and a 150 milliseconds delay before the transition starts.
    hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500: Defines styles to be applied when the button is hovered over. It includes a 
    translation effect to move the button 1 unit up (along the y-axis), a scaling effect to increase the button's size by 10%, and a background color 
    change to an indigo shade duration-300: Sets the duration of the transition effect to 300 milliseconds.
    ${styles}: This part represents a dynamic value being interpolated into the className. The value of styles is expected to be a string of additional 
    CSS classes that will be applied to the button. It allows for further customization of the button's appearance.*/
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-non ${styles} rounded-[10px] 
    transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100`}
    >
      PRODUCT INFORMATION
    </button>
  );
};

export default ButtonProduct;
