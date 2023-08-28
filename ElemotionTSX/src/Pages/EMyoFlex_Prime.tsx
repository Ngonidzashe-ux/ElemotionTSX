import { Navbar, Footer, ButtonBack } from "../Components";
import styles from "../style";
import { layout } from "../style";
import { img9 } from "../resources";
import { Link } from "react-router-dom";
import { aspects } from "../Constants";
import React from "react";

/*Declare a functional component using arrow syntax called aspect card. Uses object destructuring(evidenced by curly brackets around parameter names) and 
extracts the following props from each object passed as an argument. These properties are expected to be passed as props to the AspectCard component. */
const AspectCard = ({
  content,
  title,
  icon,
}: {
  content: any;
  title: any;
  icon: any;
}) => {
  return (
    // Flexible div container with central alignment of child elements along both axes. Vertically stacked children. Bg color of gray, specific width and margin
    <div className="flex justify-center flex-col items-center bg-gray-900 md:w-[30%] w-full mb-10 ">
      {/* Div housing an image. Has margin  */}
      <div className="mt-8">
        {/* Image with specific dimensions, with white colour and resized to stay contained in parent container*/}
        <img
          src={icon}
          loading="lazy"
          alt={title}
          className="w-[70px] h-[70px] brightness-0 invert object-contain"
        />
      </div>

      {/* flex container that spans full width of parent. Grows and shrinks depending on space availability, centers text and has padding  */}
      <div className="w-full flex-1  text-center px-3 py-10">
        {/* Heading with minimum height and width for alignment */}
        <h4 className="font-poppins min-h-[100px] min-w-[30%] font-semibold text-[35px] leading-[40px] text-white pb-2">
          {title}
        </h4>

        {/* Paragraph */}
        <p className="font-normal text-[20px] leading-[32px] text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

// Declare a functional component with arrow syntax called emg sensor
const EMyoFlex_Prime = () => {
  return (
    // See navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main div element with flex display. Children are vertically stacked and aligned to the start of both axes. */}
      <div className="flex flex-col justify-start items-start">
        {/* First sub div:
flex - flex container allowing for flexible positioning of children
md:flex-row flex-col - children are horizontally arranged in a row
 ${styles.paddingY} - padding along the y-axis*/}
        <div className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
          {/* First sub sub div:
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexStart} - div is a flex container, with children elements aligned at the start of the cross axis and at the center of the horizontal axis.
       flex-col - elements arranged vertically in a column
       has some padding*/}
          <div className={`${layout.sectionInfo} py-5  ${styles.paddingX}`}>
            {/* Heading */}
            <h4
              className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-secondary xs:leading-[56.8px] leading-[46.8px] w-full mb-10`}
            >
              eMyoFlex Prime
            </h4>

            {/* Paragraph */}
            <p className=" font-semibold text-dimWhite text-[40px] leading-[40.8px]">
              Portable EMG sensor for muscle activity detection.{" "}
            </p>

            {/* Paragraph */}
            <p className={`${styles.paragraph} mt-10`}>
              The portable EMG sensor features micro-structured electrodes, a
              highly integrated sensing system, and an app designed for
              intuitive visualization and tailored guidance. The sensor is small
              and lightweight without compromising detection accuracy, making it
              highly convenient for everyday use.{" "}
            </p>

            {/* Paragraph */}
            <p
              className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5`}
            >
              {/* Span */}
              <span className="text-white text-[20px]">
                Ideal Collaboration Partners are:{" "}
              </span>

              {/* Lists with the same classes as the one for paragraphs */}
              <li> Hospitals and Clinics</li>
              <li> Rehabilitation Centers </li>
              <li> Medical Device Distributors</li>
              <li> Sports Teams & Training Facilities</li>
            </p>
          </div>

          {/* Second sub sub div. 
        Houses our image. Its a flex container with dynamic shrinking and growing. Aligned to the center of both axes. Has some padding and margin */}
          <div
            className={`flex-1 flex ${styles.flexCenter} md:pr-10 px-4 md:mt-0 mt-2 `}
          >
            {/* Image spanning the full width and height of parent. REsizes to fully cover the parent */}
            <img
              src={img9}
              alt="industry"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          {/* Second sub div. 
      Flex container that can grow or shrink to fit space. Children arranged horizontally in a row on md and above otherwise vertically stacked. Can be wrapped onto 
      multiple lines if all cannot fit on one line. Ensures even spacing between the children. Spans the full width. Has some padding and margin */}
          <div className="flex flex-1 md:flex-row flex-col flex-wrap justify-between w-full  mt-8 md:px-16 px-6">
            {/* We want to convey information stored in the aspects array. To iterate over every object, we call the map function on the aspects array and we enclose it in curly brackets
because it is a JS function. We also pass a call back funtion into the map function, which is a function that will immediately be executed after every iteration
and in this case, the callback function involves the rendering of the Aspect card. Card is a parameter of the callback function represented the current object of iteration.

The card id is used as the key attribute and the spread operator is used to pass all the properties of the card/object as individual props to the AspectCard Componet*/}
            {aspects.map((card) => (
              <AspectCard key={card.id} {...card} />
            ))}
          </div>

          {/* Div for a button. Aligned to the center of both axes */}
          <div className="flex  justify-center items-center">
            {/* Wrap the button with a link tag that allows navigation to another page, in this case, absolute url /products. Uses the onclick event handler to ensure
        the page is scrolled smoothly to the top of the destination page. */}
            <Link
              to="/products"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link-style"
            >
              {/* Pass a styles prop that will be evaluated inside the button component.
          
The syntax you provided <ButtonBack styles='my-2'/> is actually using a prop, but it might look a bit different due to the use of a string value without curly braces. Let me explain the difference between a prop and an attribute and address why it might appear this way:

Prop vs. Attribute:

Prop: In React, a prop (short for property) is a value that you can pass to a React component when you use it. Props are used to pass data from a parent 
component to a child component and are typically enclosed in curly braces {} when used in JSX.

Attribute: An attribute is a standard HTML attribute that you can include in an HTML element. When you use an attribute in JSX, you don't need to enclose its value in curly braces.


Difference in Syntax:
The syntax you provided <ButtonBack styles='my-2'/> is passing a prop named styles to the ButtonBack component with the value 'my-2'. The reason it looks 
different from other props is that it's using a string literal directly as the value, without the need for curly braces.
Usually, when you have a complex expression or a JavaScript variable that you want to pass as a prop, you use curly braces to indicate that you're 
embedding JavaScript within JSX. The ButtonBack component is designed to accept a prop named styles.



The line const ButtonBack = ({ styles }) => { indicates that the styles variable is being extracted from an object using object destructuring. 
In this case, it's a simple object destructuring where the styles prop is being extracted from the props object passed to the ButtonBack component.
Here's how you can interpret the code:
const ButtonBack: This defines a new functional component named ButtonBack.
({ styles }): This is the parameter list for the component, and it's using object destructuring.
 It's extracting the styles prop from the props object that is passed to the ButtonBack component.*/}
              <ButtonBack styles="my-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* See footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EMyoFlex_Prime;
