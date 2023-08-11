import { Navbar, Footer, ButtonDiscover } from "../Components";
import styles from "../style";
import { layout } from "../style";
import { robot1, gears, vr, img2 } from "../resources";
import { Link } from "react-router-dom";

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
          alt="industry"
          className="w-full h-[680px] object-cover"
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
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[50px] leading-[36.8px] w-[70%]">
          Our cutting-edge EMG technology redefines precision physiological
          electrical modeling.
        </h4>

        {/* Paragraph */}
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] w-[70%] my-4">
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
            src={gears}
            alt="industry"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 
       flex-1 - dynamic growth and shrinking of the container depending on available space 
       ${styles.flexStart} - div is a flex container, with children elements aligned at the start of the cross axis and at the center of the horizontal axis.
       flex-col - elements arranged vertically in a column
       has some padding*/}
        <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
          {/* Heading */}
          <h4 className={`${styles.heading2} mb-5`}>
            Microstructured <span className="text-secondary"> Electrode</span>
          </h4>

          {/* Paragraph */}
          <p className=" font-semibold xs:text-[23px] text-[40px] text-dimWhite xs:leading-[36.8px] leading-[46.8px] w-full mb-5">
            <li> Non-invasive, ultra-thin and flexible</li>
            <li> Utilizes advanced micro/nano fabrication techniques</li>
            <li> Suitable for accurate & long-term physiological detection</li>
          </p>

          {/* Paragraph */}
          <p className={styles.paragraph}>
            To ensure long-term biopotential monitoring with high-quality
            signals and minimal motion disruptions, the ideal solution lies in
            dry electrodes, that could adhere exceptionally well to the skin
            while maintaining robust mechano-electrical stability, and detection
            accuracy.{" "}
          </p>

          {/*Paragraph  */}
          <p className={`${styles.paragraph} mt-3`}>
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
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}  relative md:ml-10 ml-0  `}>
          <h4 className={`${styles.heading2} mb-5`}>
            Flexible <span className="text-secondary"> Electronics</span>{" "}
          </h4>

          <p className=" font-semibold xs:text-[30px] text-[40px] text-dimWhite xs:leading-[36.8px] leading-[46.8px] w-full mb-5">
            <li> Electromyography</li>
            <li> Analytical Technique</li>
          </p>
          <p className={styles.paragraph}>
            Flexible electronics have found valuable applications in the field
            of Electromyography (EMG), offering innovative solutions for
            monitoring muscle activity.
          </p>
          <p className={`${styles.paragraph} mt-5`}>
            These bendable and stretchable electronic circuits can be seamlessly
            integrated into wearable devices, enabling non-invasive and
            comfortable muscle signal recording. With the incorporation of
            flexible electronics, EMG devices can now be attached directly to
            the skin, conforming to the body's contours during movement. This
            advancement allows for enhanced accuracy and reliability in
            detecting and analyzing electrical signals generated by muscles.
          </p>
          <Link
            to={`/technology/tech-2`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-style"
          >
            <ButtonDiscover styles="mt-2" />
          </Link>
        </div>
        <div className={`${layout.sectionImg} sm:pr-16 pr-6`}>
          <img
            src={robot1}
            alt="industry"
            className="object-cover  w-[620px] h-[620px]"
          />
        </div>
      </div>

      {/* see above */}
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionImg}`}>
          <img src={vr} alt="industry" className="object-cover w-full h-full" />
        </div>
        <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
          <h4 className={`${styles.heading2} mb-5`}>
            Physiological <span className="text-secondary"> Signal</span>
          </h4>
          <p className=" font-semibold xs:text-[30px] text-[40px] text-dimWhite xs:leading-[36.8px] leading-[46.8px] w-full mb-5">
            <li> Large Scale Model</li>
            <li> Analytical Technique</li>
          </p>
          <p className={styles.paragraph}>
            Physiological signals play a crucial role as an analytical technique
            in the Elemotion EMG Portable Sensor.{" "}
          </p>
          <p className={`${styles.paragraph} mt-5`}>
            EMG focuses on recording and analyzing electrical activity in
            muscles, and it often relies on the integration of other
            physiological signals to gain deeper insights into muscle function
            and overall body performance. One common approach is to combine EMG
            with electrocardiography (ECG) and respiratory signals. By
            synchronizing these signals, researchers and healthcare
            professionals can study how muscle activity correlates with heart
            rate and breathing patterns.{" "}
          </p>
          <Link
            to={`/technology/tech-3`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-style"
          >
            <ButtonDiscover styles="mt-2" />
          </Link>
        </div>
      </div>

      {/* see above */}
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}  relative md:ml-10 ml-0  `}>
          <h4 className={`${styles.heading2} mb-5`}>
            Elemotion <span className="text-secondary"> App</span>
          </h4>
          <p className=" font-semibold xs:text-[30px] text-[40px] text-dimWhite xs:leading-[36.8px] leading-[46.8px] w-full mb-5">
            <li> Electromyography</li>
            <li> Analytical Technique</li>
          </p>
          <p className={styles.paragraph}>
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
          <p className={`${styles.paragraph} mt-5`}>
            The key strength of the Elemotion App lies in its personalized
            approach. It analyzes individual EMG data to provide tailored
            recommendations based on the user's specific needs and goals. These
            personalized recommendations assist in optimizing training
            techniques and preventing injuries, making the app an invaluable
            tool for athletes, fitness enthusiasts, and rehabilitation patients
            alike.
          </p>

          <Link
            to={`/technology/tech-4`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-style"
          >
            <ButtonDiscover styles="mt-2" />
          </Link>
        </div>
        <div className={`${layout.sectionImg} sm:pr-16 pr-6`}>
          <img
            src={robot1}
            alt="industry"
            className="object-cover w-[620px] h-[620px]"
          />
        </div>
      </div>

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
