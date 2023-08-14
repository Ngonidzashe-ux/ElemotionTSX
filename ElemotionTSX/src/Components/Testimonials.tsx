//import required modules and componentss
import { feedback } from "../Constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import React from "react";

const Testimonials = () => (
  /*${styles.paddingY}: This class is likely defined in the styles module and sets the padding on the y-axis (top and bottom) for the section.
  ${styles.flexCenter}: This class is also likely defined in the styles module and sets the flex properties to center the content horizontally 
  and vertically within the section.
  flex-col: This class sets the flex-direction of the section to column, meaning the flex items within the section will be stacked vertically.
  relative: This class sets the position property of the section to relative. This allows the section to serve as a positioning context for 
  any absolutely positioned elements within it.*/
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/*<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />*/}

    {/* justify-between: it distributes the child elements within the flex container, pushing them to the left and right edges, with equal spacing between them.
    relative: This class sets the position property to relative. It positions the element relative to its normal position in the document flow and establishes 
    a new positioning context for its child elements.
    z-[1]: This class sets the z-index property to 1, specifying the stacking order of the element. Elements with a higher z-index value will appear in 
    front of elements with a lower value. In this case, the element will have a higher stacking order than other elements with a lower z-index value.*/}
    <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1]">
      {/*I have removed the following utility class: sm:mb-16 mb-6*/}

      {/* Heading 2 */}
      <h2 className={styles.heading2}>EleMotion Lead Team</h2>

      {/*<div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>*/}
    </div>

    {/* flex - display property of the element to flex. 
      sm:justify-start: On small screens and above (sm breakpoint), justifies the flex items to the start of the container.
      relative: Positions the element relative to its normal position, allowing absolute positioning of its child elements.
       z-[1]: Sets the z-index of the element to 1, controlling its stack order relative to other elements.
       feedback-container: This rule selects the last child element with the class .feedback-card within the .feedback-container 
       element and removes the right margin, effectively aligning it flush with the container's edge. */}
    {/* <div className="flex flex-wrap sm:justify-start justify-center justify-end w-full feedback-container relative z-[1]"> */}
    <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}: This code maps over an array of feedback objects 
            and renders a FeedbackCard component for each object. Each FeedbackCard component is given a unique key prop based on its id property. */}
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
