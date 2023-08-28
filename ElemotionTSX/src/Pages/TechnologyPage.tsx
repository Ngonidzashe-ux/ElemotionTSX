import { Navbar, Footer } from "../Components";
import styles from "../style";
import { layout } from "../style";
import {
  // robot1,
  // vr,
  img2,
  microneedle,
  img9,
  // physiological,
  // bigdata,
  big,
} from "../resources";
import React from "react";

const TechnologyPage = () => {
  return (
    // see navbar
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Flex container with central positioning of child elements. Stacks children vertically and has relative positioning allowing for children's absolute positioning.
       */}
      <div className={` ${styles.flexCenter} flex-col relative`}>
        {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. Object positioning to change the section of image that is being shown*/}
        <img
          src={img2}
          loading="lazy"
          alt="industry"
          className="w-full md:h-[680px] h-[300px] object-cover"
          style={{ objectPosition: "center 45%" }}
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
            Technology
          </h4>
        </div>
      </div>

      {/* div with padding, is a flex container, aligns children to the center of both axes, centers text, vertically stacks children and allows dynamic growth according to space. */}
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} text-center flex-col flex-1 `}
      >
        {/* Heading */}
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[50px] leading-[36.8px] md:w-[70%]">
          Our cutting-edge EMG technology redefines precision physiological
          electrical modeling.
        </h4>

        {/* Paragraph */}
        <p className="font-poppins font-normal text-dimWhite text-[18px] md:mt-0 mt-10 leading-[30.8px] md:w-[70%] my-4">
          EleMotion technology, with its personalized comfortable fit,
          revolutionizes the user experience, proving to be an invaluable tool
          in exercise physiology research and a wide range of applications. From
          real-time monitoring of target muscle groups to personalized
          recommendations, it offers precise muscle activity tracking and
          enhances exercise performance, making it a cutting-edge solution with
          endless possibilities.{" "}
        </p>
      </div>

      {/* 
flex - flex container allowing for flexible positioning of children
md:flex-row flex-col - children are horizontally arranged in a row
 ${styles.paddingY} - padding along the y-axis*/}
      <div className={`${layout.section}`}>
        {/* 
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexCenter} - div is a flex container, with children elements aligned at the center of the cross axis and at the center of the horizontal axis.
       flex - flex container
       has some margin*/}
        <div className={`${layout.sectionImg}`}>
          {/* Image spanning the full width and height of parent. REsizes to fully cover the parent */}
          <img
            src={microneedle}
            loading="lazy"
            alt="industry"
            className="object-contain md:w-[620px] w-full md:h-[620px] h-[400px] "
          />
        </div>

        {/* 
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexStart} - div is a flex container, with children elements aligned at the start of the cross axis and at the center of the horizontal axis.
       flex-col - elements arranged vertically in a column
       has some padding*/}
        <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
          {/* Heading */}
          <h4
            className={`${styles.heading2} md:text-left text-center mb-5 mt-5`}
          >
            Microstructured <span className="text-secondary"> Electrode</span>
          </h4>

          {/* Paragraph */}
          <p className=" font-semibold md:text-[30px] text-[25px] md:text-left text-center text-dimWhite md:leading-[36.8px] leading-[30.8px] w-full mb-5">
            <li> Non-invasive, ultra-thin and flexible</li>
            <li> Equipped with micro/nano fabrication techniques</li>
            <li> Suitable for accurate & long-term physiological detection</li>
          </p>

          {/* Paragraph */}
          <p className={`${styles.paragraph} md:text-left text-center`}>
            To ensure long-term biopotential monitoring with high-quality
            signals and minimal motion disruptions, the ideal solution lies in
            dry electrodes, that could adhere exceptionally well to the skin
            while maintaining robust mechano-electrical stability, and detection
            accuracy.{" "}
          </p>

          {/*Paragraph  */}
          <p className={`${styles.paragraph} md:text-left text-center mt-3`}>
            EleMotion presents a novel, cost-effective, and scalable solution to
            surface biopotential monitoring by introducing highly conductive,
            flexible, and ultra-thin micro-needle electrodes (MNEs), fabricated
            using a 3D electrodeposition method. Unlike conventional Ag/AgCl gel
            electrodes, these MNEs eliminate the need for skin pre-treatment,
            discomfort, potential skin irritation, and the issue of signal
            degradation over time. Compared to existing dry electrodes, the
            invention overcomes the problems of high materials cost, low
            adhesiveness, and low flexibility. This innovative design ensures
            the MNEs have excellent conductivity, adhere comfortably to the skin
            without causing pain, and maintain a high signal-to-noise ratio,
            marking a significant advancement in the field of wearable
            electrophysiology monitoring.
          </p>
        </div>
      </div>

      {/* See above */}
      <div
        className={`flex md:flex-row flex-col-reverse ${styles.paddingY} ${styles.paddingX}`}
      >
        <div className={`${layout.sectionInfo}  relative md:ml-10 ml-0  `}>
          <h4
            className={`${styles.heading2} md:text-left text-center mt-5 mb-5`}
          >
            Modularized Wireless{" "}
            <span className="text-secondary"> Sensing Node</span>{" "}
          </h4>

          <p className=" font-semibold md:text-[30px] text-[25px] md:text-left text-center text-dimWhite md:leading-[36.8px] leading-[30.8px] w-full mb-5">
            <li> Light-weight, wireless</li>
            <li> Customizable layout for various scenarios</li>
            <li> Easy to implement with other motion tracking system</li>
          </p>
          <p className={`${styles.paragraph} md:text-left text-center`}>
            To achieve the comfortable and long-term biopotential monitoring for
            various scenarios and applications, the convenient solution is the
            modularized wireless node design to build a customized biopotential
            motoring network without affecting subjects’ normal movement and
            extra burden.
          </p>
          <p className={`${styles.paragraph} md:text-left text-center mt-3`}>
            EleMotion provides a lightweight, wireless, and customizable
            solution to surface biopotential monitoring by introducing a highly
            integrated, modularized, wireless sensing node to build the
            customized personal sensing network. Compared to traditional bulky
            surface biopotential sensing systems with tedious wiring and noisy
            signals, our highly integrated sensing nodes are embedded with the
            wireless transmission while only weighing 15g, which could be easily
            attached to the target muscle without affecting their movement or
            adding extra burden. With the independent sensing node design, users
            could design their unique sensing protocol with customized node
            numbers and layouts. By adopting a universal wireless transmission
            protocol, this system could be easily embedded with other
            motion-tracking systems for complex neuromuscular model development.
            This novel design provides excellent convenience in long-term
            biopotential monitoring and enables clinical staff and researchers
            in more flexible and various application scenarios.
          </p>
        </div>
        <div className={`${layout.sectionImg}`}>
          <img
            src={img9}
            loading="lazy"
            alt="industry"
            className="object-contain md:w-[620px] w-full md:h-[620px] h-[300px] "
          />
        </div>
      </div>

      {/* see above */}
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionImg}`}>
          <img
            src={big}
            loading="lazy"
            alt="industry"
            className="object-contain md:w-[620px] w-full md:h-[620px] h-[400px] transform rotate-90"
          />
        </div>
        <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
          <h4
            className={`${styles.heading2} md:text-left text-center mb-5 mt-5`}
          >
            Big Data Driven{" "}
            <span className="text-secondary"> Physiological Model</span>
          </h4>
          <p className=" font-semibold md:text-[30px] text-[25px] md:text-left text-center text-dimWhite md:leading-[36.8px] leading-[30.8px] w-full mb-5">
            <li> Multi-sensor data fusion</li>
            <li> Big data model for accurate estimation</li>
          </p>
          <p className={`${styles.paragraph} md:text-left text-center`}>
            To provide an accurate estimation of the physiological state of our
            body, single biopotential signal piece or separated recorded signals
            are not sufficient, the prime solution lies in the big-data model
            assessment, that the fusion of various physiological signal with
            longitudinal and transverse reference from the big-data model.{" "}
          </p>

          <p className={`${styles.paragraph} md:mt-3 md:text-left text-center`}>
            EleMotion offers an accurate, comprehensive, and adaptive solution
            to estimation of the physiological state of our body by introducing
            data-fusion and utilizing the big-data models to further enhances
            the capabilities and robustness of the assessment. By collecting and
            analyzing several physiological electrical signals simultaneously,
            including surface EMG, electrocardiography (ECG), hear rate, blood
            oxygen, the system could provide a more comprehensive description of
            muscle function and its interplay with other physiological
            processes. The big-data model leverages our existing clinical
            datasets to make accurate estimations of muscle activity, fatigue,
            motor intent, and other physiological parameters. Combined with the
            fused features from multi-physiological signals, the data-fusion and
            our big-data models can provide more accurate and insightful
            assessments of human physiology and biomechanics.{" "}
          </p>
        </div>
      </div>

      {/* see above */}
      {/* <div
        className={`flex md:flex-row flex-col-reverse ${styles.paddingY} ${styles.paddingX}`}
      >
        {" "}
        <div className={`${layout.sectionInfo}  relative md:ml-10 ml-0  `}>
          <h4
            className={`${styles.heading2} md:text-left text-center mt-5 mb-5`}
          >
            {" "}
            Elemotion <span className="text-secondary"> App</span>
          </h4>
          <p className=" font-semibold md:text-[30px] text-[25px] md:text-left text-center text-dimWhite md:leading-[36.8px] leading-[30.8px] w-full mb-5">
            <li> Electromyography</li>
            <li> Analytical Technique</li>
          </p>
          <p className={`${styles.paragraph} md:text-left text-center`}>
            The Elemotion Personalized App serves as a powerful data
            visualization and feedback system in Electromyography (EMG)
            applications. Designed to complement our hardware products, it
            offers valuable software value-added services to enhance the user
            experience. With real-time data visualization capabilities, users
            can gain immediate insights into their muscle activity and
            performance. The app provides dynamic graphs and charts, allowing
            for easy interpretation of EMG data during various activities and
            exercises.
          </p>
          <p className={`${styles.paragraph} md:text-left text-center mt-3`}>
            The key strength of the Elemotion App lies in its personalized
            approach. It analyzes individual EMG data to provide tailored
            recommendations based on the user's specific needs and goals. These
            personalized recommendations assist in optimizing training
            techniques and preventing injuries, making the app an invaluable
            tool for athletes, fitness enthusiasts, and rehabilitation patients
            alike.
          </p>
        </div>
        <div className={`${layout.sectionImg}`}>
          <img
            src={robot1}
            loading="lazy"
            alt="industry"
            className="object-contain md:w-[620px] w-full md:h-[620px] h-[400px] "
          />
        </div>
      </div> */}

      {/* see footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
