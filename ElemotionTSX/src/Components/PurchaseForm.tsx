// //Check out contact form

// import { useState } from "react";
// import { ButtonSubmit, Footer, Navbar } from "../Components";
// import styles from "../style";
// import { arduino } from "../resources";
// import { Link } from "react-router-dom";

// // Defines a functional component using the arrow syntax called ContactForm.
// const PurchaseForm = () => {
//   /* Defines state variable called formData and state function called setFormData using the UseState hook. The form data is initiallized with
//   an object containing three properties name, email and message all set to empty strings as their initial values. An object in js is a dictionary in python.
//   The state variables are set before the return statement. By default, the usestate hook returns an array with two elements, current state value and state setter
//   function. By array destructuring, we assign the first element to the formData variable and the second to the setFormData variable. Therefore, an array on the right
//   is being destructured into two variables. */
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     org: "",
//     department: "",
//     country: "",
//     quantity: "",
//     subject: "",
//     hear: "",
//     product: "",
//     options: [],
//     phone: "",
//     address: "",
//     zip: "",
//   });

//   /*This line declares a function handlechange with an event parameter e.
//   This will be used to handle changes to the input field. */
//   const handleChange = (e: any) => {
//     /*SetFormData state setter function is used to update the formData state with a new object.
//     Uses the spread syntax to create a shallow copy of the existing formData object, preserving its previous state.
//     Then it updates the property in the new object that matches the name attribute of the input fielc with the new value of the input field.
//     This way, only the property corresponding to the changed input field is updated, while the other properties remain unchanged. */
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // This line declares a function handleSubmit with an event parameter e. Will handle the form submission when the user submits the form.
//   const handleSubmit = (e: any) => {
//     // This line prevents the default behavior of form submission, which would typically cause the page to reload when the form is submitted.
//     e.preventDefault();

//     // Handle form submission logic here
//     // You can send the form data to a server or perform any required actions

//     // This line logs the current formData object to the console. It will show the values entered in the form, which is useful for debugging purposes.
//     console.log(formData);

//     // This line uses the setFormData state setter function to reset the formData state after the form submission is logged.
//     // It sets the formData object back to its initial state with all properties (name, email, and message) set to empty strings.

//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//       org: "",
//       department: "",
//       country: "",
//       product: "",
//       subject: "",
//       hear: "",
//       quantity: "",
//       options: [],
//       phone: "",
//       address: "",
//       zip: "",
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     const option = e.target.value;
//     const updatedOptions = formData.options.includes(option)
//       ? formData.options.filter((item) => item !== option)
//       : [...formData.options, option];

//     setFormData({
//       ...formData,
//       options: updatedOptions,
//     });
//   };

//   return (
//     <div className="bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter} `}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//           {/* </div>
//       </div> */}

//           <div className={`${styles.flexCenter} flex-col relative`}>
//             <img
//               src={arduino}
//               alt="industry"
//               className="object-cover relative w-full h-[650px]"
//               style={{ objectPosition: "center 55%" }}
//             />
//             <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-80"></div>
//             <div className={`${styles.flexCenter} flex-col absolute`}>
//               <h4 className="font-poppins text-center font-bold xs:text-[60px] text-[50px] text-white xs:leading-[56.8px] leading-[46.8px] w-full">
//                 Elemotion <span className="text-secondary">Order</span> Form
//               </h4>

//               <p className="mt-10 text-center font-normal xs:text-[25px] text-[20px] text-white xs:leading-[30px] leading-[36.8px] w-full">
//                 Please provide the following details to complete your order. We
//                 will get in touch with you to confirm the order and discuss
//                 billing arrangements. If you have any inquiries, feel free to
//                 email us at{" "}
//                 <a href="mailto:sales@elemotion.com" className="text-secondary">
//                   {" "}
//                   sales@elemotion.com
//                 </a>{" "}
//                 Thank you!{" "}
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}

//           <div
//             className={`flex md:flex-row flex-col sm:pt-1 pt-6 sm:pb-20 pb-6`}
//           >
//             <form onSubmit={handleSubmit} className="mt-8 md:w-full">
//               <div className="flex w-full flex-col">
//                 <label
//                   htmlFor="name"
//                   className="text-white text-[22px] font-semibold mb-1"
//                 >
//                   Name<span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="py-2 px-3 rounded h-[50px] text-[18px] text-black bg-white  contact-card"
//                   required
//                 />
//               </div>
//               <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
//                 <div className="flex flex-col md:mt-0 mt-8  w-[45%]">
//                   <label
//                     htmlFor="email"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Email Address<span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col md:mt-0 mt-8  w-[45%]">
//                   <label
//                     htmlFor="phone"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Phone<span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
//                 <div className="flex flex-col md:mt-0 mt-8  w-[45%]">
//                   <label
//                     htmlFor="org"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Organization<span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="org"
//                     name="org"
//                     value={formData.org}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col md:mt-0 mt-8 w-[45%]">
//                   <label
//                     htmlFor="department"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Department
//                   </label>
//                   <input
//                     type="text"
//                     id="department"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                   />
//                 </div>
//               </div>

//               <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
//                 <div className="flex flex-col md:mt-0 mt-8 w-[45%]">
//                   <label
//                     htmlFor="department"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     City<span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="department"
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                   />
//                 </div>

//                 <div className="flex flex-col w-[45%] md:mt-0 mt-8">
//                   <label
//                     htmlFor="country"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Country<span className="text-red-600">*</span>
//                   </label>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="py-2 px-3  h-[50px] rounded text-[18px] font-semibold text-black bg-white contact-card"
//                   >
//                     <option value="" className="font-semibold">
//                       Select a country
//                     </option>
//                     <option value="USA">United States</option>
//                     <option value="Canada">Canada</option>
//                     <option value="UK">United Kingdom</option>
//                     <option value="UK">Hong Kong</option>
//                     <option value="UK">China</option>

//                     {/* Add more countries as needed */}
//                   </select>
//                 </div>
//               </div>
//               <div className="flex md:flex-row flex-col mt-8 w-full justify-between">
//                 <div className="flex flex-col md:mt-0 mt-8  w-[45%]">
//                   <label
//                     htmlFor="add"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Street Address<span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="add"
//                     name="add"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col md:mt-0 mt-8 w-[45%]">
//                   <label
//                     htmlFor="zip"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Zip/Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     id="zip"
//                     name="zip"
//                     value={formData.zip}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] text-black bg-white contact-card"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label
//                   htmlFor="options"
//                   className="text-white mb-5 text-[22px] font-semibold mb-1"
//                 >
//                   Select Products<span className="text-red-600">*</span>
//                 </label>
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Neuroflex"
//                     checked={formData.options.includes("Neuroflex")}
//                     onChange={handleCheckboxChange}
//                     className="h-[25px] w-[25px]"
//                   />
//                   <span className="ml-2">Neuroflex</span>
//                 </label>
//               </div>
//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Arm Motion"
//                     checked={formData.options.includes("Arm Motion")}
//                     onChange={handleCheckboxChange}
//                     className="h-[25px] w-[25px]"
//                   />
//                   <span className="ml-2">Arm Motion</span>
//                 </label>
//               </div>
//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="ElderSense"
//                     checked={formData.options.includes("ElderSense")}
//                     onChange={handleCheckboxChange}
//                     className="h-[25px] w-[25px]"
//                   />
//                   <span className="ml-2">ElderSense</span>
//                 </label>
//                 <div className="flex flex-col w-[50%] mt-8">
//                   <label
//                     htmlFor="category"
//                     className="text-white text-[22px] font-semibold mb-1"
//                   >
//                     Quantity<span className="text-red-600">*</span>
//                   </label>
//                   <select
//                     id="quantity"
//                     name="quantity"
//                     value={formData.quantity}
//                     onChange={handleChange}
//                     className="py-2 px-3 rounded  h-[50px] text-[18px] font-semibold  text-black bg-white contact-card"
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value=" 3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>

//                     {/* Add more options as needed */}
//                   </select>
//                 </div>
//               </div>
//               <div className="flex justify-start items-start flex-col w-[50%] mt-12">
//                 <label
//                   htmlFor="options"
//                   className="text-white mb-5 text-[22px] font-semibold mb-1"
//                 >
//                   Preferred Method Of Payment
//                   <span className="text-red-600">*</span>
//                 </label>
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Credit/Debit Card"
//                     required
//                     checked={formData.options.includes("Credit/Debit Card")}
//                     onChange={handleChange}
//                     className="h-[25px] w-[25px]"
//                   />
//                   <span className="ml-2">Credit/Debit Card</span>
//                 </label>
//               </div>
//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Paypal"
//                     checked={formData.options.includes("Paypal")}
//                     required
//                     onChange={handleChange}
//                     className="h-[25px] w-[25px]"
//                   />
//                   <span className="ml-2">Paypal</span>
//                 </label>
//               </div>
//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Bank Transfer"
//                     checked={formData.options.includes("Bank Transfer")}
//                     onChange={handleChange}
//                     required
//                     className="h-[25px] w-[25px] rounded-full"
//                   />
//                   <span className="ml-2">Bank Transfer</span>
//                 </label>
//               </div>

//               <div className="flex justify-start items-start flex-col w-[50%] mt-8">
//                 <label className="flex justify-center items-center text-[25px] font-semibold text-dimWhite">
//                   <input
//                     type="checkbox"
//                     name="options"
//                     value="Terms and Conditions"
//                     checked={formData.options.includes("Terms and Conditions")}
//                     onChange={handleCheckboxChange}
//                     required
//                     className="h-[25px] w-[25px] rounded-full"
//                   />
//                   <span className="ml-2">
//                     I agree with the Elemotion's{" "}
//                     <Link
//                       to="/terms-and-conditions"
//                       target="_blank"
//                       className="text-secondary"
//                     >
//                       Terms and Conditions
//                     </Link>
//                   </span>
//                 </label>
//               </div>

//               <ButtonSubmit styles="mt-5 ml-1" />
//             </form>
//           </div>

//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PurchaseForm;

import React from "react";

const PurchaseForm = () => {
  return <div>PurchaseForm</div>;
};

export default PurchaseForm;
