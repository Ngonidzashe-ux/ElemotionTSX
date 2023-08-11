/* Declare a react arrow function named Aspect Card and its name should start with an uppercase letter. It takes an object as an argument with two properties, icon
and title. ({icon, title}): This is known as destructuring assignment. It allows you to extract the icon and title properties from the first argument object 
directly. This way, when using the AspectCard component, you can pass an object with icon and title properties, and the component will automatically extract 
and use those values. The curly brackets is a way to o access the individual properties without having to reference them using the dot notation
 (e.g., props.icon, props.title).  */
const AspectCard = ({ icon, title }: { icon: string; title: string }) => {
  /* JSX is a syntax extension for JavaScript, and it allows you to write XML-like code to describe the structure and content of the UI elements. 
      JSX code is transformed into regular JavaScript code during the build process by tools like Babel. THE JSX code is within the return statement and once
      you enter into the first div or section, you have entered into jsx. */

  return (
    /*This is a flex container which means it uses the flex layout to organize its child elements in a flexible and dynamic way.
      Flex-1 allows for the current div item to grow and shrink as needed ignoring its initial size to take up the available space in a flex layout.
      Child elements are aligned along the left of the container's horizontal axis and along the center of the cross axis. The flex direction of the 
      elements is from top to bottom, making the flex container stack its elements vertically and the div container has a minimum w of 30% of its parent 
      container and h of 100px. Medium devices will have a margin right of 10 and small devices of 5 otherwise no mr. Div has a margin bottom of 10. */
    <div className="flex flex-1 justify-start  items-center flex-col min-w-[30%] min-h-[100px] md:mr-10 sm:mr-5 mr-0 mb-10 ">
      {/* A flex container with child elements aligned centrally along the main axis and the cross axis. Margin top of 2 */}
      <div className="flex justify-center items-center mt-2 ">
        {/* Image element with specified width and height dimensions. Brightness-0 applies 0 brightness to the image which means its dark while invert will invert
          the colours of the img and this result in while image. Object cover means resizing the element's content to fit its container */}
        <img
          src={icon}
          alt={icon}
          className="w-[40px] h-[40px] brightness-0 invert object-cover"
        />
      </div>

      {/* A flex container with flex direction of column. Child elements are aligned at the center of the horizontal and cross axis with a padding top and x */}
      <div className=" flex flex-col  justify-center items-center pt-4 px-1 ">
        {/* font family of poppins, normal weight and text-center aligns the text content to the center horizontally within its container. */}
        <p className="font-poppins font-normal text-[16px] text-center leading-[16px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AspectCard;
