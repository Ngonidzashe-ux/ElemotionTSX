// Import necessities
import { Link } from "react-router-dom";
import { ButtonLearn, ButtonPurchase, ButtonQuote } from ".";

/*Define a device card component that extracts the following props from the object passed as an argument. The objects should have the specified props as their keys */
const DeviceCard = ({
  content,
  name,
  img,
  id,
}: {
  content: any;
  name: any;
  img: any;
  id: any;
}) => {
  return (
    /*Flex container that can grow or shrink to fill the available space. 
      Has max width and max height for md and sm devices. Allows rounded corners of the div element and has a bg colour of gray*/
    <div className="flex flex-1 flex-col md:max-w-[48%] sm:max-w-[450px] sm:max-h-[700px] rounded-[10px] bg-gray-900 ">
      {/* Have a div element which acts as a flexible container and has rounded corners with a border radius of 10px. Use css styling to set height
         and width values. Div houses image element */}
      <div
        className="flex rounded-[10px] "
        style={{ height: "260px", width: "100%" }}
      >
        {/* image spans full width and height of container, rounded top corners with radius of 10px, and is resized to fill the whole container,  */}
        <img
          src={img}
          alt={name}
          className="w-full rounded-t-[10px] h-full object-cover"
        />
      </div>

      {/* Div housing heading and paragraph, spans full width, can grow and shrink, is a flex container with column direction. Child elements aligned along the 
        start of the horizontal axis and the cross axis. Have paddings on both y and x axis */}
      <div className="w-full flex-1 flex flex-col justify-start items-start  px-3 py-10">
        {/* Heading */}
        <h4 className="font-poppins font-semibold text-[35px] leading-[36px] text-white">
          {name}
        </h4>

        {/* Heading */}
        <p className="font-poppins font-normal mt-10 mb-5 text-[22px] leading-[24px] text-dimWhite">
          {content}
        </p>

        {/* Div that houses the buttons, is a flex container allowing flexible positioning of child elements. Allows for even spacing between the child elements,
          spans the full width of container, aligns the contents centrally along the vetical axis. Row is flex direction on md and above devices, otherwise col  */}
        <div className="flex justify-between w-full items-center md:flex-row flex-col">
          {/* Div for the first button of learn more which could either take you to the page of the portable emg sensor or the 32 channel emg system. Use the id
          as the key attribute for this div. If you want to render something conditionally, you specifying the condition within a div/section element in which you want the rendering to take place.
          The key attribute is required when rendering multiple elements in a list (usually inside a loop or when using the map function) to help React identify 
          each element uniquely and efficiently update the UI.*/}
          <div key={id}>
            {/* The curly brackets are used to delimit JS code inside JS and indicate you  are writing a JS expression or statement within the JSX markup.
We use the ternary/conditional operator which is a standard feature of JS. 
condition ? expression1 : expression2  ---- The ternary operator works by evaluating the condition. If the condition is true, it returns expression1; 
otherwise, it returns expression2. It's a shorthand way to write simple if-else statements. If for each condition, there are multiple JSX elements,
thy you should put them in parenthesis so that you can ensure that each branch can be rendered properly. So, it would be more like: 
condition ? (expression1) : (expression2). Equal sign in JS is === */}
            {id === "1" ? (
              <Link
                to="/products/emg-sensor"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="link-style"
              >
                <ButtonLearn styles={`mt-16 `} />
              </Link>
            ) : (
              <Link
                to="/products/32-channel-emg-detection-system "
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="link-style"
              >
                <ButtonLearn styles={`mt-16 `} />
              </Link>
            )}
          </div>

          {/* Link from react dom that allows routing of pages and creation of navigational links allowing the handling of navigation without triggering a full page reload.
          to="/products/getquote": The to prop is used to specify the URL or path to which the link should navigate. 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}: This is the onClick event handler attached to the link. When the link is clicked, 
          the provided arrow function will be executed. In this case, the arrow function uses the window.scrollTo method to scroll the window to the top with a smooth animation.
          URL can be an absolute path e.g /products/getquote or a relative path: products/getquote. An absolute path is a URL or path that starts with a forward 
          slash "/". It represents a path relative to the root of the website or the application. Absolute paths are useful when you want to navigate to a 
          specific route or URL regardless of the current page's location. They are typically used when you want to navigate to a specific location on the 
          website, no matter where the link is placed within the application. Relative path: A relative path is a URL or path that does not start with a forward 
          slash "/". It represents a path relative to the current page's location. Relative paths are useful when you want to navigate to a location relative to 
          the current page's URL. They are often used within components that are already part of a particular route and need to navigate within the same area of 
          the application. 
          
          Let's break down the syntax step by step of onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
:

onClick: This is a prop in React that allows you to specify a function that should be executed when the component is clicked.

() => ...: This is an arrow function, which is a concise way to define a function in JavaScript. The () => part denotes that it is an arrow function without any parameters.

{}: The curly brackets {} enclose the function body, containing the code that will be executed when the arrow function is invoked.

window.scrollTo(...): This is a method that belongs to the global window object in the browser environment. The scrollTo() method is used to scroll the window to a specific position.

{ top: 0, behavior: 'smooth' }: This is an object literal passed as an argument to the window.scrollTo() method. It sets the top property of the scroll position to 0 pixels from the top of the page and specifies the scroll behavior as 'smooth'.

When the component (button or link) with this onClick prop is clicked, the arrow function will be executed. The function, in turn, calls the window.scrollTo() method with the provided options, which smoothly scrolls the window to the top of the page.*/}
          <Link
            to="/products/getquote"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-style"
          >
            {/* Styles prop of mt-16 is passed and is evaluated into string form. */}
            <ButtonQuote styles={`mt-16 `} />
          </Link>
          <Link
            to="/products/purchase"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-style"
          >
            <ButtonPurchase styles={`mt-16 `} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
