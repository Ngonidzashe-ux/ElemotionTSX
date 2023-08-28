//import the required images.
import styles, { layout } from "../style";
import { media, skyscrappers } from "../resources";
// import ButtonConnect from "./ButtonConnect";
// import ButtonExplore from "./ButtonExplore";
import { socialMedia } from "../Constants";
import { Link } from "react-router-dom";
import React from "react";

const News = () => (
  /* flex md:flex-row flex-col-reverse: flex-row on md devices going up otherwise direction of flex item is vertically and reverses the order
  ${styles.paddingY} - padding on top and bottom*/
  <section id="news" className={layout.sectionReverse}>
    {/* Creating a div with the following to house the first image on the left:
     flex-1 flex - flex container that allows contents to grow and shrink depending on the available space
     ${styles.flexCenter} - vertical and horizontal central alignment
    md:mr-10 mr-0 - margin right of 10 on md and above otherwise margin 0
    md:mt-0 mt-10 - margin top of 0 on md and above otherwise margin 0
    relative - allows the absolute positioning of child elements*/}
    <div className={layout.sectionImgReverse}>
      {/* Render an image with rounded corners and the specified width and height dimensions that scales to cover and fill the container completely */}
      <img
        src={skyscrappers}
        loading="lazy"
        alt="News and Events"
        className="rounded-[10px] w-[160%] h-[100%] object-cover"
      />

      {/* Div that has its top left corner right at the top left corner of its parent container and it spans from there across the full width and full height of
      the parent container. When hovered upon, the opacity becomes 40% and when not, it is at 60% and it has a bg colour of bg primary. Basically, this 
      is an element that creates an overlay effect entire the parent container with a partially transparent background colour. */}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-opacity-40 bg-primary bg-opacity-60"></div>

      {/* Div that houses the heading and positions itself in the parent div container at the absolutely top left corner. Z index of 5 for stacking order. */}
      <div className="absolute z-[5]">
        {/* Heading 2 */}
        <Link
          to="/news"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-style"
        >
          <h2 className={`${styles.heading2} text-center hover:text-secondary`}>
            News and Events
          </h2>
        </Link>
      </div>

      {/* Element that is absolutely positioned on the bottom left corner of the parent div with a z index of 5 and houses the button explore */}
      <div className="absolute bottom-3 left-5 z-[5]">
        {/*Button with a styles prop specified below  */}
        {/* <Link
          to="/news"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-style"
        >
          <ButtonExplore styles="mt-10" />
        </Link> */}
      </div>
    </div>

    {/*Creating a div with the following to house the first image on the right:
     flex-1 flex - flex container that allows contents to grow and shrink depending on the available space
     ${styles.flexCenter} - vertical and horizontal central alignment
    md:ml-10 ml-0 - margin left of 10 on md and above otherwise margin 0
    md:mt-0 mt-10 - margin top of 0 on md and above otherwise margin 0
    relative - allows the absolute positioning of child elements*/}
    <div className={layout.sectionImg}>
      {/* Render an image with rounded corners and the specified width and height dimensions that scales to cover and fill the container completely */}
      <img
        src={media}
        loading="lazy"
        alt="Social Media"
        className="rounded-[10px] w-[160%] h-[100%] object-cover"
      />

      {/* Same as above */}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-opacity-40 bg-primary bg-opacity-60"></div>
      <div className="absolute z-[5]">
        {/* Heading 2 */}
        <Link
          to="/contact us"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-style"
        >
          <h2 className={`${styles.heading2} hover:text-secondary`}>
            Social Media{" "}
          </h2>
        </Link>
      </div>

      {/* Same as above */}
      {/* <div className="absolute bottom-3 left-5 z-[5]">
        {/* <Link
          to="/contact us"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-style"
        >
          <ButtonConnect styles="mt-10" />
        </Link> */}
      {/* </div> */}

      {/* This is a div within the picture div and is a sibling div to the buttonconnect div in the social media picture.
      Spans the full width of the parent container, space evenly between the elements and aligns them centrally on the vertical axis and the direction of flex
      is row on md going up, otherwise its col. Padding off the top of 6. Adds a horizontal border line fo 1px at the top that seperates it from the content above.
      Also sets a colour of this border and in this case, it is a shade of gray. */}
      <div className="w-full flex-1 flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        {/* Positions this div element absolutely at the bottom right with a specific z index. Flex container with elements arranged in a row with a margin
      top of 0 on md and above, otherwise margin top of 10. */}
        <div className="absolute bottom-5 left-[40%] justify-center items-center z-[5] flex flex-1 flex-row md:mt-0 mt-6">
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
              className={`w-[40px] h-[40px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 duration-100
            `}
              /*The onClick attribute in the given code is used to define a click event handler for an element. In this case, it is assigned an arrow function 
            that calls the window.open() method, passing in the social.link as the URL to open. Opens a new window for this. */
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default News;
