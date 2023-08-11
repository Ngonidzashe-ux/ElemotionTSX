//import styles and layout
import styles, { layout } from "../style";

//import the phone and mail icons
import { phone1, mail1 } from "../resources";

const Contact_Us = () => (
  /*Create a section with an id contact.
  flex - Set the section as a flex container
  md:flex-row flex-col - The flex direction is flex-row for medium screens and larger making content to flow from left to rght and otherwise top to bottom
  ${styles.paddingY} - Putting some padding on the y axis.*/
  <section id="contact" className={layout.section}>
    {/* Creating a div that is going to contain the Contact Us heading and the Engage with Elemotion Heading and other divs with the contact information.
    flex-1: the current flex item can grow and shrink depending on the available space
    ${styles.flexStart}: Flex container and allign contents along the center of main axis and start of the cross axis(top)
    flex-col: Contents flow from top to bottom */}
    <div className={layout.sectionInfo}>
      {/* Heading 2 */}
      <h2 className={styles.heading2}>Contact Us</h2>

      {/* The leading controls the line spacing/vertical spacing between lines of text within this h1 element.
      Spacing between the above h2 element and this element is controlled by padding and margins. Therefore, to correct how there is enormous space 
      between the text on small devices, control the leading. W-full allows the h1 heading to span the full width of its parent container. Added margins
      on top and bottom */}
      <h1 className="font-poppins font-bold xs:text-[60px] text-[50px] text-secondary xs:leading-[66.8px] leading-[56.8px] w-full mt-5 mb-8">
        Engage with EleMotion
      </h1>

      {/* This div is going to be directly under the two headings above because the parent div's flex direction is col. 
      This div is acting as a flex container and aligning its content at the center of its cross axis and applying mb of 3. 
      The items center allows the icon to take a vertically central position and also the text to take a vertically central position
      The default flex-direction if a flex class is added is row, thats why you see a horizontal alignment of icon and text even though the direction
      is not explicitly stated*/}
      <div className="flex items-center mb-3">
        {/* Adding the icon and making it to the stated size. The class object-contain ensures that the image is scaled to fit within the specified 
        dimensions while maintaining its aspect ratio. The class mr-2 adds a margin of 2 units (as defined in your CSS) to the right side of the image, 
        creating a space between this image and adjacent elements. */}
        <img
          src={mail1}
          alt="email"
          className="w-[40px] h-[40px] object-contain mr-2"
        />

        {/* Rendering an anchor element with the href(link target) set to open default email client on the user's device with a new email to the email address. 
        Text properties for the text that will be displayed*/}
        <a
          href="mailto:elemotiontech@gmail.com"
          className="font-poppins font-semibold text-white text-[18px] leading-[30.8px]"
        >
          elemotiontech@gmail.com
        </a>
      </div>

      {/* Similar to div above except lack of margin */}
      <div className="flex items-center">
        {/* The class object-cover ensures that the image covers its container while maintaining its aspect ratio.  
        The class mr-2 adds a margin of 2 units to the right side of the image.
        The borderRadius: '50%' style sets the border radius of the image to 50%, creating a circular shape. This inline CSS style will 
        override any styling defined in CSS classes, allowing you to achieve the desired circular image shape.*/}
        <img
          src={phone1}
          alt="phone"
          className="w-[40px] h-[40px] object-cover mr-2"
          style={{ borderRadius: "50%" }}
        />

        {/* Use tel in your href to allow for the default phone app to open and call the number */}
        <a
          href="tel:+852 6998 2403"
          className="font-poppins font-semibold text-white text-[18px] leading-[30.8px]"
        >
          +852 6998 2403
        </a>
      </div>
    </div>
  </section>
);

export default Contact_Us;
