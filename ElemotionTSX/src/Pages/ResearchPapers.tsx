import { Navbar, Footer } from "../Components";
import styles from "../style";
import { Table } from "../Components";
import { researching } from "../Constants";
import React from "react";

const ResearchPapers = () => {
  return (
    // see other navbars
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* flex container with padding. Vertically stacks child elements. Positions the elements at the start of both the main and cros axes */}
      <div
        className={`${styles.paddingX} flex justify-start items-start ${styles.paddingY} flex-col`}
      >
        {/* Flex div that houses our heading. Has margin and also aligns children at the start of both axes */}
        <div className="flex items-start justify-start mb-10">
          {/* Heading */}
          <h4 className={styles.heading2}>
            Research Papers and{" "}
            <span className="text-secondary">Publications</span>
          </h4>
        </div>

        {/* div house the table. Its a flex container that spans the full width of its parent container. The text is white */}
        <div className="flex w-full text-white ">
          {/* <Table>: This code is rendering the Table component. It's creating an instance of the Table component.
        data={researching}: This is passing the researching array as a prop named data to the Table component. The data prop is being used to provide the content or data that the Table component will display.
        The Table component will receive the data prop and can use it to generate and render a table with the provided data. The exact behavior and structure of the Table component will depend on how it is defined and implemented in your codebase.
        The curly brackets are used to indicate that you are embedding a JavaScript expression (researching) within the JSX markup. Here's why curly brackets are used in this case:
Passing Props: In React, you often need to pass data from one component to another. In this case, you are passing data to the Table component as a prop named data.
Dynamic Value: By wrapping researching in curly brackets, you're telling JSX to evaluate the JavaScript expression and pass its resulting value as the value of the data prop. This allows you to dynamically pass data to the Table component based on the current state or context of your application.
JSX Syntax Requirement: JSX requires the use of curly brackets when embedding JavaScript expressions. This helps differentiate between plain text and dynamic JavaScript code within the JSX markup. */}
          <Table data={researching} />
        </div>
      </div>

      {/* see other footers */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;
