//import styles from the style.js
import styles from "../style";
import React from "react";

//import the stats array from constants
import { stats } from "../Constants";

const Stats = () => (
  /*Created a section that serves as a flex container. The contents within the section are aligned at the center of the main axis and the center of the 
    cross axis. The flex direction is set to row, allowing the contents to flow from left to right. If there is insufficient space within the flex container, the
    contents will wrap onto a new line.*/
  <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap`}>
    {/* We call the map method on the stats so as to iterate over all the obejcts/dictionaries contained in the array. For each object, 
      a callback function is invoked taking the stat(the current object/dictionary as the argument)
      The curly brackets are used to wrap the Javascript expression within the JSX code, allowing the dynamic rendering of the elements */}
    {stats.map((stat) => (
      /*Inside the map function, we are going to define a div that will be rendered based on the properties of the stats objects.
        For each stat object, we have created a div with the key stat.id. It serves as a flex container and allows its contents to either grow
        or shrink depending on the space available in the container. The contents within this div are aligned at the start of the main axis and at the center of
        the cross aciss. Flex-direction is set to flex-row allowing the contents to flow from left to right. The div has a margin of 3 on all sides creating
        spacing around each stat element. */
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        {/* To render a heading inside this div, we are setting the text properties to poppins family, semi-bold weight, size of 40px on extra small screens
          going up, leading/line spacing of 53px on extra small screens going up, text-colour of white and the heading is going to be the stat-value. */}
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>

        {/* To render a text inside this div, we are setting the text properties to poppins family, normal weight, size of 20px on extra small screens
          going up, leading/line spacing of 21px on extra small screens going up, text-colour of gradient and the text is going to be the stat-title. 
          The text is in uppercase and the p element has margin left of 3. */}
        <p className="font-poppins font-normal xs:text-[20px] text-15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
