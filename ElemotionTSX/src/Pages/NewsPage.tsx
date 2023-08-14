import { Navbar, Footer } from "../Components";
import styles from "../style";
import NewsCard from "../Components/NewsCard";
import { news } from "../Constants";
import React from "react";

const NewsPage = () => {
  return (
    // See other navbars
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Section with padding on x and y axis. Flex container which aligns child elements along the center of both axes. Vertically stacks child elements
       */}
      <section
        id="clients"
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col `}
      >
        {/* margin on div */}
        <div className="mb-10">
          {/* heading and use span to change some properties of your heading */}
          <h2 className={styles.heading2}>
            Stay Informed, Stay Inspired: Unveiling the Latest
            <span className="text-secondary"> News</span>, Discoveries and
            <span className="text-secondary"> Events </span>
          </h2>
        </div>

        {/* Second div in this section. It is a flex container which allows for flexible positioning of child elements. Child elements are arranged horizontally
    on md or above devices, otherwise they are vertically stacked together. Elements are wraped onto multiple lines if there is shortage of space on one line, 
    div spans full width and has margin top. Start of the horizontal axis is the position of this div on sm and center on md */}
        <div className="flex md:flex-row flex-col flex-wrap sm:justify-start md:justify-center w-full  mt-8">
          {/* news.map() Call the map function on the news array and since mapping is a JS function, you put curly brackets. Map iterates over all the objects in an array
          and for every iteration, a callback function is executed.

          (card) => 
          Pass a callback function into the map function. A callback function is a function that is passed as an argument to another 
          function and is intended to be executed or called at a later time, often after a certain event or operation has occurred.
          The callback function has a parameter called card which represents an object.
          
          The callback function renders a News card with a key equivalent to the object id.
          The spread operator is used to pass all the properties of a card object as individual props for the Newscard component*/}
          {news.map((card) => (
            <NewsCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* See footer and navbar */}
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

/*Maybe we should create a news array with title, content, image, id and render them in a news card. Card is going to have fixed size for the image portion
and the title portion too. I am not sure if this should be rendered as an anchor tag or we should employ the Link to item from react-dom. Upon clicking the link,
it goes to the page where there is a navbar, Picture or image rendered in the news card earlier, title, content and put social media icons to allow someone to share
the event if they want to. Then the footer*/
