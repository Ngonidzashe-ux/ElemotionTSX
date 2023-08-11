//import picture of quotes from assets
import { quotes } from "../assets";

/*const FeedbackCard -  declares a functional component named FeedbackCard.
( { content, name, title, img } ) - is the destructuring assignment in the function parameter list. It allows you to
 extract specific properties from the props object passed to the component. In this case, the component expects the content, 
 name, title, and img properties to be passed as props.
=> - is the arrow function syntax, which indicates that the following block of code is the body of the function.
The parentheses ( and ) wrap the JSX code that defines the component's rendering output.
Inside the JSX code, you would include the markup and logic to render the feedback card using the provided content, name, title, and img props. */
const FeedbackCard = ({
  content,
  title,
  img,
  name,
}: {
  content: any;
  title: any;
  img: any;
  name: any;
}) => (
  /*Div element represents a container with flexbox properties, padding on the x and y axis, rounded corners by 20px and with a maximum width of 370px.
  Applies a margin-right of 10 units for medium sized screens and margin right 5 for small sized screens and larger. For screen sizes smaller than the stated ones,
  the margin right is 0. Margin on the y axis is 5 providing a vertical spacing of 5 units. The element has a transparent background due to the feedback-card
  class. In the index.css file, there is a class defined called .feedback-card:hover {background: var(--black-gradient) which is basically a class to determine 
    what happens when the div container is hovered upon and in this case, a hover changes the background from transparent to a black gradient.}*/
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Render an image component of the stated size and object-contain is a class that ensures the image scales while maintaining 
    its aspect ratio and fully fits within the specified width and height, without distorting the image. */}
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />

    {/* Text with the below classes and this p component should have a vertical space of 10 units on bottom and top */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/* Setting the div element as a flex container and the direction as flex-row making the contents flow from right to left*/}
    <div className="flex flex-row">
      {/* Render a rounded image component with the below image specifications */}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      {/* Flexible div container with a flex direction of col and margin left of 4 units */}
      <div className="flex flex-col ml-4">
        {/* Heading with the below specifications and render the name in this h4 tag */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>

        {/* Render the title in a p tag using the following specifications */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
