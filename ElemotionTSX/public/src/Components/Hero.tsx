//The syntax for importing layout is used when you want to import specific named exports from a module.
import styles, { layout } from "../style";

//Import pictures
import { img3 } from "../resources";

//Import Button
import ButtonDiscover from "./ButtonDiscover";

const Hero = () => (
  /*Flex enables the flexbox layout and allows the child elements of the section to be flex items and provides flexible positioning and alignment capabilities
  md:flex-row is applied only for medium-sized screens and above and sets the flex-direction to be a row from left to right
  flex-col is applied for small screens and sets the flex direction to be a column from top to bottom
  paddingy includes vertical padding as defined in the styles object. */
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Flex-1 - make the div take up the available space within the parent container allow it to expand and fill the remaining space vertically
    Flexstart makes the contents start from the top of the container going downwards
    Flex-col is applied to set the flex-direction to be a column and arranges the child elements vertically from top to bottom */}
    <div
      className={`flex-1 flex justify-between items-start flex-col feature-car py-10`}
    >
      {/* font-poppins(family) font-normal(weight) text-dimWhite(colour) text-[18px](size) 
      leading-[30.8px] -  determines the vertical space between lines of text within a block.  */}
      <h4 className="font-poppins font-semibold text-secondary text-[25px] leading-[30.8px]">
        MIND MUSCLE CONNECTION{" "}
      </h4>

      {/* font-poppins font-semibold xs:text-[48px] text-[40px] - xs and up will have 48 otherwise 40
       text-white xs:leading-[66.8px] leading-[56.8px] w-full - sets the width of the element to 100% of its container. Span full width of parent container */}
      <h1
        className={`font-poppins font-bold xs:text-[80px] text-[40px] text-white xs:leading-[56.8px] leading-[46.8px] w-full mt-4 mb-4`}
      >
        EleMotion Tech
      </h1>

      {/* Sets the max width of this element to 470px */}
      <h4
        className={` font-normal text-dimWhite text-[30px] leading-[30.8px] max-w-[480px]`}
      >
        Revolutionize health monitoring with our advanced module.
      </h4>

      {/* styles in this case is a prop short for properties. margin-top of 10 adds vertical spacing above the button element.
      The styles prop is passed to the ButtonDiscover component with the value 'mt-10'.
      Props are a way to pass data from a parent to a child component and they are similar to arguments in JS. Props allow you to configure and customize 
      the behavior and appearance of a component by passing values to it. The parent component provides the props, and the child component receives and 
      uses them. Props are passed as attributes to the child component when it is rendered. In the child component, props can be accessed and used as
      variables or values. When this props is passed into the Button discover, in the Button discover component is accessed using props.styles and the prop
      value is then used as the classname attribute of the button element*/}
      <ButtonDiscover styles="mt-10" />
    </div>

    {/* flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative md:ml-10: This class applies a left margin of 10 units 
    (specified in the CSS framework) to the container on medium-sized screens and larger (md represents the breakpoint for medium screen sizes).
     ml-0: This class removes the left margin on smaller screens (the default behavior).md:mt-0: This class removes the top margin on medium-sized 
     screens and larger. mt-10: This class applies a top margin of 10 units on smaller screens.*/}
    <div className={layout.sectionImg}>
      {/* Here, the classes "w-[100%]" and "h-[100%]" are used to set the width and height of the image to 100% of its container, ensuring it 
      scales proportionally. */}
      <img src={img3} alt="chip1" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Hero;
