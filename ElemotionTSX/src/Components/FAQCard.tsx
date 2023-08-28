import React from "react";

// Declare a component with the below props as parameters and the component will look for these in each object that is passsed as an argument.
const FAQCard = ({ id, title, icon }: { id: any; title: any; icon: any }) => {
  return (
    /* Anchor tag that is wrapping everything. Has an onclick event to ensure that you scroll to the top of the section position you are looking for. 
       <a>: This is an HTML anchor element, also known as a hyperlink. It is used to create clickable links within a web page.
href={#${id}}: This is the href attribute of the anchor element. It is set using a template literal enclosed in backticks (``). The template literal
 allows you to embed JavaScript expressions inside the string.
#${id}: This is the expression inside the template literal. It is dynamically evaluating the id variable and inserting its value as part of the URL. 
The expression #${id} creates a URL fragment that starts with a hash symbol (#) followed by the value of the id variable.
The usage of a URL fragment with the hash symbol (#) allows you to create internal links that scroll to specific sections or elements within the same page. It's a common technique used for smooth scrolling navigation within a single-page application or long-scrolling websites.*/

    <a
      href={`#${id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* div element that is a flex container, allows even spacing of child elements, col is flex direction and has padding both x and y. Has a feature-card that
highlights the div when hovered, the corners of the div are rounded and the radius of the corners is 20px. Has specific width and has margins depending on the device
type. Has cursor pointer class which converts cursor to pointer when on this div. Support card sets a transparent background and when hovered, turns the heading/text from
white to secondary */}
      <div className="flex justify-between flex-col px-5 py-12 feature-card rounded-[20px] w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 cursor-pointer support-card">
        {/* Flex container that has child elements aligned along the start of the horizontal axis and center of the cross axis. Flex direction is row and has same support card */}
        <div className="flex justify-start items-center flex-row support-card">
          {/* render image element with specific dimensions and the img has object-contain to resize an element’s content to stay contained within its container using  */}
          <img
            src={icon}
            loading="lazy"
            alt="double_quotes"
            className="w-[72.6px] h-[67.6px] object-contain"
          />

          {/* Heading */}
          <h4 className="font-poppins font-semibold text-[30px] leading-[32px] text-white ml-2 ">
            {title}
          </h4>
        </div>
      </div>
    </a>
  );
};

export default FAQCard;
