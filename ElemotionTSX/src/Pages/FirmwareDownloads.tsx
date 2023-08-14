import {
  Navbar,
  Footer,
  ButtonDownload,
  ButtonAppStore,
  ButtonGooglePlay,
} from "../Components";
import styles from "../style";
import { windows, apple, android } from "../resources";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

/*const: Declares a constant variable named FirmwareDownloads.
FirmwareDownloads: The name of the functional component.
() => {: Arrow function syntax that defines the component. The component doesn't receive any props, indicated by the empty parentheses. */
const FirmwareDownloads = () => {
  /*const: Declares constant variables selected and setSelected.
[selected, setSelected]: Array destructuring syntax used to extract values from the array returned by useState.
useState(null): Calls the useState hook to initialize the state variable selected with an initial value of null. */
  const [selected, setSelected] = useState(null);

  /*const: Declares a constant variable named toggle.
toggle: The name of the function.
(key) => {: Arrow function syntax that defines the function, which takes a parameter named key. */
  const toggle = (key: any) => {
    /*if: The beginning of an if statement.
selected: The state variable that holds the currently selected key.
===: Strict equality comparison operator, checking if selected is equal to key.
Curly brackets are optional.
Parenthesis are used to enclose and evaluate the condition that determines whether the code block inside the if statement should be executed or not.
In programming, parentheses are often used to group expressions and ensure that they are evaluated in the intended order */
    if (selected === key) {
      /*setSelected: The function provided by the useState hook to update the value of the selected state variable.
null: The new value that is set to the selected state variable.*/
      setSelected(null);
    } else {
      setSelected(key);
    }
  };

  return (
    // Navbar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Windows Installer*/}
      {/* For Detailed comments on the windows installer, see the android section for sensors, firmware and system integration. */}
      <div className={`${styles.paddingX} flex-col ${styles.paddingY}`}>
        <div className="flex justify-start items-center flex-row">
          <img
            src={windows}
            alt="double_quotes"
            className="w-[100px] h-[100px] object-contain"
          />
          <h4 className="font-poppins font-semibold text-[60px] leading-[52px] text-white ml-4">
            {" "}
            Windows <span className="text-secondary">Installer</span>
          </h4>
        </div>

        {/* Windows Installer: Sensors */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Sensors{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              {/* <div className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`} key="one" onClick={toggle}> */}
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="one"
                onClick={() => toggle("one")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "one" ? "-" : "+"}
                </span>
              </div>

              {/* {selected && ( */}
              {selected === "one" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start">
            <ButtonDownload styles="mt-2" />
          </div>
        </div>

        {/* Windows Installer: Firmware */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Firmware{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              {/* <div className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`} key="two" onClick={toggle}> */}
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="two"
                onClick={() => toggle("two")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "two" ? "-" : "+"}
                </span>
              </div>

              {/* {selected && ( */}
              {selected === "two" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start">
            <ButtonDownload styles="mt-2" />
          </div>
        </div>

        {/* Windows Installer: System Integration*/}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              System Integration{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="3"
                onClick={() => toggle("3")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "3" ? "-" : "+"}
                </span>
              </div>

              {selected === "3" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-start">
            <ButtonDownload styles="mt-2" />
          </div>
        </div>
      </div>

      {/* Android Installer */}
      {/* Main div that houses everything in the android installer section. Has padding and margin */}
      <div className={`${styles.paddingX} ${styles.paddingY} my-20`}>
        {/* Div that is a flex container and contains the Android installer heading and icon. Aligns elements to the start of the horizontal axis, center of the 
        cross axis, also arranges children in a row horizontally */}
        <div className="flex justify-start items-center flex-row">
          {/* REnder an img element with the below width and height specifications and to be contained in the parent */}
          <img
            src={android}
            alt="double_quotes"
            className="w-[100px] h-[100px] object-contain"
          />

          {/* Heading */}
          <h4 className="font-poppins font-semibold text-[60px] leading-[52px] text-white ml-4">
            {" "}
            Android <span className="text-secondary">Installer</span>
          </h4>
        </div>

        {/* Android Installer: Sensors */}
        {/* Div for rendering a border. Has some padding, margin, is flex container, can dynamically grown and shrink depending on a available space, 
        width of border is 1px and its border top with the secondary colour */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>

        {/* Flex container that dynamically grows and shrinks. Children are arranged in a row on md and above devices, otherwise vertically stacked.
        This container ensures children have even spacing between them in the row */}
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          {/* This div is a flex container, aligns children at the start of horizontal axis. On md and above, children are aligned at center of cross axis and otherwise at the start */}
          <div className={`flex justify-start md:items-center items-start `}>
            {/* Render an windows icon */}
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>

          {/* Render a flexible div with vertically stacked children with specified max width and margin dimensions. Arranged at the start of horizontal axis on
          md and above, otherwise center */}
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            {/* Heading */}
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              Sensors
            </h4>

            {/* Paragrapgh */}
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            {/* Div that has a feature card gradient */}
            <div className="feature-card">
              {/* Inside that div,we render another flexible div, with row alignment and ensures even spacing between children. Specific with, padding, cursor
              changes to pointer upon hover, aligned centrally on the cross axis. */}
              {/* Assigned a key attribute of 4. */}
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="4"
                /*onClick={() => toggle("4")}: This is an event handler that is triggered when the associated element is clicked. It uses an arrow 
                function to call the toggle function with the argument "4".

                toggle("4"): This likely refers to a function named toggle, which takes an argument. In this case, it's passing the argument "4" to the toggle 
                function. The purpose of this function could be to toggle the visibility, state, or behavior of an element with the identifier "4". The exact 
                functionality of the toggle function would need to be defined elsewhere in your code. */

                /*On click is an event attribute that you attach to an element, can be div, button anything to define how to handle the corresponding event, in this case,
                clicking this div. You want to define what happens when a div is clicked.
                
                
                General Syntax for event handlers is this: <elementName eventName={eventHandlerFunction} />
                This is an arrow function syntax.
                onClick: Prop attribute used to attach an event handler to the click event.
                =: Assignment operator to assign a value to the prop.
                { ... }: Curly braces used to enclose the arrow function.
                (): Parentheses indicating the start and end of the arrow function's parameter list (empty in this case).
                =>: Arrow syntax used to define the function.
                toggle("4"): Function call with an argument to execute when the button is clicked.
                */

                /*There is no return here because:
                In React, event handlers are typically used to perform actions when an event, such as a click, occurs on a particular element. Unlike function components, event handlers are not expected to return JSX elements that will be rendered in the UI
                When you define an event handler using the arrow function syntax within an attribute like onClick, you're essentially providing a piece of code that will be executed when the specified event occurs. This code can perform any desired action, such as updating state, manipulating data, or calling functions, but it doesn't return JSX elements to be rendered in the UI. */

                onClick={() => toggle("4")}
              >
                {/* Heading */}
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>

                {/*  This is a span housing a plus or negative sign has some text specifications*/}
                <span className="font-semibold text-secondary text-[35px]">
                  {/* terinary operator. {condition ? expression1: expression2}
                  if selected ===4, then span component will render -. if not, it will render +. */}
                  {selected === "4" ? "-" : "+"}
                </span>
              </div>

              {/* In addition to rendering an + or -, we also want to convey more information when the same condtion has been met. 
                  {selected === "4"}: This is a condition that checks if the value of the variable selected is equal to the string "4".
                  &&: This is the logical AND operator. It returns true if both operands are true.
                  ( and ): These parentheses are used to group the JSX or code that should be executed if the condition is true.
                  Since the right expression is not equal to zero, it will always return True which means the code will be executed only wnen the ledft condition is
                  true.
                  
                  Number of Expressions:

                  The logical AND (&&) operator in the example you provided evaluates a single expression if the condition is true.
                  The ternary operator (? :) evaluates two different expressions based on the condition.
                  Purpose and Use Case:

                  The logical AND operator is often used for simple conditional rendering or code execution. If the condition is true, the expression on the right side of && is evaluated.
                  The ternary operator is more versatile and can be used when you need to choose between two different values or expressions based on a condition.*/}
              {selected === "4" && (
                // div which is a flex container. Col direction, margin, start of both axes
                <div className="flex justify-start items-start my-2 flex-col">
                  {/* List element */}
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>

          {/* div which is flex, vertically stacking of children, central alignement on both axis */}
          <div className="flex flex-col items-center justify-center">
            {/* Flex container, child placed at the start of horizontal axis. */}
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>

            {/* Link to google play around this button, opens in a new page */}
            <Link
              to="https://play.google.com/store/apps/details?id=com.ted.android&hl=en&gl=US"
              className="link-style"
              target="_blank"
            >
              {/* flex container and placed at start of horizontal axis */}
              <div className="flex justify-start">
                <ButtonGooglePlay styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Android Installer: Firmware */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Firmware{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="5"
                onClick={() => toggle("5")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "5" ? "-" : "+"}
                </span>
              </div>

              {selected === "5" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://play.google.com/store/apps/details?id=com.ted.android&hl=en&gl=US"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonGooglePlay styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Android Installer: System Integration */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              System Integration{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="6"
                onClick={() => toggle("6")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "6" ? "-" : "+"}
                </span>
              </div>

              {selected === "6" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://play.google.com/store/apps/details?id=com.ted.android&hl=en&gl=US"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonGooglePlay styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* iOS Installer */}
      <div className={`${styles.paddingX} flex-col ${styles.paddingY} my-20`}>
        <div className="flex justify-start items-center flex-row">
          <img
            src={apple}
            alt="double_quotes"
            className="w-[100px] h-[100px] object-contain"
          />
          <h4 className="font-poppins font-semibold text-[60px] leading-[52px] text-white ml-4">
            {" "}
            iOS <span className="text-secondary">Installer</span>
          </h4>
        </div>

        {/* iOS Installer: Sensors */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Sensors{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="7"
                onClick={() => toggle("7")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "7" ? "-" : "+"}
                </span>
              </div>

              {selected === "7" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* iOS Installer: Firmware */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Firmware{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="8"
                onClick={() => toggle("8")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "8" ? "-" : "+"}
                </span>
              </div>

              {selected === "8" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* iOS Installer: System Integration */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              System Integration{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="9"
                onClick={() => toggle("9")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "9" ? "-" : "+"}
                </span>
              </div>

              {selected === "9" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MacOS Installer */}
      <div className={`${styles.paddingX} flex-col ${styles.paddingY} my-20`}>
        <div className="flex justify-start items-center flex-row">
          <img
            src={apple}
            alt="double_quotes"
            className="w-[100px] h-[100px] object-contain"
          />
          <h4 className="font-poppins font-semibold text-[60px] leading-[52px] text-white ml-4">
            {" "}
            MacOS <span className="text-secondary">Installer</span>
          </h4>
        </div>

        {/* MacOS Installer: Sensors */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Sensors{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="10"
                onClick={() => toggle("10")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "10" ? "-" : "+"}
                </span>
              </div>

              {selected === "10" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* MacOS Installer: Firmware */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              Firmware Updates{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="11"
                onClick={() => toggle("11")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "11" ? "-" : "+"}
                </span>
              </div>

              {selected === "11" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* MacOS Installer: System Integration */}
        <div
          className={`pt-8 mt-10 flex flex-1 flex-row border-t border-1 border-secondary`}
        ></div>
        <div className={`flex flex-1 md:flex-row flex-col justify-between`}>
          <div className={`flex justify-start md:items-center items-start `}>
            <img src={windows} alt="windows" className="w-[50px] h-[50px]" />
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start max-w-[700px] my-3">
            <h4 className="font-poppins font-semibold text-[35px] leading-[42px] text-white pb-3">
              {" "}
              System Integration{" "}
            </h4>
            <p
              className={`font-poppins font-normal text-dimWhite text-[20px] leading-[30.8px] mb-3`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nemo
              consequuntur harum dolores, ex omnis incidunt doloremque odit quae
              eveniet! Itaque nemo labore veritatis minus fuga nostrum vitae
              odit! Magnam?
            </p>

            <div className="feature-card">
              <div
                className={`flex flex-row justify-between w-[700px] px-3 items-center cursor-pointer`}
                key="12"
                onClick={() => toggle("12")}
              >
                <h4 className="font-poppins font-semibold text-[25px] leading-[42px] text-white ">
                  {" "}
                  Details
                </h4>
                <span className="font-semibold text-secondary text-[35px]">
                  {selected === "12" ? "-" : "+"}
                </span>
              </div>

              {selected === "12" && (
                <div className="flex justify-start items-start my-2 flex-col">
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Version: 1.1.1
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Release Date: 26 June 2023
                  </li>
                  <li className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                    Size: 80MB
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-start">
              <ButtonDownload styles="mt-2" />
            </div>
            <Link
              to="https://www.apple.com/hk/en/app-store/"
              className="link-style"
              target="_blank"
            >
              <div className="flex justify-start">
                <ButtonAppStore styles="mt-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FirmwareDownloads;
