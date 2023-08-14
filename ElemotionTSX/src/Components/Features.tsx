//import the required components
import { features } from "../Constants";
import styles from "../style";
import React from "react";

const FeatureCard = ({
  content,
  title,
  icon,
}: {
  content: any;
  title: any;
  icon: any;
}) => (
  /*Div element represents a container with flexbox properties, padding on the x and y axis, rounded corners by 20px and with a maximum width of 600px.
  Applies a margin-right of 12 units for medium sized screens and margin right 5 for small sized screens and larger. For screen sizes smaller than the stated ones,
  the margin right is 0. Margin on the y axis is 5 providing a vertical spacing of 5 units. The element has a transparent background due to the feeature-card
  class. In the index.css file, there is a class defined called .feature-card:hover {background: var(--black-gradient) which is basically a class to determine 
    what happens when the div container is hovered upon and in this case, a hover changes the background from transparent to a black gradient.} 
    Even spacing for contents and arranged vertically*/
  <div className="flex justify-between flex-col px-12 py-12 rounded-[20px] max-w-[46%] md:mr-12 sm:mr-5 mr-0 my-5 bg-gray-800">
    {/* Render imagae component to fit the specified dimensions but should be circular */}
    <img
      src={icon}
      loading="lazy"
      alt={title}
      className="w-[100px] h-[100px] object-cover rounded-full"
    />
    {/*I removed the object contain. Make sure to check this out if there are problems*/}

    {/* Div element which is a flex container that has a flex direction of row */}
    <div className="flex flex-row">
      {/*n Flex div with the flex-direction of column and margin top of 5.   */}
      <div className="flex flex-col mt-5">
        {/* Render H4 elemented title */}
        <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-white">
          {title}
        </h4>
      </div>
    </div>

    {/* Text with a margin on top and bottom of 5 */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite my-5">
      {content}
    </p>
  </div>
);

// Creating a functional component using the arrow function syntax
const Features = () => (
  /*Create section with padding acting as a flex container and aligned centrally along the vertical and horizontal axis. Flow of content from top to bottom
  and provides absolute positioning of the child elements. */
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/* Div that spans entire width of parent container with even space between contents. Contents aligned at the center of the vertical axis. Flow of content 
    is row on md and above devices and flex col otherwise. Facilitates absolute positioning of child elements and has a z index onf 1 */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1]">
      {/* Render heading below */}
      <h2 className={styles.heading2}>Features of EleMotion Technology</h2>
    </div>

    {/*Create a div element that acts as a flex container and allows the contents to be wrapped on multiple lines. On small devices and above, contents are aligned
    at the start of the horizontal axis(left) but otherwise on the center and end. Element should span the full width of parent and facilitates absolute positioning
    of child elements. Uses the feedback container to set the margin right of the last child to 0px.*/}
    <div className="flex flex-wrap justify-between  w-full feedback-container relative z-[1]">
      {/*Call the map method on the features array and have a callback function that takes two parameters  */}
      {features.map((feature) => (
        /* With each iterated object, the callback function renders a featurecard, passing the key prop to be able to track each card and update it accordingly.
      Uses the spread operator to pass all the key value pairs in each object as props to the Featurecard which will be transformed into classes when passed
      to the FeatureCard Component. Explicitly passes the index prop */
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;
