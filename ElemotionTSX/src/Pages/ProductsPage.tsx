import { Navbar, Footer, AspectCard } from "../Components";
import styles from "../style";
import { DeviceCard } from "../Components";
import { aspects, aspects2, devices1, devices2 } from "../Constants";
import { img1 } from "../resources";
import React from "react";

const ProductsPage = () => {
  return (
    // See navbar
    <div className={`bg-primary w-full overflow-hidden  `}>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Flex container with central positioning of child elements. Stacks children vertically and has relative positioning allowing for children's absolute positioning.
Has margin */}
      <div
        className={`${styles.flexCenter} flex-col relative md:mt-0 mt-10 mb-2`}
      >
        {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. */}
        <img
          src={img1}
          loading="lazy"
          alt="industry"
          className="object-contain relative object-cover w-full  md:h-[680px] h-[300px]"
          style={{ objectPosition: "center 5%" }}
        />

        {/* Render a div element with absolute positioning which means it does not follow the normal flow of the document, instead of stacking vertically below the video, it
is going to be on top of the video start from the top left corner and spanning the full width and height of the relative parent container. Has bg color and opacity
  */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70"></div>

        {/* Render a div element that has absolute positioning too. This means it does not vertically stack below the divs/elements above it but will be
        positioned based on the classnames of the parent container. The parent container has a flex center which means since the current div is a child element,
        it is going to be positioned along the center of the parent container and this is going to be exact same position as the video which means its going
        directly on top of the img. Added flex col to vertically stack heading and paragraph together */}
        <div
          className={`${styles.flexCenter} flex-col ${styles.paddingX} absolute`}
        >
          {/* Heading */}
          <h4 className="font-poppins font-bold xs:text-[100px] text-[50px] text-center text-white xs:leading-[56.8px] leading-[46.8px] pb-4 border-b-[10px] border-secondary mb-10">
            Products
          </h4>

          {/* Paragraph */}
          <p className="font-poppins font-semibold text-center xs:text-[24px] text-[25px] text-dimWhite xs:leading-[30px] leading-[30px] w-full ">
            EleMotion offers a pioneering{" "}
            <span className="text-secondary"> EMG </span>solution tailored to
            elevate <span className="text-secondary"> healthcare</span> and
            rehabilitation standards.
          </p>
        </div>
      </div>

      {/* Padding. Col is direction, align children at the start of both axes */}
      <div
        className={`${styles.paddingX} flex justify-start items-start flex-col ${styles.paddingY} `}
      >
        {/* flex div */}
        <div className="flex  md:flex-row flex-col ">
          {/* Maximum width is 35% of its parent container. Its a flex container with col as its direction. Margins and paddings. Elements positioned at the start
        of both axes. Rounded corners and bg has a gradient from top left corner to bottom right corner. Gradient is made up of the specified colours. */}
          <div className=" md:max-w-[35%] w-full mr-10 flex md:mb-0 mb-10 flex-col justify-start items-start  py-3 rounded px-3 bg-gradient-to-br from-teal-900 to-teal-800">
            {/* Heading */}
            <h4 className="font-poppins pt-8 md:mb-36 mb-16 font-semibold xs:text-[50px] md:text-left text-center text-[40px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
              EMG <span className="text-secondary"> Sensors</span>{" "}
            </h4>

            {/* flex container. Row direction for md and above. Otherwise col. Wrap onto multiple lines if no space.*/}

            <div className="flex flex-1 flex-row flex-wrap justify-between w-full feedback-container relative z-[1] ">
              {/* Within this div, we intend to render content related to aspects. To achieve this, we utilize the map function on our 'aspect' array.
     We enclose this operation in curly brackets because it involves JavaScript code. We provide a callback function to the map function, which is executed for each object
     in the array during iteration. The callback function takes a parameter representing the current iterated object. Within the callback,
     we render the 'AspectCard' component, assigning the card's id as a key attribute and employing the spread operator to pass the card's properties as distinct props. */}
              {aspects.map((card) => (
                <AspectCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          {/* flex container. Row direction for md and above. Otherwise col. Wrap onto multiple lines if no space. Ensure even spacing between the cards and round the corners of the cards*/}
          <div className="flex flex-1 md:flex-row  flex-wrap justify-between w-full rounded-[10px]   relative z-[1]">
            {/* Within this div, we intend to render content related to devices1. To achieve this, we utilize the map function on our 'devices1' array.
     We enclose this operation in curly brackets because it involves JavaScript code. We provide a callback function to the map function, which is executed for each object
     in the array during iteration. The callback function takes a parameter representing the current iterated object. Within the callback,
     we render the 'DeviceCard' component, assigning the card's id as a key attribute and employing the spread operator to pass the card's properties as distinct props. */}
            {devices1.map((card) => (
              <DeviceCard key={card.id} {...card} />
            ))}
          </div>
        </div>

        {/* See from line 52 */}
        <div className="flex md:flex-row flex-col justify-between my-16 md:pt-0 pt-10">
          <div className=" md:max-w-[35%] w-full mr-10 flex md:mb-0 mb-10 flex-col justify-start items-start  py-3 rounded px-3 bg-gradient-to-br from-teal-900 to-teal-800">
            <h4 className="font-poppins pt-8 md:mb-36 mb-16 font-semibold xs:text-[50px] md:text-left text-center text-[40px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
              Detection <span className="text-secondary"> Systems</span>{" "}
            </h4>

            <div className="flex flex-1 flex-row  flex-wrap sm:justify-between w-full feedback-container relative z-[1]">
              {aspects2.map((card) => (
                <AspectCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          <div className="flex flex-1 md:flex-row flex-col flex-wrap sm:justify-between w-full rounded-[10px] relative z-[1]">
            {devices2.map((card) => (
              <DeviceCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>

      {/* See footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
