// import necessities
import { Link } from "react-router-dom";
import React from "react";

// declare a functional component using an arrow function called support card with the below props as parameters.
//The parent component can pass data to its child components by setting attributes on the child components when rendering them.
//You can access the passed props as a java script object which is why you see curly brackets when we access the passed props
const SupportCard = ({
  content,
  title,
  icon,
  id,
}: {
  content: any;
  title: any;
  icon: any;
  id: any;
}) => (
  /*We render a div */
  <div className="flex justify-center items-center">
    {/* Ternary operator though. {condition ? (expression 1) : (expression 2) : (expression 3)}If id is equal to support-1 then do the following.
    Also remember we need the curly brackets because the ternary is JS code embedded in JSX.*/}
    {id === "support-1" ? (
      //an anchor tag with an href attribute containing a telephone URI that allows users to initiate a telephone call directly from a web page or mobile device.
      <a href="tel:+852 6998 2403">
        {/* Flex container with a flex direction of column and with padding on both x and y axis. Rounded corners with 20px radius, maximum width and margin specifications.
Changes cursor to pointer when hovered over */}
        <div className="flex flex-col md:px-10 px-4 md:justify-start justify-center md:items-start items-center py-12 rounded-[20px] md:min-w-[570px] max-w-full max-w-[370px] md:mr-10 sm:mr-0 mr-0 my-3 cursor-pointer ">
          {/* Flex container with a row direction and changes the colour of the text from white to secondary when hovered over as well. */}
          <div className="flex flex-row support-card">
            {/* Img element with specifcations of width and height, and also resized to be contained in the parent container. */}
            <img
              src={icon}
              loading="lazy"
              alt="double_quotes"
              // className="w-[72.6px] h-[67.6px] object-contain"
              className="w-[92.6px] h-[77.6px] object-contain"
            />

            {/* Heading */}
            {/* <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-white ml-4"> */}
            <h4 className="font-poppins font-semibold text-[40px] leading-[42px] text-white ml-4">
              {title}
            </h4>
          </div>

          {/* Paragraph */}
          <p className="font-poppins font-normal text-[28px] leading-[42.4px] text-dimWhite mt-5">
            {content}
          </p>
        </div>
      </a>
    ) : // This is more of an elif statement where you specify again the condition in which you are trying to meet.
    id === "support-5" ? (
      // Check the above, literally the same code block
      <a href="mailto:elemotiontech@gmail.com">
        <div className="flex flex-col md:px-10 px-4 md:justify-start justify-center md:items-start items-center py-12 rounded-[20px]  md:min-w-[570px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 cursor-pointer ">
          <div className="flex flex-row support-card">
            <img
              src={icon}
              loading="lazy"
              alt="double_quotes"
              className="w-[92.6px] h-[77.6px] object-contain"
            />
            <h4 className="font-poppins font-semibold text-[40px] leading-[42px] text-white ml-4">
              {title}
            </h4>
          </div>
          <p className="font-poppins font-normal text-[28px] leading-[42.4px] text-dimWhite mt-5">
            {content}
          </p>
        </div>
      </a>
    ) : id === "support-9" ? (
      <a
        href="#"
        onClick={() => window.open("https:www.youtube.com", "_blank")}
      >
        {/* Same as the above blocks */}
        <div className="flex  flex-col md:px-10 px-4 md:justify-start justify-center md:items-start items-center py-12 rounded-[20px]  md:min-w-[570px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 cursor-pointer ">
          <div className="flex flex-row support-card">
            <img
              src={icon}
              loading="lazy"
              alt="double_quotes"
              className="w-[92.6px] h-[77.6px] object-contain"
            />
            <h4 className="font-poppins font-semibold text-[40px] leading-[42px] text-white ml-4">
              {title}
            </h4>
          </div>
          <p className="font-poppins font-normal text-[28px] leading-[42.4px] text-dimWhite mt-5">
            {content}
          </p>
        </div>
      </a>
    ) : (
      // This is the else statement, when the prior conditions have not been met, this is what is supposed to rendered.
      // Embed everything in this link tag that has an absolute url path: root/support/evaluated value of title. Otherwise everything else is the same.
      <Link
        to={`/support/${title}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="flex flex-col md:px-10 px-4 md:justify-start justify-center md:items-start items-center py-12 rounded-[20px]   md:min-w-[570px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 cursor-pointer ">
          <div className="flex flex-row support-card">
            <img
              src={icon}
              loading="lazy"
              alt="double_quotes"
              className="w-[92.6px] h-[77.6px] object-contain"
            />
            <h4 className="font-poppins font-semibold text-[40px] leading-[42px] text-white ml-4">
              {title}
            </h4>
          </div>
          <p className="font-poppins font-normal text-[28px] leading-[42.4px] text-dimWhite mt-5">
            {content}
          </p>
        </div>
      </Link>
    )}
  </div>
);

export default SupportCard;
