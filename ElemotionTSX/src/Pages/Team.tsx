import styles from "../style";
import { interns, coreteam } from "../Constants";
import { Navbar, Footer } from "../Components";
import { InternCard } from "../Components";
import { CoreTeamCard } from "../Components";
import { img7 } from "../resources";
import React from "react";

const Team = () => {
  return (
    // See navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Flex container with central positioning of child elements. Stacks children vertically and has relative positioning allowing for children's absolute positioning.
Has margin */}
      <div className={`${styles.flexCenter} flex-col relative mb-2`}>
        {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. */}

        <img
          src={img7}
          loading="lazy"
          alt="industry"
          className="object-contain relative object-cover w-full  h-[680px]"
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
          className={`${styles.flexCenter} ${styles.paddingX} flex-col absolute`}
        >
          {/* Heading */}
          <h4 className="font-poppins font-bold xs:text-[100px] text-[50px] text-white text-center xs:leading-[56.8px] leading-[46.8px]  pb-4 border-b-[10px] border-secondary">
            About Our Team
          </h4>

          {/* Paragraph */}
          <p
            className={` font-semibold xs:text-[35px] text-[40px] text-dimWhite xs:leading-[56.8px] leading-[46.8px] w-full text-center mt-5`}
          >
            Meet the<span className="text-secondary"> brilliant</span> minds
            behind our organization's
            <span className="text-secondary"> success.</span>
          </p>
        </div>
      </div>

      {/* div with margin and padding */}
      <div className=" mt-40 sm:px-16 px-6">
        {/* div without classname */}
        <div>
          {/* Heading */}
          <h4 className="font-semibold xs:text-[80px] text-[40px] text-white xs:leading-[56.8px] leading-[46.8px] w-full">
            Our Core <span className="text-secondary">Team</span>
          </h4>
        </div>

        {/* div that is housing core team. A flex container that vertically stacks up child elements */}
        <div className="flex flex-col    ">
          {/* Within this div, we intend to render content related to core team. To achieve this, we utilize the map function on our 'coreteam' array.
     We enclose this operation in curly brackets because it involves JavaScript code. We provide a callback function to the map function, which is executed for each object
     in the array during iteration. The callback function takes a parameter representing the current iterated object. Within the callback,
     we render the 'CoreTeamCard' component, assigning the card's id as a key attribute and employing the spread operator to pass the card's properties as distinct props. */}
          {coreteam.map((card) => (
            <CoreTeamCard key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* div with margin and padding */}
      <div className=" mt-20 sm:px-16 px-6">
        {/* div with no classe */}
        <div>
          {/* heading */}
          <h4 className="font-poppins font-semibold xs:text-[80px] text-[40px] text-white xs:leading-[56.8px] leading-[46.8px] w-full">
            Our <span className="text-secondary">Interns</span>
          </h4>
        </div>

        {/* flex div with row as flex direction on md and above. Otherwise col. Wrap onto multiple lines if not enough space.  */}
        <div className="flex md:flex-row flex-col flex-wrap  ">
          {/* Within this div, we intend to render content related to interns. To achieve this, we utilize the map function on our 'interns' array.
     We enclose this operation in curly brackets because it involves JavaScript code. We provide a callback function to the map function, which is executed for each object
     in the array during iteration. The callback function takes a parameter representing the current iterated object. Within the callback,
     we render the 'InternCard' component, assigning the card's id as a key attribute and employing the spread operator to pass the card's properties as distinct props. */}
          {interns.map((card) => (
            <InternCard key={card.id} {...card} />
          ))}
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Team;
