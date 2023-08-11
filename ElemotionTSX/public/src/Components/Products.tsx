//Import the required components
import { products } from "../Constants";
import styles from "../style";
import ButtonProduct from "./ButtonProduct";
import ButtonDiscoverInv from "./ButtonDiscoverInv";
import { Link } from "react-router-dom";

// ProductCard functional component with the below parameters.
const ProductCard = ({
  content,
  title,
  img,
  link,
  main,
}: {
  content: any;
  title: any;
  img: any;
  link: any;
  main: any;
}) => (
  /* Creates a flexible container which spreads evenly the space between the contents. Col is flex direction and has padding of 12 on all sides.
  This div element has rounded corners and has a max width of 385px with a margin-right of 12 on md and 5 on sm devices and 0 on screens smaller than the 
  stated ones. Margin y of 5 units top and below. Added a feature card class which is defined in index.css and it adds a black gradient as background 
  and also adds a card shadow as box shadow. Card shadow and black gradient are defined in the index file too. */
  <div className="flex justify-between flex-col  pb-12 pt-5 rounded-[5px] max-h-[700px]  w-[30%] md:mr-5 sm:mr-5 mr-0 my-5 bg-gray-800">
    {/* Render the img and apply the image classname which is defined in the index.css as the following:
    width and height - scales both of these to 100%
    object-fit: cover - scaled and cropped to completely cover the container while maintaining its aspect ratio and any parts that exceed the container's
    boundaries are cropped. 
    transition: transform 0.3s ease - the transform property will have a transition effect over a duration of 0.3 seconds with an easing function
    of ease. */}
    <img src={img} alt={title} className="px-5 max-w-full max-h-[240px] " />

    {/* Create a div to house the title and product description. flex container that aligns contents centrally along both axes. Have margin top of 10. */}
    <div className="flex justify-center items-center px-12 mt-10">
      {/* Creates a div element that centers the text content within it */}
      <div className="text-center">
        {/* Heading with below attributes and a margin bottom of 5*/}
        <h4 className="font-poppins font-semibold text-[20px] leading-[22px] text-white mb-5">
          {title}
        </h4>

        {/* Text with below classes  */}
        <p className="font-poppins font-normal text-[18px] leading-[22px] text-dimWhite">
          {content}
        </p>
      </div>
    </div>

    {/* Render a buttonproduct component but pass in a prop of styles which will then be passed to the Button product as a class before rendering */}
    <Link
      to={main}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" w-[390px] justify-center flex"
    >
      <ButtonProduct styles="mx-12" />
    </Link>
    {/* Render a ButtonDiscoverInv componet and pass the prop as a class before rendering */}
    <Link
      to={link}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" w-[390px] justify-center flex"
    >
      <ButtonDiscoverInv styles="mx-12" />
    </Link>
  </div>
);

// Declare a constant functional component called products using the arrow function syntax
const Products = () => (
  /*Create a section with an id called clients and set the vertical padding of the section to be 16px on small devices and larger but otherwise padding is 6px.
  Set the element as a flexible container and align it horizontally and vertically on the center of both the main and cross axes. The flex direction is from top to
  bottom and it has a positioning of relative making it relative to its normal position but allowing absolute positioning of its child elements */
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col  relative `}
  >
    {/* Creates a div element that spans the full width of its parent container. Div element is a flex container and aligns contents in a way to that distribute 
    the space between them evenly and aligns them at the center of the vertical axis. Flex direction is row for medium devices and larger while its col for any
    screens smaller than md. Div takes a relative positioning allowing for the absolute positioning of its child elements. Has an z index of one to allow for 
    flexibility in the stacking order of the divs.*/}
    <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1]">
      {/* Heading 2 */}
      <h2 className={styles.heading2}>Our Products</h2>
    </div>

    {/* Flexible container that houses the entire section where the cards are going to be rendered. Allows content to wrapped on multiple lines and on small devices
    and larger, the contents are aligned at the start/left of the horizontal axis but otherwise positioned centrally or the end of the axis. Spans the full width
    and allows the absolute positioning of child elements and has a z index of one. For the last element, it sets the margin right to 0 due to the feedback
    container class.*/}
    <div className="flex flex-wrap justify-between w-full  max-h-[720px]  rounded-[5px] feedback-container relative z-[1]">
      {/* max width of 33%, max height, margin right, padding bottom, top and margin y axis, positioning of child elements along the start of both axes. padding, rounded corners.
. bg-gradient-to-br: This class applies a background gradient to the element. The gradient starts from the top-left corner (-to-br means "to bottom-right") and fades from one color to another.

from-teal-900: This class sets the starting color of the gradient. It indicates a teal color from the Tailwind CSS color palette with a shade of 900.

to-teal-800: This class sets the ending color of the gradient. It indicates a teal color from the Tailwind CSS color palette with a shade of 800.*/}
      <div className="max-w-[33%] sm:max-h-[700px] mr-6 pb-12 pt-5 my-5 flex flex-col justify-start items-start  py-3 rounded px-3 bg-gradient-to-br from-teal-900 to-teal-800  ">
        {/* Headings */}
        <h4 className="font-poppins pt-8 mb-36 text-center font-semibold xs:text-[50px] text-[33px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
          Portable EMG <span className="text-secondary"> Sensors</span>{" "}
        </h4>
        <h4 className="font-poppins pt-8 mb-36  text-center font-semibold xs:text-[50px] text-[33px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
          &{" "}
        </h4>
        <h4 className="font-poppins pt-8 mb-36 text-center font-semibold xs:text-[50px] text-[33px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
          EMG Detection <span className="text-secondary"> Systems</span>{" "}
        </h4>
      </div>

      {/* Calls the map method on the products array and passes a callback function with the parameters product(current object) and index for each object
      it iterates over in the products array. */}
      {products.map((product) => (
        /*The callback function renders a Product card element and passes a special prop of key, index and all the other props. Key prop is important for react
      to efficiently track and update the list of elements. The spread operator (...)  is used to spread the properties(key-value pairs) of the product object and allows you to pass
      all the key-value pairs of the product object as separate props to the Product Card component. */
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);

export default Products;
