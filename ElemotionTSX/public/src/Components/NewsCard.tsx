// import necessities.
import { Link } from "react-router-dom";

// Component with the below props as parameters.
const NewsCard = ({ id, title, icon }: { id: any; title: any; icon: any }) => {
  return (
    //  Link to an absolute path which is root/news/evaluated id value. On Click to handle the clicking event.
    <Link
      to={`/news/${id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="link-style"
    >
      {/* Flex container, with col direction. Has specific width, height and margin dimensions. Feature-card allows the change of background. Transition allows the movement of the cards
when hovered over. */}
      <div
        className="flex flex-1 flex-col md:min-w-[395px] h-[500px] sm:max-w-[395px] md:mr-10 sm:mr-5 mr-0 my-8 feature-card feedback-container
      transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 duration-100"
      >
        {/* Style attribute showing height and width dimensions */}
        <div style={{ height: "260px", width: "100%" }}>
          {/* <img>: This is an HTML <img> element used to display an image on the web page.

src={icon[0].img}: The src attribute specifies the URL of the image file to be displayed. In this case, the value is derived from the icon array. 
The expression icon[0].img accesses the img property of the first element (index 0) in the icon array. It assumes that icon is an array of objects, 
and the first object contains an img property that holds the image URL. 
className="w-full h-full object-cover": The className attribute is used to apply CSS classes to the <img> element. In this case, it sets the classes w-full,
h-full, and object-cover. The w-full and h-full classes set the width and height of the image to be 100% of its container, respectively. The object-cover class
 is likely used to ensure the image maintains its aspect ratio and covers the entire container while cropping as needed.
 
 style={{ objectPosition: 'center 35%' }}: The style attribute is used to apply inline styles to the <img> element. It is an object containing CSS properties 
 and their values. In this case, it sets the objectPosition property to 'center 35%'. The objectPosition property controls the position of the image content 
 inside the container. The value 'center 35%' means the image content will be centered horizontally and positioned 35% from the top of the container. It is 
 used to control how the image is displayed within its container.*/}
          <img
            src={icon[0].img}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>

        {/* Spans full width, grows and shrinks, contents aligned along the center of both the horizontal and vertical axes. Has a white border on top of div, and 
        some padding. Text is positioned at the center of the horizontal axis. */}
        <div className="w-full flex-1 justify-center text-center items-center border-t-[4px] border-t-[#FFFFFF] px-3 py-10">
          {/* Heading4 */}
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-secondary">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
