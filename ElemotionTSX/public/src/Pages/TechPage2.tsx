
import { Navbar, Footer, ButtonBack} from '../Components';
import styles from '../style';
import { industry} from '../resources';
import { layout } from '../style';

import { Link } from 'react-router-dom';

const TechPage2 = () => {
  return (
<div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}  relative md:ml-10 ml-0  `}>
          <h4 className={`${styles.heading2} mb-5`}>
            Unleashing the potential of Wi-Fi.
          </h4>
          <p className={styles.paragraph}>
            Qualcomm Wi-Fi 6 solutions are helping support a technology transition that will impact nearly every kind of connected device—from smartphones to cars to the burgeoning IoT.

          </p>
          <p className={`${styles.paragraph} mt-5`}>
          Ranging in infrastructure application from our homes, to airports, campuses, and the enterprise, our Wi-Fi 6 solutions, spanning operation across all three spectrum bands, build on our world-class engineering capabilities to connect users and devices like never before, with game-changing advancements that go beyond the standards to deliver the speed, low- latency, and coverage needed for immersive, high-performance user experiences.

          </p>
          <Link to={`/technology`}>
            <ButtonBack styles='mt-2'/>
          </Link>
        </div>
        <div className={`${layout.sectionImg} sm:pr-16 pr-6`}>
          <img src={industry} alt='industry' className='object-cover w-full h-full'/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>

    </div>  )
}

export default TechPage2