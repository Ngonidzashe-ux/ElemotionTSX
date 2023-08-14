import { Navbar, Footer } from "../Components";
import styles from "../style";
import FullNewsCard from "../Components/FullNewsCard";
import React from "react";

/*This line declares a constant variable named Full news which represents the functional component and the arrow function syntax was used.
({ news }) => { ... }: This is the parameter list of the functional component. It uses object destructuring to extract the news prop from the props object. 
This means that when you use the FullNews component, you can pass an object with a news property/key, and the component will automatically extract and use the 
value of that property. */
const FullNews = ({ news }: { news: any }) => {
  return (
    // Div with bg colour, spans full width and hides overflowing contents
    <div className="bg-primary w-full overflow-hidden ">
      {/* Has padding and also a flex container with central alignment of child elements */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        {/* maximum screen size */}
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Section with padding, id and is a flex container. */}
      <section
        id="clients"
        className={`${styles.paddingX} ${styles.flexCenter} `}
      >
        {/* div that is a flex container spans full width of parent  */}
        <div className="flex w-full">
          {/*news.id: This refers to the id property of the news object.

window.location.pathname: This represents the current URL pathname of the web page.

.split('/'): This method splits the URL pathname into an array of segments using the forward slash (/) as the delimiter. For example, if the pathname is "/news/123", .split('/') would result in ['news', '123'].

.pop(): This method retrieves the last element of the array. In this case, it retrieves the last segment of the URL pathname. For example, if the pathname is "/news/123", .pop() would return '123'.

news.id === window.location.pathname.split('/').pop(): This is a comparison that checks if the id property of the news object is equal to the last segment of the URL pathname. It's essentially checking if the id matches the last part of the URL, which often indicates that the page is displaying the full news article corresponding to that id.

&&: This is the logical AND operator. It combines two conditions and evaluates to true only if both conditions are true.

( and ): These parentheses are used to group the JSX code that follows. They are necessary for correct syntax.

JSX code to be rendered if the condition is true: This is the JSX code that will be rendered if the comparison (news.id === window.location.pathname.split('/').pop()) evaluates to true.  */}
          {news.id === window.location.pathname.split("/").pop() && (
            /*Renders the full news card component, assigns a key to each rendering and uses the spread operator which basically takes all the properties of 
            the news object and passes them into the Full News Card component as individual props */
            <FullNewsCard key={news.id} {...news} />
          )}
        </div>
      </section>

      {/* see navbar */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
        {/* see navbar */}
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FullNews;
