import { Footer, Navbar } from "../Components";
import styles, { layout } from "../style";
import { team } from "../resources";
import { robot } from "../assets";
import { values } from "../Constants";
import ValueCard from "../Components/ValueCard";

import React from "react";
const AboutPage = () => (
  // Background color, spans full width and hides overflowing elements
  <div className="bg-primary w-full overflow-hidden">
    {/* Padding and declaration of a flex container that aligns child elements at its center. */}
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      {/* Set maximum screen size */}
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Flex container with central positioning of child elements. Stacks children vertically and has relative positioning allowing for children's absolute positioning.
Has margin */}
    <div className={`${styles.flexCenter} flex-col relative mb-2`}>
      {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. */}
      <img
        src={team}
        loading="lazy"
        alt="industry"
        className=" object-cover w-full  h-[680px]"
      />

      {/* Render a div element with absolute positioning which means it does not follow the normal flow of the document, instead of stacking vertically below the video, it
is going to be on top of the video start from the top left corner and spanning the full width and height of the relative parent container. Has bg color and opacity
  */}

      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70"></div>

      {/* Render a div element that has absolute positioning too. This means it does not vertically stack below the divs/elements above it but will be
        positioned based on the classnames of the parent container. The parent container has a flex center which means since the current div is a child element,
        it is going to be positioned along the center of the parent container and this is going to be exact same position as the video which means its going
        directly on top of the img. */}
      <div className={`${styles.flexCenter}  absolute`}>
        {/* Heading */}
        <h4 className="font-poppins font-bold xs:text-[100px] text-[50px] text-white xs:leading-[56.8px] leading-[46.8px] w-full pb-4 border-b-[10px] border-secondary">
          About Our Company
        </h4>
      </div>
    </div>

    {/* flex - flex container
md:flex-row flex-col - on md and above, flex row, otherwise, flex col
${styles.paddingY} - padding.  */}
    <div className={layout.section}>
      {/* Flex container with central alignment of child elements, padding, margin, vertical stacking of child elements, minimum width and flex-1 for dynamic growing and shrinking. */}
      <div
        className={`${styles.flexCenter} ${styles.paddingX} mt-1 flex-1 flex-col md:min-w-[900px]`}
      >
        {/* Heading */}
        <h4 className={styles.heading2}>Who are we?</h4>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mt-10`}>
          EleMotion is a technology startup originating from HKU and incubated
          by HKSTP, specializes in the development of wearable EMG sensors for
          accurate and continuous monitoring of muscle-generated electrical
          signals. Our team excels in areas such as micro/nanofabrication,
          physiological detection, and big data analysis.{" "}
        </p>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mt-5`}>
          Utilizing efficient filtering algorithms and innovative
          microstructured electrodes, we can achieve accurate EMG monitoring and
          analysis to assess personal health conditions in real-time. Leveraging
          advanced micro/nano fabrication techniques, we have fabricated
          flexible EMG sensors that boast a compact design and minimal
          invasiveness compared to other commercial products on the market.
        </p>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mt-5`}>
          Moreover, EleMotion integrates IMU sensors to capture motion
          trajectories, offering consumers tailored, scientifically-based
          exercise training programs. In the long term, we aim to expand our
          product's capabilities by incorporating online coaching, injury
          alerts, and consulting services.{" "}
        </p>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mt-5`}>
          Concurrently, we plan to broaden our market presence by providing a
          diverse range of products for sedentary behavior detection, metaverse
          tools, and elderly health monitoring.
        </p>

        {/* Paragraph */}
        <p className={`${styles.paragraph} mt-5`}>
          Our multidisciplinary team, consisting of experts in
          micro/nanomanufacturing, electrophysiology analysis, computer data
          analysis, and beyond, works collaboratively to empower consumers with
          a scientific exercise experience accessible anytime, anywhere.
        </p>
      </div>

      {/* flex-1 - grow and shrink depending on space availability
flex - allows the flexible and dynamic arrangement of child elements
${styles.flexCenter} - child elements centrally positioned
md:mr-10 mr-0 md:mt-0 mt-10 - margins, this is because the flex direction changes depending on the screen size, so we need to ensure that its still readable
relative */}
      <div className={`${layout.sectionImgReverse}`}>
        {/* img element that is resized to ensure it is contained in its parent container. */}
        <img
          src={robot}
          loading="lazy"
          alt="plasma"
          className="object-contain w-[100%] h-[100%]"
        />
      </div>
    </div>

    {/* Div for vision. Aligns chile elements centrally, has padding and can grow or shrink and  also has vertical stacking of child elements */}
    <div className={`${styles.flexCenter} ${styles.paddingX} flex-col flex-1`}>
      {/* Heading */}
      <h4 className={styles.heading2}>Our Vision</h4>

      {/* Paragraph */}
      <p className={`${styles.paragraph} mt-5 mb-12`}>
        Our vision at EleMotion is to be the global standard-bearer in
        electromyography, providing transformative EMG sensor technology to
        healthcare and research sectors worldwide. We aspire to enhance patient
        outcomes and accelerate scientific breakthroughs, redefining our
        understanding of human health. Beyond just being a technology provider,
        we strive to be a trusted partner that propels progress and shapes the
        future of biotechnology.
      </p>
    </div>

    {/* Div for mission: See vision above */}
    <div className={`${styles.flexCenter} ${styles.paddingX} flex-col flex-1`}>
      <h4 className={styles.heading2}>Our Mission</h4>
      <p className={`${styles.paragraph} mt-5 mb-12 `}>
        Our mission at EleMotion is to revolutionize the field of biotechnology
        by developing cutting-edge EMG detection sensors. We aim to empower
        healthcare professionals with advanced tools for precise, real-time
        muscle activity monitoring. By driving innovation and improving patient
        outcomes, we are committed to transforming the way electromyography is
        utilized in various applications.
      </p>
    </div>

    {/* Section with padding, relative positioning allowing for absolute positioning and vertical stacking of child elements.  */}
    <section
      id="clients"
      className={`${styles.paddingX} ${styles.flexCenter} flex-col relative `}
    >
      {/* Heading */}
      <h2 className={styles.heading2}>Our Values</h2>

      {/*Flex container that aligns child elements at the start of the main axis, if there is not enough space for the child elements, they can be wrapped onto multiple
lines and for each line, they should span the full width of the parent. */}
      <div className="flex flex-wrap sm:justify-start w-full">
        {/* map is a JS function and therefore, we need to embed this expression in curly brackets.
 {values.map(...)}: This is the starting point of the code snippet. It uses the map function to iterate through the values array. For each item (value) in the
  array, the map function executes the provided callback function.
 (value, index) => (...): This is the callback function passed to the map function. It takes two parameters: value (the current element being processed) 
 and index (the index of the current element in the array).

 <ValueCard key={value.id} {...value} index={index} />: This JSX code is the output of the map function. For each value in the values array, a ValueCard 
 component is rendered with the following props:

 key={value.id}: The key prop is set to a unique identifier (value.id) to help React efficiently update the list of components.

{...value}: The spread operator ({...value}) spreads the properties of the value object as individual props to the ValueCard component. 
This allows each ValueCard to receive the properties of the corresponding value object.

index={index}: The index prop is set to the current index of the map iteration. It can be used within the ValueCard component if needed.
 */}

        {values.map((value) => (
          <ValueCard key={value.id} {...value} />
        ))}
      </div>
    </section>

    {/* div housing the footer, has padding, background color and also is a flex container */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      {/* maximum screen size */}
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default AboutPage;
