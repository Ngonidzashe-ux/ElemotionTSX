import { useRef, useState } from "react";
import { ButtonBack, ButtonSubmit, Footer, Navbar } from ".";
import styles from "../style";
import { img6 } from "../resources";
import emailjs from "@emailjs/browser";
import React from "react";

/*const ContactForm = () => {: This defines a functional component named ContactForm using the arrow function syntax.
const handleRefresh = () => {: This defines a function named handleRefresh using the arrow function syntax. This function does not take any parameters.
window.location.reload();: Inside the handleRefresh function, this line of code uses the window.location.reload() method to reload the current web page. This effectively refreshes the page, causing it to reload from the server. */
const QuoteForm = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  /*const former = useRef(): This line of code declares a const variable named former and initializes it with the result of calling the useRef() hook. This creates a ref object that can be used to hold a reference to a DOM element or any other value that persists across renders.
The useRef hook is often used to access and manipulate DOM elements directly, as well as to maintain values that don't trigger re-renders when they change. It can be helpful in scenarios where you need to interact with the DOM imperatively or store values that don't affect the component's rendering. */
  const former = useRef<HTMLFormElement | null>(null);

  /* Defines state variable called formData and state function called setFormData using the UseState hook. The form data is initiallized with 
  an object containing properties name, email, message etc all set to empty strings as their initial values. An object in js is a dictionary in python.
  The state variables are set before the return statement. By default, the usestate hook returns an array with two elements, current state value and state setter
  function. By array destructuring, we assign the first element(which is an object/dictionary in this case) to the formData variable and the second to the setFormData variable. Therefore, an array on the right
  is being destructured into two variables. */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    org: "",
    department: "",
    country: "",
    quantity: "",
    subject: "",
    hear: "",
    product: "",
    phone: "",
  });

  /*const [isFormSubmitted, setIsFormSubmitted] = useState(false);

const: This keyword is used to declare a constant variable.
[isFormSubmitted, setIsFormSubmitted]: This is array destructuring, where two variables isFormSubmitted and setIsFormSubmitted are declared to capture the current state value and its updater function, respectively.
useState(false): This is the useState hook being called with an initial state value of false. It returns an array with two elements: the current state value (isFormSubmitted) and the updater function (setIsFormSubmitted) that allows you to modify the state.
The isFormSubmitted variable will hold the current state value, which starts as false since that's the initial value passed to useState. The setIsFormSubmitted function is used to update the isFormSubmitted state.
 */
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  /*This line declares a function handlechange with an event parameter e.
  This will be used to handle changes to the input field. */
  const handleChange = (e: any) => {
    /*SetFormData state setter function is used to update the formData state with a new object. 
    Uses the spread syntax to create a shallow copy of the existing formData object, preserving its previous state.
    Then it updates the property in the new object that matches the name attribute of the input fielc with the new value of the input field. 
    This way, only the property corresponding to the changed input field is updated, while the other properties remain unchanged. */
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // // This line declares a function handleSubmit with an event parameter e. Will handle the form submission when the user submits the form.
  // const handleSubmit = (e: any) => {
  //   // This line prevents the default behavior of form submission, which would typically cause the page to reload when the form is submitted.
  //   e.preventDefault();

  //   // Handle form submission logic here
  //   // You can send the form data to a server or perform any required actions

  //   // This line logs the current formData object to the console. It will show the values entered in the form, which is useful for debugging purposes.
  //   console.log(formData);

  //   //  Copied this code snippet from emailjs
  //   emailjs
  //     .sendForm(
  //       "service_m0enwkq",
  //       "template_5pp59ya",
  //       former.current,
  //       "em-KIG-sCxqUFFgij"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formData);

    if (former.current) {
      emailjs
        .sendForm(
          "service_53j0kox",
          "template_21t87ln",
          former.current,
          "ObXEiryJN6suqSN8p"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsFormSubmitted(true);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    }

    /*e: This presumably represents the event object passed to the form submission handler function.
e.target: Refers to the DOM element that triggered the event, in this case, the form element.
.reset(): A method of the form element that clears the form's input fields and resets their values to their initial state. */
    const form = e.target as HTMLFormElement;
    form.reset();

    /*setFormData: This is the updater function from the useState hook that allows you to update the state of the formData object.
Inside setFormData(): An object is passed with properties corresponding to the form fields. Each property is set to an empty string, effectively resetting the form fields to empty values. */
    setFormData({
      name: "",
      email: "",
      message: "",
      org: "",
      department: "",
      country: "",
      product: "",
      subject: "",
      hear: "",
      quantity: "",
      phone: "",
    });

    /*setIsFormSubmitted: This is the updater function for the isFormSubmitted state.
true: Sets the isFormSubmitted state to true, indicating that the form has been successfully submitted. */
    setIsFormSubmitted(true);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Terinary operator {condition ? (expression 1):(expression 2)}. If the form is submitted, render the div below.*/}
      {isFormSubmitted ? (
        /* div that spans the full width and heigt, centers text and have some margin.*/
        <div className="w-full h-full my-24  text-center ">
          {/* Heading */}
          <h4 className="font-poppins font-bold xs:text-[60px] text-[50px] text-white xs:leading-[56.8px] leading-[46.8px] w-full">
            Thank you for your submission!
          </h4>
          {/* Wrap the button back with the onclick event handler which passes the handle refresh function as an argument */}
          <div onClick={handleRefresh}>
            <ButtonBack styles={"mt-5"} />
          </div>
        </div>
      ) : (
        /*Second expression if the condition is not met.  */
        <div className={`${styles.paddingX}`}>
          {/* Div. Aligns children to the center of the axes, vertically stacks elements and has relative positioning */}
          <div className={`${styles.flexCenter} flex-col relative`}>
            <img
              src={img6}
              alt="industry"
              className="object-cover relative w-full h-[650px]"
              style={{ objectPosition: "center 55%" }}
            />
            {/* remove h-auto if you wanna use any height you want, object cover and also specific dimensions. Object positioning to change the section of image that is being shown*/}

            <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70"></div>
            <div className={`${styles.flexCenter} flex-col absolute`}>
              <h4 className="font-poppins font-bold xs:text-[60px] text-center text-[50px] text-white xs:leading-[56.8px] leading-[46.8px] w-full">
                Elemotion <span className="text-secondary">Quote</span> Request
                Form
              </h4>

              <p className="md:mt-3 mt-10 text-center font-poppins font-bold md:text-[30px] text-[20px] text-white md:leading-[56.8px] leading-[26.8px] w-full">
                Please complete the quote request form below.
              </p>
            </div>
          </div>
          <div
            className={`flex md:flex-row flex-col sm:pt-1 pt-8 sm:pb-20 pb-6`}
          >
            <form
              ref={former}
              onSubmit={handleSubmit}
              action="/submit"
              className="mt-4 md:w-full"
            >
              <div className="flex w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-white text-[22px] font-semibold mb-1"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-2 px-3 rounded h-[50px] text-[18px] text-black bg-white  contact-card"
                  required
                />
              </div>
              <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
                <div className="flex flex-col md:mt-0 mt-8  md:w-[45%] w-full">
                  <label
                    htmlFor="email"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    Email Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
                    required
                  />
                </div>

                <div className="flex flex-col md:mt-0 mt-8  md:w-[45%] w-full">
                  <label
                    htmlFor="phone"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    Phone<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
                    required
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
                <div className="flex flex-col md:mt-0 mt-8  md:w-[30%] w-full">
                  <label
                    htmlFor="org"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    Organization<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="org"
                    name="org"
                    value={formData.org}
                    onChange={handleChange}
                    className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
                    required
                  />
                </div>

                <div className="flex flex-col md:mt-0 mt-8  md:w-[30%] w-full">
                  <label
                    htmlFor="department"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
                  />
                </div>

                <div className="flex flex-col md:w-[30%] w-full md:mt-0 mt-8">
                  <label
                    htmlFor="country"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="py-2 px-3  h-[50px] rounded text-[18px] font-semibold text-black bg-white contact-card"
                  >
                    <option value="" className="font-semibold">
                      Select a country
                    </option>
                    <option value="">Select</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Democratic Republic of the Congo">
                      Democratic Republic of the Congo
                    </option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, North">Korea, North</option>
                    <option value="Korea, South">Korea, South</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>

                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:w-[50%] w-full mt-8">
                <label
                  htmlFor="products"
                  className="text-white text-[22px] font-semibold mb-1"
                >
                  Products<span className="text-red-600">*</span>
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="py-2 px-3 rounded  h-[50px] text-[18px] font-semibold  text-black bg-white contact-card"
                  required
                >
                  <option value="">Select Products</option>
                  <option value="EMG Portable Sensor">
                    EMG Portable Sensor
                  </option>
                  <option
                    value="
32 Channel EMG Detection System"
                  >
                    32 Channel EMG Detection System
                  </option>
                  <option value=" Both">Both</option>

                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="flex flex-col  md:w-[50%] w-full mt-8">
                <label
                  htmlFor="quantity"
                  className="text-white text-[22px] font-semibold mb-1"
                >
                  Quantity<span className="text-red-600">*</span>
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="py-2 px-3 rounded  h-[50px] text-[18px] font-semibold  text-black bg-white contact-card"
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value=" 3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value=" 8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>

                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="flex flex-col mt-8 ">
                <label
                  htmlFor="message"
                  className="text-white text-[22px] font-semibold mb-1"
                >
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="py-2 px-3 rounded max-h-[200px] overflow-y-auto text-[18px] text-black bg-white  contact-card"
                  rows={10}
                  required
                ></textarea>

                <div className="flex flex-col w-full mt-8">
                  <label
                    htmlFor="hear"
                    className="text-white text-[22px] font-semibold mb-1"
                  >
                    How did you hear about us?
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="hear"
                    name="hear"
                    value={formData.hear}
                    onChange={handleChange}
                    className="py-2 px-3 rounded  h-[50px] text-[18px] font-semibold text-black bg-white contact-card"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Newsletter">Newsletter</option>
                    <option value="Website">Website</option>
                    <option value="Customer Referral">
                      {" "}
                      Customer Referral
                    </option>
                    <option value="Other">Other</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <ButtonSubmit styles="mt-5 ml-1" />
            </form>
          </div>
        </div>
      )}
      <div className={`${styles.paddingX}`}>
        <Footer />
      </div>
    </div>
  );
};

export default QuoteForm;
