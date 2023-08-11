import { Navbar, Footer } from "../Components";
import styles from "../style";
import { img4 } from "../resources";
import { layout } from "../style";
import { useState, useEffect } from "react";
import { healthcare, sports, vr } from "../Constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ApplicationsPage = () => {
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

    /*const newIndex = isFirstSlide ? healthcare.length - 1 : currentIndex - 1;: This line calculates the index of the previous slide based on the 
    value of isFirstSlide. If isFirstSlide is true, meaning the current slide is the first one, it sets newIndex to the last index in the healthcare array 
    (assuming healthcare is an array of slide data). If isFirstSlide is false, it sets newIndex to currentIndex - 1, which represents the index of the previous 
    slide. */
    const newIndex = isFirstSlide ? healthcare.length - 1 : currentIndex - 1;

    /*setCurrentIndex(newIndex);: This line uses the setCurrentIndex function, which was likely defined using the useState hook, to update the value of the 
    currentIndex state variable with the newly calculated index (newIndex). This will trigger a re-render of the component, causing the UI to update to display
     the previous slide. */
    setCurrentIndex(newIndex);
  };

  /*const nextSlide = () => { ... }: This defines a function named nextSlide using arrow function syntax. It has no parameters. */
  const nextSlide = () => {
    /* const isLastSlide = currentIndex === healthcare.length - 1;: This line checks if the current slide index (currentIndex) is equal to 
    the index of the last slide in the healthcare array. If it is, isLastSlide will be true, indicating that the current slide is the last one.*/
    const isLastSlide = currentIndex === healthcare.length - 1;

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
    /*const isLastSlide = currentIndex === healthcare.length - 1;: This line checks if the current slide index (currentIndex) is equal to the index of the last slide in the healthcare array. It assigns true to the isLastSlide variable if the condition is met; otherwise, it assigns false. */
    const isLastSlide = currentIndex === healthcare.length - 1;

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
    // See navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Flex container with central positioning of child elements. Stacks children vertically and has relative positioning allowing for children's absolute positioning.
       */}
      <div className={`${styles.flexCenter} flex-col relative mb-12`}>
        {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. Object positioning to change the section of image that is being shown*/}
        <img
          src={img4}
          alt="industry"
          className="object-contain relative object-cover w-full h-[680px]"
          style={{ objectPosition: "center 55%" }}
        />

        {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. Object positioning to change the section of image that is being shown*/}

        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70"></div>
        {/* Render a div element that has absolute positioning too. This means it does not vertically stack below the divs/elements above it but will be
        positioned based on the classnames of the parent container. The parent container has a flex center which means since the current div is a child element,
        it is going to be positioned along the center of the parent container and this is going to be exact same position as the video which means its going
        directly on top of the img. */}
        <div className={`${styles.flexCenter}  absolute`}>
          {/* Heading */}
          <h4 className="font-poppins font-bold xs:text-[100px] text-[50px] text-white xs:leading-[56.8px] leading-[46.8px] w-full pb-4 border-b-[10px] border-secondary">
            Applications
          </h4>
        </div>
      </div>

      {/* 
flex - flex container allowing for flexible positioning of children
md:flex-row flex-col - children are horizontally arranged in a row
 ${styles.paddingY} - padding along the y-axis*/}
      <div className={`${layout.section}`}>
        {/* 
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexStart} - div is a flex container, with children elements aligned at the start of the cross axis and at the center of the horizontal axis.
       flex-col - elements arranged vertically in a column
       has some margin, height dimension and relativity*/}
        <div
          className={`${layout.sectionInfo} my-10  h-[600px] relative md:ml-10 ml-0  `}
        >
          {/* heading */}
          <h4 className={`${styles.heading2} mb-5`}>
            EleMotion in <span className="text-secondary">Health Care </span>{" "}
          </h4>

          {/* List elements with classnames */}

          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Assessment of Muscle Function
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Biofeedback Therapy
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Neurological Rehabilitation
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Prosthetic Control
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Motor Learning & Skill Acquisition
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Muscle Strengthening & Conditioning
          </li>
        </div>

        {/* 
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexCenter} - div is a flex container, with children elements aligned at the center of the cross axis and at the center of the horizontal axis.
       flex - flex container
       has some padding*/}
        <div className={`${layout.sectionImg} sm:pr-16 pr-6`}>
          {/* max-w-[1400]px: This class sets the maximum width of the element to 1400 pixels. The max-w- prefix is used to apply responsive width values.
          h-[600px]: This class sets the height of the element to 600 pixels. Similar to max-w-, the h- prefix is used to apply responsive height values.
          w-full: This class sets the width of the element to 100% of its parent container.
          m-auto: This class centers the element horizontally within its parent container by applying automatic margins.
          relative: This class establishes a relative positioning context for the element. This is often used as a base for absolutely positioned child elements.
          group: This class is typically used to define a group of elements that share common behavior when interacting with them, such as hover or focus effects.
          For example, let's say you have a parent <div> element with the group class, and this <div> contains multiple child elements like buttons, links, or other interactive 
          elements. By applying styles to the group parent and utilizing the group-hover or group-focus variants, you can create interactive effects that affect the 
          child elements when the parent is hovered or focused.*/}
          <div className="max-w-[1400]px h-[600px] w-full  m-auto   relative group">
            {/* 
backgroundImage: This CSS property sets the background image of an element. In this case, it's being used to set the background image of the element. The value is enclosed in backticks (``) to allow the interpolation of dynamic data.
url(${healthcare[currentIndex].icon}): This is a template string that dynamically generates the URL for the background image. The ${} syntax is used to insert a JavaScript expression inside the string. In this case, it's using the value of healthcare[currentIndex].icon as the URL for the background image.
Here's a step-by-step breakdown of how the code works:
healthcare[currentIndex].icon: This accesses the icon property of an object in the healthcare array at the index specified by currentIndex.
${healthcare[currentIndex].icon}: This wraps the icon value in a template string, creating a string that represents the URL of the background image.
url(${healthcare[currentIndex].icon}): This creates a complete URL value that is suitable for use as the backgroundImage property.
The resulting URL is assigned to the backgroundImage property within the inline style object. This effectively sets the background image of the HTML element to the URL specified by the value of healthcare[currentIndex].icon.
*/}
            <div
              style={{
                backgroundImage: `url(${healthcare[currentIndex].icon})`,
              }}
              /*
              w-full: This class sets the width of the element to 100% of its parent's width.
h-full: This class sets the height of the element to 100% of its parent's height.
rounded-2xl: This class adds rounded corners to the element, making it have a rounded appearance. The 2xl value determines the amount of rounding.
bg-center: This class sets the background image to be centered within the element.
bg-cover: This class scales the background image to cover the entire element, cropping if necessary to maintain the aspect ratio.
duration-500: This class sets the transition duration for changes to the element's properties to 500 milliseconds.
relative: This class positions the element relatively within its parent container. This allows you to use absolute positioning for child elements if needed.
               */
              className="w-full h-full rounded-2xl bg-center bg-cover relative"
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
              {/* Call the map function on the healthcare array. Curly brackets because it is a JS function. Pass in callback function with slide(current object) and index
              as the parameters. When executed, the callback function should render a div with a key attribute equal to the index of the object in question. 
              When clicked, you go the slide that corresponds to the index of the object. The text-2xl allows the rexdots to be a little bit bigger and they cursor converts
              to a pointer when the dots are hovered over. If the index of the slide is equal to the current slide, then the corresponding dot should have a secondary colour otherwise should
              remain white.  */}
              {healthcare.map((_, Index) => (
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
        </div>
      </div>

      {/* See above */}
      <div className={`${layout.section}`}>
        <div
          className={`${layout.sectionInfo} h-[600px] my-10 relative md:ml-10 ml-0  `}
        >
          <h4 className={`${styles.heading2} mb-5`}>
            EleMotion in{" "}
            <span className="text-secondary">Sports & Fitness </span>{" "}
          </h4>

          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Training Optimization
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Technique Refinement
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Injury Prevention & Rehabilitation
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Muscle Recovery
          </li>
        </div>
        <div className={`${layout.sectionImg} sm:pr-16 pr-6 pb-10`}>
          <div className="max-w-[1400px] h-[600px] w-full  m-auto relative group">
            <div
              style={{ backgroundImage: `url(${sports[currentIndex].icon})` }}
              className="w-full h-full  rounded-2xl bg-center bg-cover duration-500 relative"
            >
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
            <div className="flex justify-center items-end my-10">
              {sports.map((_, Index) => (
                <div
                  key={Index}
                  onClick={() => goToSlide(Index)}
                  className={`text-2xl cursor-pointer ${
                    Index === currentIndex ? "text-secondary" : "text-white"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>

      {/* see above */}
      <div className={`${layout.section}`}>
        <div
          className={`${layout.sectionInfo}  h-[600px] my-10 relative md:ml-10 ml-0  `}
        >
          <h4 className={`${styles.heading2} mb-5`}>
            EleMotion in <span className="text-secondary">VR/AR </span>{" "}
          </h4>

          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Gesture Recognition
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Gaming and Entertainment
          </li>
          <li className="font-normal font-semibold text-dimWhite text-[35px] leading-[30.8px] mb-5">
            Human-Computer Interaction
          </li>
        </div>
        <div className={`${layout.sectionImg} sm:pr-16 pr-6`}>
          <div className="max-w-[1400px] h-[600px] w-full  m-auto  px-4 relative group">
            <div
              style={{ backgroundImage: `url(${vr[currentIndex].icon})` }}
              className="w-full h-full  rounded-2xl bg-center bg-cover duration-500 relative"
            >
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
            <div className="flex justify-center items-end my-10">
              {vr.map((_, Index) => (
                <div
                  key={Index}
                  onClick={() => goToSlide(Index)}
                  className={`text-2xl cursor-pointer ${
                    Index === currentIndex ? "text-secondary" : "text-white"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* see footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
