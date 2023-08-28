// import the necessary layouts
import { layout } from "../style";
import styles from "../style";
import React from "react";

/*Define a CoreTeam card component which can take in the below props. This means you can extract these props from the objects that are passed into this card. 
Remember, an object is a dictionary here. */
const AdvisorCard = ({
  name,
  img,
  position,
  bullet1,
  bullet2,
  content1,
}: {
  name: any;
  img: any;
  position: any;
  bullet1: any;
  bullet2: any;
  content1: any;
}) => {
  return (
    /*Div element that is a flex container and has a flex-row direction for md and above screen sizes otherwise flex-col direction. Has margin top and margin bottom */
    <div className={`flex md:flex-row flex-col mt-10 mb-28`}>
      {/* Div element housing the img element, is a flex container and can arrange child elements in a flexible and dynamic way. Itself can grow and shrink depending 
      on the available space and its contents. Aligns child elements along the center of both the horizontal and vertical axis. Margin top 0f 0 on md and above device
      sizes otherwise margin top of 10. This dev has a relative positioning allowing the child elements to have absolute positioning. Use relative to
       position an element according to the normal flow of the document.*/}
      <div
        className={`flex-1 flex ${styles.flexCenter}  px-50 md:mt-0 mt-0 relative`}
      >
        {/* img element with object-fit of cover allowing the img to be resized to cover the container. Have a max height and spans the full width of container.
          Object positioning: objectPosition: 'center 75%': This sets the horizontal and vertical position of the element's contents within its container. 
          The horizontal position is set to center, which means the contents will be centered horizontally. The vertical position is set to 75%, which means 
          the contents will be vertically positioned at 75% from the top of the container. */}
        <img
          src={img}
          loading="lazy"
          alt={name}
          className="object-contain md:max-w-[320px] w-full md:max-h-[400px] h-full"
        />
      </div>

      {/* Div housing the paragraphs.
        flex-1: allow the growth and shrinking of this element to fit available space.
        flex-start: aligns contents along the center of the main axis and at the start of the cross axis(top)
        flex-col: direction of flex container is vertical has padding left valuess */}
      <div className={`${layout.sectionInfo} md:pl-16 pl-0`}>
        {/* Specifies the size of the border and its position which is top of the h4 element. Colour of the border is secondary */}
        <div className="border-t-[5px] md:mt-0 mt-10 border-secondary">
          {/* Heading */}
          <h4
            className={`font-poppins font-semibold xs:text-[48px] text-[40px] mt-4 text-white xs:leading-[46.8px] leading-[36.8px] w-full my-3`}
          >
            {name}
          </h4>
        </div>

        {/* Heading */}
        <h4
          className={`font-poppins font-semibold xs:text-[30px] text-[30px] text-secondary xs:leading-[36.8px] leading-[26.8px] w-full mb-3`}
        >
          {position}
        </h4>

        {/* List element with the below specifications of text and they render the bullet points */}
        <li className="font-poppins font-semibold text-white text-[22px] leading-[30.8px] my-1">
          {bullet1}
        </li>
        <li className="font-poppins font-semibold text-white text-[22px] leading-[30.8px] my-1">
          {bullet2}
        </li>

        {/* Paragraph */}
        <p className="font-poppins font-normal text-dimWhite text-[18px] my-5 leading-[30.8px]">
          {content1}
        </p>

        {/* Paragraph */}
      </div>
    </div>
  );
};

export default AdvisorCard;
