import React from "react";

import { Navbar, Footer, ButtonBack } from "../Components";
import styles from "../style";

import { layout } from "../style";
import { smart } from "../resources";
import { Link } from "react-router-dom";

const TechPage3 = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionImg}`}>
          <img
            src={smart}
            alt="industry"
            className="object-cover w-full h-full"
          />
        </div>
        <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
          <h4 className={`${styles.heading2} mb-5`}>
            Unleashing the potential of Wi-Fi.
          </h4>
          <p className={styles.paragraph}>
            Qualcomm Wi-Fi 6 solutions are helping support a technology
            transition that will impact nearly every kind of connected
            device—from smartphones to cars to the burgeoning IoT.
          </p>
          <p className={`${styles.paragraph} mt-5`}>
            Ranging in infrastructure application from our homes, to airports,
            campuses, and the enterprise, our Wi-Fi 6 solutions, spanning
            operation across all three spectrum bands, build on our world-class
            engineering capabilities to connect users and devices like never
            before, with game-changing advancements that go beyond the standards
            to deliver the speed, low- latency, and coverage needed for
            immersive, high-performance user experiences.
          </p>
          <Link to={`/technology`}>
            <ButtonBack styles="mt-2" />
          </Link>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TechPage3;
