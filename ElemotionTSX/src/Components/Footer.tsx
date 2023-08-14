// Import required items
import styles from "../style";
import { elemotion } from "../resources";
import { footerLinks, socialMedia } from "../Constants";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => (
  /*Section that is a flex container, placed centrally on the vertical and horizontal axis. Have a padding on the y axis and has flex-col as flex direction.*/
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/*Placed centrally on the horizontal axis, and on the top of the vertical axis. Flex direction is row on md and above but otherwise col. Margin
      bottom of 8 and it spans the full width of the parent container. */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full`}>
      {/* Div that allows the dynamic growth and shrinking of the element within its parent element. A flex container with a col flex direction and
        aligned at the start of the horizontal axis. Margin right of 10. */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        {/* Render image component to the specified dimensions and should be contained in the space provided. Has a negative left margin of 60 */}
        <img
          src={elemotion}
          loading="lazy"
          alt="Bio"
          className="w-[290px] h-[72px] object-cover filter brightness-0 invert "
        />

        {/* P text with a maximum width and margin top */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Miniature powerhouses enabling breakthroughs in medical research and
          diagnostics.
        </p>
      </div>

      {/* Overall, this <div> element will act as a flex container with its child elements arranged in a row, with space between them and the 
      ability to wrap onto multiple lines. It will also grow 1.5 times larger than other flex items when there is extra space available along 
      the main axis. Flex means the child elements of this element can have a flexible layout/arrangement. The flex class sets the display 
      property of the element to flex, making it a flex container. flex-1 class sets the flex property of the element to 1 1 0%. This allows the 
      element to grow and shrink to fill the available space within the flex container along the main axis. It affects the sizing behavior of 
      the element itself, rather than its child elements.  */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {/* Call map on footer array */}
        {footerLinks.map((footerlink) => (
          /* For each iteration, it creates a
          Div with a key. Acts as a flex container, arranges child elements vertically. Has a minimum width, and margin ys depending on scree sizes.*/
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            {/* Rendering the footerlink.title with a heading tag and below specifications */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>

            {/* Creates an unordered list and removes any bullet or numbering systems and puts a margin top of 4. */}
            <ul className="list-none mt-4">
              {/* calls map method on the footerlink.links and iterates over objects/dictionaries inside the links list */}
              {footerlink.links.map((link, index) => (
                /*Passes a callback function with two parameters and the function creates an individual list element with the key of link.name 
                and classnames defined below. When hovered upon, the text changes colour from dimwhite to secondary and cursor should change to pointer.
                If the link is the last element in the list of the appropriate links, margin bottom should be 0 and if not, it should be 4. 
                It should render the list.name*/
                <Link
                  to={`/${link.link}`}
                  className="link-style"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* This is a div within the picture div.
      Spans the full width of the parent container, space evenly between the elements and aligns them centrally on the vertical axis and the direction of flex
      is row on md going up, otherwise its col. Padding off the top of 6. Adds a horizontal border line fo 1px at the top that seperates it from the content above.
      Also sets a colour of this border and in this case, it is a shade of gray. */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* Render the below text. */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[23px] text-white">
        Copyright Ⓒ 2023 Elemotion. All Rights Reserved.
      </p>

      {/* div allowing the flow of content from right to left and a margin top of 0 of md going up and otherwise 6. */}
      <div className="flex flex-row md:mt-0 mt-6">
        {/* Calls the map method on social media array and passes a callback function with the social(current object) and index */}
        {socialMedia.map((social, index) => (
          /*Callback function renders an image element for every object iteration in the social media array calls the key of each object as a method on the object
          using curly brackets*/
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            /* Image should fit the requirements below and should be contained in the container. When someone hovers, the cursor should turn into a pointer and
            if the object is not the last one on the list, its icon or image should have a margin right of 6 units, but if its the last one, then the
            margin right should be 0. You know if its the last one by comparing the social media array length and the index, which is why we have an index
            as a parameter. */
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            /*The onClick attribute in the given code is used to define a click event handler for an element. In this case, it is assigned an arrow function 
            that calls the window.open() method, passing in the social.link as the URL to open. Opens a new window for this. */
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
