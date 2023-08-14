import { Footer, Navbar } from "../Components";
import styles from "../style";
import SupportCard from "../Components/SupportCard";
import { support } from "../Constants";
import React from "react";

const SupportPage = () => {
  return (
    // See navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Section with padding, a flex container that aligns the children along the center of both axes. Vertically stacked child elements */}
      <section
        id="clients"
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-col  `}
      >
        {/* Heading */}
        <h2 className={styles.heading2}>
          Empowering Research,<span className="text-secondary"> Education</span>
          , and Innovation: Essential
          <span className="text-secondary"> Support </span> for Professionals
          and Students.
        </h2>

        {/* Flex container. Elements can be wrapped in multiple lines. On sm, children are positioned at the start of the horizontal axis otherwise at the center. 
    Aligned at the start of the vertical axis, spans full width and has margin */}
        <div className="flex flex-wrap items-start sm:justify-start md:justify-center  w-full  mt-8">
          {/* Within this div, we intend to render content related to support. To achieve this, we utilize the map function on our 'support' array.
     We enclose this operation in curly brackets because it involves JavaScript code. We provide a callback function to the map function, which is executed for each object
     in the array during iteration. The callback function takes a parameter representing the current iterated object. Within the callback,
     we render the 'SupportCard' component, assigning the card's id as a key attribute and employing the spread operator to pass the card's properties as distinct props. */}
          {support.map((card) => (
            <SupportCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* See footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
