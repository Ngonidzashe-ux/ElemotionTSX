//import videos and styles.

import { chip } from "../resources";
import styles from "../style";
import React from "react";

const Video = () => {
  return (
    // Div that is a flex container that aligns child elements centrally along the two axes. It stacks child elements vertically and has a relative positioning that allows child elements to take absolute positioning. Margin
    <div className={` ${styles.flexCenter} flex-col relative mb-12`}>
      {/* Render a video element. Atrribute autoplay means its going to play on its own in a loop and its going to be muted. It covers the full size of parent 
  container while giving in to the constraints of the width and height dimensions of the video element */}
      <video
        src={chip}
        autoPlay
        loop
        muted
        className="w-full md:h-[750px] h-[300px] object-cover"
      />

      {/* Render a div element with absolute positioning which means it does not follow the normal flow of the document, instead of stacking vertically below the video, it
is going to be on top of the video start from the top left corner and spanning the full width and height of the relative parent container. Has bg color and opacity
  */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-40"></div>

      {/* Render a div element that has absolute positioning too. This means it does not vertically stack below the divs/elements above it but will be
        positioned based on the classnames of the parent container. The parent container has a flex center which means since the current div is a child element,
        it is going to be positioned along the center of the parent container and this is going to be exact same position as the video which means its going
        directly on top of the video. */}
      <div className={`${styles.flexCenter}  absolute`}>
        {/* Heading is going to be centrally positioned because of the flex center class of its parent container. The parent container absolute positioning does
          not have an impact on the child elements */}
        <h4 className="font-poppins font-bold md:text-[80px] text-[40px] text-center text-white md:leading-[76.8px] leading-[46.8px] w-full px-2 ">
          Health Care | Sports | Virtual Reality
        </h4>
      </div>
    </div>
  );
};

export default Video;
