import { Navbar, Footer } from "../Components";
import styles from "../style";
import { guide, wolf } from "../resources";
import React from "react";

const UserManuals = () => {
  return (
    // see navbar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* padding */}
      <div className={`${styles.paddingX}  ${styles.paddingY}`}>
        {/* Flex container with child elements aligned at the start of the horizontal axis and the center of the cross axis. Child elements arranged horizontally. */}
        <div className="flex justify-start items-center flex-row">
          {/* Render an image icon with specified dimensions and also resized to stay contained in the parent container */}
          <img
            src={guide}
            alt="double_quotes"
            className="w-[100px] h-[100px] object-contain"
          />

          {/* Heading */}
          <h4 className="font-poppins font-semibold text-[60px] leading-[52px] text-white ml-4">
            {" "}
            User <span className="text-secondary">Manuals</span>
          </h4>
        </div>

        {/* Div element with padding and margin. Border on the top, secondary color and size is one pixel. Div is closed*/}
        <div className={`pt-8 mt-10 border-t border-1 border-secondary`}></div>

        {/* Flex container with row as direction from md and above sizes, otherwise col on sm devices and smaller. Dynamic growth */}
        <div className={`flex flex-1 md:flex-row flex-col`}>
          {/* div housing the heading. Flex container, positioned at the start of the horizontal axis. On md and above, located at the centere of the cross axis, otherwise
          at the top which is the starting. Specific width */}
          <div
            className={`flex justify-start md:items-center items-start w-[580px]`}
          >
            {/* heading */}
            <h4 className="font-poppins font-semibold text-[45px] leading-[42px] text-white">
              {" "}
              Sensors{" "}
            </h4>
          </div>

          {/* Second div in a row, is a flex container with elements vertically stacked on top of each other. Centrally aligned along the main axis on md and above,
          otherwise, positioned at the start. Central positioning of child elements along the cross axis. */}
          <div className="flex flex-col md:justify-center justify-start items-center">
            {/* render an anchor tag with a pdf file as our hypertext reference.(Specified the url or the destination that the link should point to when clicked).
            Document should be opened int new tab, which is why target is _blank. Rel attribute stands for relationship between the current resource and the linked
            page. Provides more context about the link.
            
            "noopener": When a link is opened in a new tab or window using the target="_blank" attribute, the new tab/window can potentially access and modify the contents
             of the tab/window that opened it. This is called the window.opener property. If the linked page is malicious, it could use this property to perform unwanted
              actions in the original tab/window. By adding the "noopener" value to the rel attribute of the link, you ensure that the new tab/window does not
               have access to the window.opener property of the original tab/window. This enhances security by preventing any potential cross-tab/window scripting 
               attacks.
               
              "noreferrer": When a user clicks on a link, the browser often sends a "referrer" header to the linked page. This header reveals the URL of 
              the page from which the user clicked the link. In some cases, this referrer information might be sensitive or private. Adding the "noreferrer"
               value to the rel attribute of the link prevents the browser from sending the referrer header to the linked page. This helps protect user 
               privacy by not disclosing the previous page's URL to the linked page. This can be useful when linking to external websites. 
               */}
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 11
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 2
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 3
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 4
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 5
            </a>
          </div>
        </div>
        {/* see above */}

        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>

        <div className={`flex flex-1 md:flex-row flex-col`}>
          <div className={`flex justify-start items-center w-[580px]`}>
            <h4 className="font-poppins font-semibold text-[45px] leading-[32px] text-white">
              {" "}
              Firmware{" "}
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 11
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 2
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 3
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 4
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 5
            </a>
          </div>
        </div>

        {/* see above */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>

        <div className={`flex flex-1 md:flex-row flex-col`}>
          <div className={`flex justify-start items-center w-[580px]`}>
            <h4 className="font-poppins font-semibold text-[45px] leading-[42px] text-white">
              {" "}
              System Integration{" "}
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 11
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 2
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 3
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 4
            </a>
            <a
              href={wolf}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-poppins font-normal text-secondary text-[25px] leading-[40.8px] my-3`}
            >
              Elemotion EMG Sensor 5
            </a>
          </div>
        </div>
      </div>

      {/* see footer */}

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserManuals;
