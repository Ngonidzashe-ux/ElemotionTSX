import React from "react";

//import styles from style module
import styles from "./style";

//import all the required components in the order in which you want to present them.
import {
  Navbar,
  Features,
  Contact_Us,
  Footer,
  Hero,
  News,
  Products,
  Stats,
  Sponsors,
  Testimonials,
  Video,
} from "./Components";

/*declare the constant variable App using the react arrow function component export(rafce) to create a functional component in react
If the function consists of a single expression, we can remove the return keyword and it will be implicitly returned*/
const App = () => (
  //First set div container to the bg-colour(custom defined in the tailwind.config.css), width and handling of content that is too large for a container
  //Also, since this is the beginning of the JSX syntax, it means inside this element, you would need to make comments using the JSX syntax way
  <div className="bg-primary w-full overflow-hidden ">
    {/* Setting the padding of 16 on sm and 6 on other screens through the use of paddingX on the horizontal axis. Flexcenter defines this div container
    as a flex-container. Aligning the elements of this flexbox centrally along both the main and cross axis */}
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      {/* Setting the maximum width of this element to be 1600px on large screens as defined in the style module */}
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero Section has its own element because we want to apply flexStart instead of flexCenter as we want it to align content at the start of the 
    flex container vertically which is useful for a hero section that starts from the top of the page*/}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Video Section has its own div element because we did not want the padding and just wanted the flex-start - start from the top of the flexbox */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Video />
      </div>
    </div>

    {/* This is the div element containing everything else and we want to have a central alignment in the flexbox, both vertically and horizontally */}
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Products />
        <Features />
        <Stats />
        <Testimonials />
        <Sponsors />
        <News />

        <Contact_Us />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
