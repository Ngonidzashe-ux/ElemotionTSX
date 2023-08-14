//import the logos from constants and the styles from the style module.
import styles from "../style";
import React from "react";

import { HKSTP, HKUmed, eng } from "../resources";

const Sponsors = () => (
  // create a section which is a flex container aligning its contents centrally along both the main and cross axes. It should have a vertical margin of 4
  <section className={`${styles.flexCenter} my-4`}>
    {/* Div element acting as a flex container aligning its contents centrally along both the main and cross axes. If contents are too big to fit on a single
    line, they should be wrapped onto the multiple lines and the div element should fill 100% width of its parent container. */}
    <div className={`flex  justify-between flex-wrap w-full`}>
      {/* Calling the map method on the sponsors array to iterate over each element/object/dictionary. We have a callback function inside the map function
      that takess a sponsor/current object as an argument */}

      {/* The call back function creates a new div for each element it iterates over. Div element has a sponsor id and allows the dynamic growth and shrinking
        of its elements to fit the size of the container. Aligns the content centrally along main and cross axis. The div element has a minimum width of 100px
    and on the small devices and above, the content should be positioned horizontally at the center along the main axis */}
      <div
        key={"1"}
        className={`flex-1 flex-wrap ${styles.flexCenter} max-w-[30%] bg-teal-500 rounded-lg `}
      >
        {/* Render an image component with the stated dimensions on a small device or larger and ensure that the image is scaled according to the object
          while maintaining its aspect ratio. className="w-[80%] block select-none mx-auto": The className attribute is used to apply CSS classes to the <img> element. Let's break down the classes:

w-[80%]: This class sets the width of the image to 80% of its original size. The [80%] is a dynamic value, indicating that it comes from Tailwind CSS's utility classes and allows you to specify a percentage width.

block: This class applies the display property with a value of block, which makes the image a block-level element, causing it to take up the full available width of its container and start on a new line.

select-none: This class applies the user-select property with a value of none, which prevents the image from being selected or highlighted by the user.

mx-auto: This class applies margin on the left and right side of the image, automatically centering it horizontally within its parent container.  */}
        <img
          src={eng}
          loading="lazy"
          alt="sponsor"
          className=" w-[80%] block select-none mx-auto   "
        />
      </div>

      <div
        key={"2"}
        className={`flex-1 flex-wrap ${styles.flexCenter} max-w-[30%] `}
      >
        {/* Render an image component with the stated dimensions on a small device or larger and ensure that the image is scaled according to the object
          while maintaining its aspect ratio  */}
        <img src={HKSTP} alt="sponsor" className=" w-[70%] " />
      </div>

      {/* <div>: This is an HTML <div> element, a generic container used to group and style content.

key={'3'}: The key attribute is used to uniquely identify elements when rendering dynamic lists in React. In this case, the value '3' is set as the key. It's essential for React's reconciliation process to efficiently update the list of elements if the content changes dynamically.

className={...}: This is the className attribute used to apply CSS classes to the element. It is set using a template literal that includes dynamic values and class names.

flex-1: This class applies flexbox properties to the element, allowing it to grow and take up available space in the flex container.

flex-wrap: This class applies the flex-wrap property with a value of wrap, allowing the flex items to wrap to multiple lines if needed.

${styles.flexCenter}: This is likely a dynamic class name that comes from the styles object. It applies styles to center the content within the flex container.

max-w-[30%]: This class sets the maximum width of the element to 30% of its parent container. The [30%] is a dynamic value, indicating that it comes from the styles object or is computed dynamically.

bg-teal-500: This class sets the background color of the element to a teal color from the Tailwind CSS color palette with a shade of 500.

p-2: This class applies padding to the element. The value 2 represents the amount of padding applied.

rounded-lg: This class applies a border-radius to the element, giving it rounded corners. */}
      <div
        key={"3"}
        className={`flex-1 flex-wrap ${styles.flexCenter} max-w-[30%] bg-teal-500 p-2 rounded-lg `}
      >
        {/* Render an image component with the stated dimensions on a small device or larger and ensure that the image is scaled according to the object
          while maintaining its aspect ratio  */}
        <img
          src={HKUmed}
          alt="sponsor"
          className="  w-[100%] block select-none mx-auto  "
        />{" "}
      </div>
    </div>
  </section>
);

export default Sponsors;
