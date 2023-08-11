//Similar to a lot of components. Check others
import { Navbar, ContactForm, Footer } from "../Components";
import styles from "../style";

const ContactUsPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
