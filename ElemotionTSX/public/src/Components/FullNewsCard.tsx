import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

/*Defining a functional component using the arrow syntax. The below parameters represent the specific props to be extracted from the object that would have been passed in as arguments
using object destructuring */
const FullNewsCard = ({
  content,
  title,
  icon,
}: {
  content: any;
  title: any;
  icon: any;
}) => {
  /*const: This keyword is used to declare a constant variable in JavaScript. In this case, it's used to define the constant currentIndex that will store the current index value.
[currentIndex, setCurrentIndex]: This is array destructuring syntax. It assigns the first element of the array (the current value of currentIndex) to the variable currentIndex, and the second element (the setCurrentIndex function) to the variable setCurrentIndex.
useState(0): This is a React hook function that initializes a state variable and its corresponding updater function. In this case, it initializes the currentIndex state variable with an initial value of 0. The useState hook returns an array containing the current state value (currentIndex) and the function (setCurrentIndex) to update it.
In summary, this code sets up a state variable called currentIndex with an initial value of 0 using the useState hook. The currentIndex variable will be used to keep track of the index of the currently displayed slide or element in a UI component, such as a slide show or carousel. The setCurrentIndex function can be used to update the value of currentIndex when needed. */
  const [currentIndex, setCurrentIndex] = useState(0);

  /*const prevSlide = () => { ... }: This defines an arrow function named prevSlide. */
  const prevSlide = () => {
    /*const isFirstSlide = currentIndex === 0;: This line checks if the current slide index (currentIndex) is equal to 0, which 
    indicates that the current slide is the first slide. It assigns the result of this comparison to the isFirstSlide variable.
    The result is either true/Faslse */
    const isFirstSlide = currentIndex === 0;

    /*const newIndex = isFirstSlide ? icon.length - 1 : currentIndex - 1;: This line calculates the index of the previous slide based on the 
    value of isFirstSlide. If isFirstSlide is true, meaning the current slide is the first one, it sets newIndex to the last index in the icon array 
    (assuming icon is an array of slide data). If isFirstSlide is false, it sets newIndex to currentIndex - 1, which represents the index of the previous 
    slide. */
    const newIndex = isFirstSlide ? icon.length - 1 : currentIndex - 1;

    /*setCurrentIndex(newIndex);: This line uses the setCurrentIndex function, which was likely defined using the useState hook, to update the value of the 
    currentIndex state variable with the newly calculated index (newIndex). This will trigger a re-render of the component, causing the UI to update to display
     the previous slide. */
    setCurrentIndex(newIndex);
  };

  /*const nextSlide = () => { ... }: This defines a function named nextSlide using arrow function syntax. It has no parameters. */
  const nextSlide = () => {
    /* const isLastSlide = currentIndex === healthcare.length - 1;: This line checks if the current slide index (currentIndex) is equal to 
    the index of the last slide in the healthcare array. If it is, isLastSlide will be true, indicating that the current slide is the last one.*/
    const isLastSlide = currentIndex === icon.length - 1;

    /*const newIndex = isLastSlide ? 0 : currentIndex + 1;: This line calculates the index of the next slide. If isLastSlide is true, meaning the current 
    slide is the last one, the newIndex is set to 0 (looping back to the first slide). Otherwise, if isLastSlide is false, the newIndex is set to 
    currentIndex + 1, indicating the index of the next slide in the array. */
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    /*setCurrentIndex(newIndex);: This line updates the state variable currentIndex with the value of newIndex, effectively transitioning to the next slide in the slideshow. */
    setCurrentIndex(newIndex);
  };

  /*const goToSlide = (index) => { ... }: This declares a function named goToSlide that takes a single parameter called index. The parameter index represents the index of the slide to which you want to navigate. */
  const goToSlide = (Index: any) => {
    /*setCurrentIndex(index);: This line updates the state variable currentIndex with the value of the index parameter. This action changes the current slide being displayed in the slideshow to the one specified by the provided index. */
    setCurrentIndex(Index);
  };

  // const autoPlay = () => { ... }: This declares a function named autoPlay.
  const autoPlay = () => {
    /*const isLastSlide = currentIndex === icon.length - 1;: This line checks if the current slide index (currentIndex) is equal to the index of the last slide in the healthcare array. It assigns true to the isLastSlide variable if the condition is met; otherwise, it assigns false. */
    const isLastSlide = currentIndex === icon.length - 1;

    /*const newIndex = isLastSlide ? 0 : currentIndex + 1;: This line determines the index of the next slide. If isLastSlide is true, indicating that the current slide is the last slide, the newIndex is set to 0, which wraps around to the first slide. If isLastSlide is false, the newIndex is set to the current index plus 1, advancing to the next slide. */
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    /*setCurrentIndex(newIndex);: This updates the currentIndex state with the newly calculated index, effectively changing the active slide to the next one. */
    setCurrentIndex(newIndex);
  };

  /*useEffect(() => { ... }, [currentIndex]);: This useEffect hook is set up to monitor changes in the currentIndex state. It means the effect will run whenever the currentIndex state changes. */
  useEffect(() => {
    /* const intervalId = setInterval(autoPlay, 3000);: Inside the effect, an interval is created using the setInterval function. The autoPlay function (not shown in your snippet) is executed every 3000 milliseconds (3 seconds) in this case. This function likely advances the current slide to the next one, thus creating an automatic slide transition */
    const intervalId = setInterval(autoPlay, 3000); // Change slide every 3 seconds (adjust this value as needed)

    /*return () => clearInterval(intervalId);: This is the cleanup function that is returned by the useEffect hook. It will be called when the component unmounts or when the effect re-runs due to changes in its dependencies. In this case, it clears the interval using the clearInterval function, which stops the automatic sliding behavior when the component is no longer rendered or when the currentIndex changes. */
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    /*Flex container that dynamically grows and shrinks. Ensures even spacing between children. Vertically stacks children and spans full height and width of container and has some margins */
    <div className="flex flex-1 justify-between flex-col w-full h-full md:mr-10 sm:mr-5 mr-0  ">
      {/* flex div that arranges children horizontally in a row */}
      <div className="flex flex-row">
        {/* Flex div that has specific height and width. Has automatic margins on all sides with relative positioning allowing the absolute positioning of children. Has group class
        which allows this div and its children to be treated as group/block. Has specific positioning of the image  */}
        <div
          className=" h-[700px] w-full  m-auto  relative group"
          style={{ backgroundPosition: "center 80%" }}
        >
          {/* Use the css style to define the positioning of background img. Background image: defined below */}
          <div
            style={{
              backgroundImage: `url(${icon[currentIndex].img})`,
              backgroundPosition: "center 35%",
            }}
            /*w-full: Sets the width of the element to 100% of its parent's width.
h-full: Sets the height of the element to 100% of its parent's height.
flex: Applies flexbox layout to the element's children.
transition-transform duration-10000 ease-in-out: Configures a transition effect on the transform property with a duration of 10 seconds and an ease-in-out timing function.
bg-center: Positions the background image at the center of the element.
bg-cover: Ensures that the background image covers the entire element's content area.
relative: Sets the element as a positioned element within its parent. */
            className='w-full h-full flex transition-transform duration-10000 ease-in-out"
        bg-center bg-cover relative'
          >
            {/* Start Here: Left Arrow:
              hidden: This class hides the element by default, making it invisible.
              group-hover:block: When the parent element with the group class is hovered, this class makes the hidden element become visible 
              (block is a display value that makes an element a block-level element)
              absolute: This class positions the element absolutely within its nearest positioned ancestor (an ancestor element that has a relative, 
                absolute, fixed, or sticky position). Overides the normal flow of divs on a document.
              top-[50%]: This sets the top position of the element to 50% of its containing block.
              -translate-x-0: This class applies a horizontal (X-axis) translation to the element. In this case, it moves the element 0 units to the left.
translate-y-[-50%]: This class applies a vertical (Y-axis) translation to the element. It moves the element 50% of its own height upwards. The -50% means moving it half of its height
left-5: This class sets the left position of the element to 5 units from its containing block.
text-2xl: This sets the text size to a larger size (2xl in Tailwind CSS).
rounded-full: This gives the element a circular shape by setting its border-radius to 50%.
p-2: This adds padding of 2 units to all sides of the element.
bg-black/20: This sets the background color to black with 20% opacity.
text-white: This sets the text color to white.
cursor-pointer: This changes the cursor to a pointer when hovering over the element, indicating that it can be interacted with.
              */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
              {/* <BsChevronCompactLeft />: This is a JSX component that renders the BsChevronCompactLeft icon from the react-icons/bs package. This icon represents a left-facing chevron arrow.
                onClick={prevSlide}: This is an event handler that specifies what should happen when the icon is clicked. In this case, it's calling the prevSlide function. The function is likely responsible for navigating to the previous slide in a slide show or carousel.
                size={30}: This sets the size of the icon to 30 units (pixels or another unit of measurement). The specific size may vary based on the design and layout requirements of your application */}
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow. Samething with the left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>

          {/* div that is a flex container, aligned to the center of horizontal axis and the end of the cross axis. Margin */}
          <div className="flex justify-center items-end my-10">
            {/* Call the map function on the icon array. Curly brackets because it is a JS function. Pass in callback function with slide(current object) and index
              as the parameters. When executed, the callback function should render a div with a key attribute equal to the index of the object in question. 
              When clicked, you go the slide that corresponds to the index of the object. The text-2xl allows the rexdots to be a little bit bigger and they cursor converts
              to a pointer when the dots are hovered over. If the index of the slide is equal to the current slide, then the corresponding dot should have a secondary colour otherwise should
              remain white.  */}
            {icon.map((_: any, Index: any) => (
              <div
                key={Index}
                onClick={() => goToSlide(Index)}
                className={`text-2xl cursor-pointer ${
                  Index === currentIndex ? "text-secondary" : "text-white"
                }`}
              >
                {/* Render the dots inside this div */}

                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        {/* )} */}
      </div>
      {/* Render a div that spans full width of parent, dynamic growth, white border top of 4px and padding */}
      <div className="w-full flex-1  border-t-[4px] border-t-[#FFFFFF] px-3 py-20">
        {/* Heading */}
        <h4 className="font-poppins font-semibold text-center text-[50px] leading-[50px] text-white">
          {title}
        </h4>

        {/* Inside the div, call the map function on content and pass in a call back function to render a p element. */}
        {content.map((paragraph: any, index: any) => (
          <p
            key={index}
            className="font-poppins font-normal text-dimWhite text-[20px] leading-[32.8px] pt-10"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FullNewsCard;
