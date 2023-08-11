import styles from "../style";
import { Navbar, Footer } from "../Components";
import { questions } from "../Constants";
import { useState } from "react";
import { faq } from "../Constants";
import FAQCard from "../Components/FAQCard";

/*const: Declares a constant variable named FAQs.
FAQs: The name of the functional component.
() => {: Arrow function syntax that defines the component. The component doesn't receive any props, indicated by the empty parentheses. */
const FAQs = () => {
  /*const: Declares constant variables selected and setSelected.
[selected, setSelected]: Array destructuring syntax used to extract values from the array returned by useState.
useState(null): Calls the useState hook to initialize the state variable selected with an initial value of null. */
  const [selected, setSelected] = useState(null);

  /*const: Declares a constant variable named toggle.
toggle: The name of the function.
(index) => {: Arrow function syntax that defines the function, which takes a parameter named index. */
  const toggle = (index: any) => {
    /*if: The beginning of an if statement.
selected: The state variable that holds the currently selected key.
===: Strict equality comparison operator, checking if selected is equal to key.
Curly brackets are optional.
Parenthesis are used to enclose and evaluate the condition that determines whether the code block inside the if statement should be executed or not.
In programming, parentheses are often used to group expressions and ensure that they are evaluated in the intended order */
    if (selected === index) {
      /*setSelected: The function provided by the useState hook to update the value of the selected state variable.
null: The new value that is set to the selected state variable.*/
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    //Navbar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* flex container that allows the wrapping of children on multiple lines if there is no enough space. Alignment of children at the start of cross and main axis(sm) or center of main(md).
      Spans full width of parent, margin and has relative positioning. */}
      <div className="flex flex-wrap items-start sm:justify-start md:justify-center w-full  relative  mt-8">
        {/* Calls map function on the faq array and passes in a callback function that is to be executed for every iterated object. 
        Card is a parameter that represents the object being iterated on. For each card, an FAQcard component is rendered,
        and the card id is assigned as a key attribute of the element and the spread operator is used to extract all the properties of the object and pass them as individual props to the FAQcard component. */}
        {faq.map((card) => (
          <FAQCard key={card.id} {...card} />
        ))}
      </div>

      {/* Create a section and assign an id attribute. 
      The id attribute is a standard HTML attribute used to uniquely identify an HTML element on a page. It is often used for CSS styling, JavaScript interactions, and as a target for hyperlinks.
      Unlike key attributes, id attributes are not specifically related to React or any UI framework. They are a general concept in HTML and can be used in any web development context.
      In React (or other UI frameworks), the key attribute is used to uniquely identify and track elements within a list or array. It helps React efficiently update and re-render components when the underlying data changes.
      Each element in a list should have a unique key value to help React distinguish between them and optimize the rendering process.
      Keys are not accessible as properties on the component, and they are mainly used by React internally. */}
      <section
        id="general"
        // Put some padding and margin, declare it as a flex container and vertically stack the children.
        className={`${styles.paddingX} my-12 py-4 flex flex-col`}
      >
        {/* Heading */}
        <h4 className={` ${styles.heading2}`}>General</h4>

        {/* Div that is a flex container, has some margin and children arranged vertically in a column */}
        <div className={`flex mt-5 flex-col`}>
          {/* Call a number of functions on the questions array.
           Call the filter method and pass in a callback function with item(current object) as the parameter. It applies a filtering function to 
           each item in the array. The callback function access the classification property of the item. 
           This filter method then goes on to return an array with objects/items whose classification is general.
           After that, we go on to call the map function on the generated array where we iterate over all the objects in the array
           and we pass in a callback function that renders a new div and the specificities of those divs are explained below. */}
          {questions
            .filter((item) => item.classification === "general")
            .map((item) => (
              /*This part is JS and once you get inside a div/section, thats when you get into JSX.
              For this div, it is a flex container whith children aligned to the start of both axes. Feature gradient added and some margin. Has vertical stacking of children. Has a key attribute. This is the box that has the question and answer  */
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                {/* Inside the parent div, we render a div thatis a flex container, has margin, central alignment of kids along cross axis,
                ensures even spacing between kids and changes cursor to pointer when hovered, has padding, spans full width of parent and horizontal alignment of kids in a row.
                When this div is clicked on, the item.id is passed to the toggle function as an argument.
                This div has the question and the + or - sign in a row which is why it has to have the toggle functionality.  */}
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  {/* A flex container that aligns kids along the center of the cross axis and start of the horizontal axis. */}
                  <div className="flex items-center justify-start">
                    {/* Heading housing the question */}
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>

                  {/* flex div that aligns the kids along the center of the cross axis and the end of the horizontal axis. */}
                  <div className="flex items-center justify-end">
                    {/* Span with some text classes */}
                    <span className="font-semibold text-secondary text-[25px]">
                      {/* terinary operator. {condition ? expression1: expression2}
                  if selected === item.id, then span component will render -. if not, it will render +. */}
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>

                {/* In addition to rendering an + or -, we also want to convey more information when the same condtion has been met. 
                  {selected === "4"}: This is a condition that checks if the value of the variable selected is equal to the string "4".
                  &&: This is the logical AND operator. It returns true if both operands are true.
                  ( and ): These parentheses are used to group the JSX or code that should be executed if the condition is true.
                  Since the right expression is not equal to zero, it will always return True which means the code will be executed only wnen the ledft condition is
                  true.
                  
                  Number of Expressions:

                  The logical AND (&&) operator in the example you provided evaluates a single expression if the condition is true.
                  The ternary operator (? :) evaluates two different expressions based on the condition.
                  Purpose and Use Case:

                  The logical AND operator is often used for simple conditional rendering or code execution. If the condition is true, the expression on the right side of && is evaluated.
                  The ternary operator is more versatile and can be used when you need to choose between two different values or expressions based on a condition.*/}
                {selected === item.id && (
                  <div className="my-2">
                    {/* P Housing answer */}
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* See General */}
      <section
        id="troubleshooting"
        className={`${styles.paddingX} my-12 py-4  flex flex-col`}
      >
        <h4 className={` ${styles.heading2}`}>Troubleshooting</h4>
        <div className={`flex  mt-5 flex-col`}>
          {questions
            .filter((item) => item.classification === "troubleshooting")
            .map((item) => (
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-start">
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-semibold text-secondary text-[25px]">
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="my-2">
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* See General */}
      <section
        id="elemotion_sensor_setup"
        className={`${styles.paddingX} my-12 py-4 flex flex-col`}
      >
        <h4 className={` ${styles.heading2}`}>Elemotion Sensor Setup</h4>
        <div className={`flex mt-5 flex-col`}>
          {questions
            .filter((item) => item.classification === "elemotion_sensor_setup")
            .map((item) => (
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-start">
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-semibold text-secondary text-[25px]">
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="my-2">
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* See General */}
      <section
        id="ordering"
        className={`${styles.paddingX} my-12 py-4  flex flex-col`}
      >
        <h4 className={` ${styles.heading2}`}>Ordering</h4>
        <div className={`flex mt-5 flex-col`}>
          {questions
            .filter((item) => item.classification === "ordering")
            .map((item) => (
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-start">
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-semibold text-secondary text-[25px]">
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="my-2">
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* See General */}
      <section
        id="firmware_updates"
        className={`${styles.paddingX} my-12 py-4  flex flex-col`}
      >
        <h4 className={` ${styles.heading2}`}>Firmware Updates</h4>
        <div className={`flex mt-5 flex-col`}>
          {questions
            .filter((item) => item.classification === "firmware_updates")
            .map((item) => (
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-start">
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-semibold text-secondary text-[25px]">
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="my-2">
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* See General */}
      <section
        id="training"
        className={`${styles.paddingX} my-12 py-4  flex flex-col`}
      >
        <h4 className={` ${styles.heading2}`}>Training</h4>
        <div className={`flex mt-5 flex-col`}>
          {questions
            .filter((item) => item.classification === "training")
            .map((item) => (
              <div
                className={`flex justify-start items-start feature-card flex-col mb-2`}
                key={item.id}
              >
                <div
                  className="my-2 flex items-center justify-between cursor-pointer px-10 flex-row w-full"
                  onClick={() => toggle(item.id)}
                >
                  <div className="flex items-center justify-start">
                    <h4
                      className={`font-poppins font-semibold text-secondary text-[22px] leading-[30.8px]`}
                    >
                      {item.question}
                    </h4>
                  </div>
                  <div className="flex items-center justify-end">
                    <span className="font-semibold text-secondary text-[25px]">
                      {selected === item.id ? "-" : "+"}
                    </span>
                  </div>
                </div>
                {selected === item.id && (
                  <div className="my-2">
                    <p className="font-poppins font-normal text-white text-[20px] px-10 leading-[30.8px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
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

export default FAQs;
