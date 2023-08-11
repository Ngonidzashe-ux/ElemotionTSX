import { Footer, Navbar } from "../Components";
import styles from "../style";
import { computer } from "../resources";

// Defines a functional component using the arrow syntax called Training Form.
const TrainingForm = () => {
  return (
    // Setting bg colour, spanning full width and hiding any overflow of content.
    <div className="bg-primary w-full overflow-hidden">
      {/* Insert x axis padding, make the div element a flex container and align the child elements centrally along both the main axis and the cross axis. */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        {/* Have a maximum screen width */}
        <div className={`${styles.boxWidth}`}>
          <Navbar />

          {/* Div that is a flex element that aligns child elements centrally along both axes. Have a flex col direction and relative positioning allowing for absolute 
positioning of child elements. Margin as well */}
          <div className={`${styles.flexCenter} flex-col relative mb-12`}>
            {/* Specific dimensions and positioning. Resizing to cover the whole parent container. You need to specify height in pixels if you are going to set it  */}
            <img
              src={computer}
              alt="industry"
              className=" object-cover w-full h-[680px]"
              style={{ objectPosition: "center 55%" }}
            />

            {/* This div has absolute positioning allowing it to not follow the normal flow of the document which would to be below the above img. Rather, it positions
        itself at the top lef corner and then spans the whole width and height of its parent container. The colour of its background is primary and an opacity/shade 
        of 60%. The parent container for this is the same as the one for the image element which has a relative positioning */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60"></div>

            {/* Flex container with central alignment of child elements along both axes and also has absolute positioning relative to its parent container.
Does not follow the normal flow of document which would to be below the div about it vertically, but because it is a child element of the relative parent container, it will
be positioned centrally in the parent container as the parent container has a flex center class. */}
            <div className={`${styles.flexCenter} absolute`}>
              {/* Heading */}
              <h4 className="font-poppins font-bold xs:text-[60px] text-[50px] text-center text-white xs:leading-[66.8px] leading-[46.8px] w-full">
                EleMotion Technology{" "}
                <span className="text-secondary">Patents </span> and{" "}
                <span className="text-secondary">Publications </span>
              </h4>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};
export default TrainingForm;
