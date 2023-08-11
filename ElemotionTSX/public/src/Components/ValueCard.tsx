// Declare a functional component called value called using the arrow syntax and take the below props as parameters.
const ValueCard = ({
  content,
  title,
  icon,
}: {
  content: any;
  title: any;
  icon: any;
}) => (
  // Render a div element which is a flex container and has the flex-col as its direction. Has padding, is rounded, has max width and margin specifications depending on device size
  <div className="flex flex-col px-12 py-12 rounded-[5px] max-w-[385px] md:mr-12 sm:mr-5 mr-0 my-5 ">
    {/* Render a white image icon with specified dimensions. Brightness-0 = darkness and inverting that means white */}
    <img
      src={icon}
      alt={title}
      className=" brightness-0 invert w-[200px] h-[200px]"
    />

    {/* Div that houses heading and paragraph and aligns them along the central position of the both axes  */}
    <div className="flex justify-center items-center mt-10">
      {/* Aligns the text centrally */}
      <div className="text-center">
        {/* Heading */}
        <h4 className="font-poppins font-semibold text-[30px] leading-[22px] text-white mb-5 ">
          {title}
        </h4>

        {/* Paragraph */}
        <p className="font-poppins font-normal text-[18px] leading-[22px] text-dimWhite mt-8">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default ValueCard;
