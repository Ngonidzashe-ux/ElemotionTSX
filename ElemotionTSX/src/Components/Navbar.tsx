/*Imports the useState hook from the react package that allows functional components to manage state. Stateful behaviour allows a component 
to remember and keep track of certain values that change overtime. Allows us to define and manage state variables within a functional component*/
import { useState } from "react";
import React from "react";

//Import logo, close and menu buttons from resources
import { close, menu, elemotion } from "../resources";

//Import navLinks defined in the constants module
import { navLinks } from "../Constants";

/*import NavLink which is used to create navigation links within a router context enabling features like active link stying, route matching and 
navigation handling*/
import { NavLink, Link } from "react-router-dom";

//Define a constant rafce functional component called Navbar.
const Navbar = () => {
  /*Read from right to left to understand the assignment. Usestate always returns an array with two values: 1. The current state value(The initial state value)
  2. State updater function. What we are doing on the LEFT is array destructuring where we assign the value of the first value of the array on the RHS to the 
  constant variable toggle and the second to the constant function setToggle. Function normally named with set + name of state variable */
  const [toggle, setToggle] = useState(false);

  /*Declares the constant variable named active and assigns it the initial value of Home. Also declares a function named setActive which will be used to 
  update the value of active later on */
  const [active, setActive] = useState(null);

  /*Declares a constant variable called hoveredLink and assigns it the initial value of null. Also declares a function named setHoveredLink which will be
  used to update the value of the hoveredLink variable
  In this updated code, I replaced the unused slide variable with an underscore (_) to indicate that the value is intentionally ignored. This is a common convention in JavaScript/TypeScript when you need to include a parameter for the sake of maintaining the correct index but don't actually use the parameter's value.
*/
  const [_, setHoveredLink] = useState(null);

  //Function called Handlehover that takes a title parameter and when called, it updates two state variables hoveredLink and Active
  const handleHover = (title: any) => {
    //updates the hoveredLink state variable with the value of the title parameter
    setHoveredLink(title);

    //updates the active state variable with the value of the title parameter.
    setActive(title);
  };

  return (
    /*Create a flexbox nav element that 100% fills the width of its container with a bottom and top padding of 6 units.
    Distributes the child elements within the navigation bar along the horizontal axis placing equal space betweem them and aligns elements vertically at the
    center of the navigation bar. Navbar is an additional class for styling/identification purposes*/
    <nav className="w-full flex py-6 justify-between  items-center  navbar">
      {/* Logo of stated width and height. The image is made black by the filter brightness-0 and inverted to change the colour from black to white*/}
      <img
        src={elemotion}
        alt="Bio"
        className="w-[290px] h-[72px] object-cover filter brightness-0 invert"
      />

      {/* Create an unordered list and removes bullet points from the list items. Flex layout enabled for the ul element when on sm and otherwise hidden on other
    screens. List items are aligned at the end of the container along the horizontal axis, pushed to the right hand side in this case. The elements are also 
    aligned verticallly to the center of the flex container along the cross axis. The ul element is allowed to grow and shrink without consideration of 
    inital size */}
      <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
        {/* Use of outer curly brackets to indicate that we are embedding JavaScript code within JSX. We call the map method on NavLinks array to iterate over
        every element and execute a callback function for each element - navLinks.map(). (nav, index) => () is an arrow function that serves as the callback function
        for the map method. It takes two parameters: nav (representing the current element/dictionary) and index (representing the index of the current element). 
        The arrow function is followed by another set of parentheses (). This is used to wrap the JSX code that will be returned for each iteration.
        Inside the JSX code, you can use nav and index to access the current element and its index, respectively, and use them to render dynamic content.
        */}
        {navLinks.map((nav, index) => (
          /*For each item/dictionary in the navLinks array, we come and create a list element that is going to be stored in the unordered list parent container.
          Id is a key in the dictionaries and therefore nav.id access the value corresponding to they key id. Because we want to evaluate some js expressions
          inside the JSX syntax, we do the {``} to allow for string interpolation. */
          <li
            key={nav.id}
            /*Define classnames for how the text is going to be displayed and when the cursor is hovering over this list element, it should convert to a hand.
            If the nav.title is equal to the variable stored in active, then text should be white, otherwise it is dimwhite.
            If the list element is the last one, put a margin right of 0 otherwise consistently put a margin right of 10. */
            className={`group relative font-poppins font-semibold cursor-pointer text-[16px] 
            ${active === nav.title ? "text-white" : "text-dimWhite"} 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${
              active === nav.title
                ? "border-b-[5px] pb-1 border-secondary"
                : "text-dimWhite"
            }
            `}
            //These are event handlers for the mouseenter and mouseleave events, tracking the mouse hovering behaviour over the element
            /* When the mouse enters the element, the handleHover function is called with the nav.title as an argument. 
            This is typically used to update the state or perform some action when the mouse enters the element. 
            In this case, it updates the hoveredLink and active state values based on the nav.title. */
            onMouseEnter={() => handleHover(nav.title)}
            /*When the mouse leaves the element, the handleHover function is called with an empty string '' as an argument. This is typically used to 
            reset the state or perform some action when the mouse leaves the element. In this case, it updates the hoveredLink and active state values, 
            likely resetting them to their initial values or indicating that no link is being hovered. */
            onMouseLeave={() => handleHover("")}
          >
            {/*<a href={`/${nav.id}`}>{nav.title}</a>*/}{" "}
            {/*Instead of using an anchor tag, we are going to use NavLink so that it does not result in the request of a new page */}
            {/* Navlink is the component provided by React Router that renders a navigation link. 
            The to={/${nav.id}}: The to prop specifies the target URL for the link.  The className prop is used to assign CSS classes to the rendered 
            link element. Here, it receives a function as its value. ({ isActive, isPending }): This is the parameter of the function, which is an object 
            containing the properties isActive and isPending. These properties are automatically provided by React Router to indicate the state of the 
            navigation link. || means or. */}
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive, isPending }) =>
                `font-poppins font-semibold cursor-pointer relative text-[18px]
            ${isActive ? "text-white" : "text-dimWhite"} 
            ${
              isActive || isPending
                ? "active border-b-[5px]  border-secondary "
                : ""
            } 
            ${active === nav.title ? "text-white" : "text-dimWhite"} pb-1`
              }
            >
              {/* This is the text that will be written and displayed while the /${nav.id} is the link behind the text */}
              {nav.title}
            </NavLink>
            <div className="absolute z-[1]">
              {active === nav.title && nav.subpage.length > 0 && (
                <div className="z-50  mt-6 w-60 left-0 bg-primary rounded-md ring-white border-t-[5px] border-secondary shadow-lg py-1 ring-1 flex flex-col ring-opacity-5 hidden pointer-events-non group-hover:block">
                  {nav.subpage.map((subpage, index) => (
                    <Link
                      key={index}
                      to={subpage.link}
                      className="block px-4 border-t-[3px] border-gray-900 py-2 text-[16px] text-white hover:bg-gray-700"
                    >
                      {subpage.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* This is for the mobile version. The div element is hidden on small devices.  */}
      <div className="sm:hidden flex flex-1 justify-end z-50 items-center">
        {/* Conditional operator to conditionally render either the close or menu image based on the value of the toggle variable 
        Overall, this onClick event handler allows the toggle state to be flipped or toggled between true and false when the associated element is clicked, 
        potentially triggering changes or updates in the UI based on the new state value.*/}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/*  the element will have a flexible layout, with padding of 6, a black gradient background, positioned absolutely at the top right corner, with 
          some margin and a minimum width of 140 pixels. It will also have rounded corners. */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* Here we remove bullet points and we use flex-col to align the items vertically at the right end of the main axis and center of vertical axis */}
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              // Pretty similar to the pc version
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onMouseEnter={() => handleHover(nav.title)}
                onMouseLeave={() => handleHover("Home")}
              >
                <NavLink to={`/${nav.id}`}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
