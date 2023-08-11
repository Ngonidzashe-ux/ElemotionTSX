// Import necessities
import { Link } from "react-router-dom";
import { linkedin } from "../assets";

// Declare a component with the following props as parameters, so that they can be extracted from every object that will be passed as an object.
const InternCard = ({
  name,
  img,
  position,
  major,
  university,
  linked_in,
}: {
  name: any;
  img: any;
  position: any;
  major: any;
  university: any;
  linked_in: any;
}) => {
  return (
    /* Flex container that can dynamically grow and shrink depending on space availability. Has a flex direction of 
      column. Has a min width on md and a max width on sm. Specific height on all devices, bg colour and margins. Transition ease in out delay allows the movement
      of this div. When hovered, it moves 1 unit up and also increases its size by 5% for a duration of 100ms. */
    <div
      className="flex flex-1 flex-col md:min-w-[395px] h-[550px] sm:max-w-[395px] md:mr-10 sm:mr-5 mr-0 my-8 bg-gray-800 feedback-container
      transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-105 duration-100"
    >
      {/* Div with specified height and width */}
      <div style={{ height: "260px", width: "100%" }}>
        {/* Image element that spans the full width and height of the parenet container and has a specific positioning due to the style attribute. */}
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
      </div>

      {/* Div flex element that spans full width of parent container. Shrinks or grows and also is a flex container. Flex direction is col and contents are aligned
        along the starting positions of both the main and cross axes. Has a border at the top of 4px that is white in colour. Ha padding  */}
      <div className="w-full flex-1 flex flex-col justify-start  items-start border-t-[4px] border-t-[#FFFFFF] px-3 py-10">
        {/* Heading */}
        <h4 className="font-poppins font-semibold text-[26px] leading-[32px] text-white">
          {name}
        </h4>

        {/* Heading */}
        <h4 className="font-poppins font-semibold text-[18px] leading-[22px] text-white">
          {position}
        </h4>

        {/* Paragraph */}
        <p className="font-poppins font-semibold mt-8 text-[21px] leading-[22px] text-dimWhite">
          {major}
        </p>

        {/* Paragraph */}
        <p className="font-poppins text-left font-normal mt-3 mb-4 text-[20px] leading-[22px] text-white">
          {university}
        </p>

        {/* Render an img element and wrap it around a link tag. Img has specific dimensions, margins and resized to allow it to be contained in its container.
          target determines if the link should be opened in the same tab or a new one, and in this case, _blank means a new page */}
        <Link to={linked_in} target="_blank">
          <img
            src={linkedin}
            alt={name}
            className="w-[30px] h-[30px] mt-10 object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default InternCard;
