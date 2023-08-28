import {
  man,
  wifi,
  arduino,
  innovate,
  versatility,
  personalization,
  channel,
  detection,
  portable,
  xiaojun,
  huahui,
  ngoni,
  stella,
  woman,
  person1,
  person2,
  person3,
  person4,
  person5,
  princeton,
  HKU,
  HKSTP,
  Yale,
  MIT,
  chip,
  circuitboard,
  testtubes,
  videosensor,
  eng,
  law,
  huk,
  plasma,
  phone1,
  mail1,
  metal,
  social,
  media,
  battery,
  arm,
  lightning,
  waveform,
  innovation,
  integrity,
  collaboration,
  winner,
  scientist,
  coding,
  sensor,
  call,
  microscope,
  artificial,
  technology,
  tech,
  industry,
  email,
  book,
  play,
  document,
  research,
  training,
  download,
  question,
  guide,
  feedbackicon,
  signal,
  HKUmed,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  skyscrappers,
  thirdprize2,
  thirdprize4,
  thirdprize3,
  thirdprize1,
  event1,
  event2,
  dreamon3,
  dreamon2,
  dreamon1,
  merit2,
  merit1,
  merit3,
  merit4,
  merit5,
  tsssu22,
  tsssu23,
  chunhui,
  lizzie,
  lin,
  health1,
  health2,
  health3,
  health4,
  health5,
  sport1,
  sport2,
  sport3,
  sport4,
  sport5,
  vr5,
  augmentedreality,
  vr4,
  vr3,
  qu,
  yu,
  xiaoojun,
  yong,
  wendy,
  img9,
  liang,
  wang,
  channel32,
  userfriendly,
  highsignal,
  safety,
  wireless,
  comingsoon,
  matrix,
} from "../resources";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
    subpage: [],
  },
  {
    id: "products",
    title: "Products",
    subpage: [
      { name: "Products Page", link: "/products" },
      { name: "eMyoFlex Prime", link: "/products/eMyoFlex-Prime" },
      {
        name: "MuscleMatrix 32X",
        link: "/products/MuscleMatrix-32X",
      },
    ],
  },
  // {
  //   id: "support",
  //   title: "Support",
  //   subpage: [
  //     { name: "SUPPORT PAGE", link: "/support" },
  //     { name: "Get In Touch", link: "/about" },
  //     { name: "FAQs", link: "/support/FAQs" },
  //     // { name: "User Manuals", link: "/support/User Manuals" },
  //     // { name: "Technical Documents", link: "/support/Technical Documents" },
  //     { name: "Send Us A Message", link: "/about" },
  //     // { name: "Firmware Downloads", link: "/support/Firmware Downloads" },
  //     // {
  //     //   name: "EleMotion Patents and Publications",
  //     //   link: "/support/EleMotion Patents and Publications",
  //     // },
  //     { name: "Research Papers", link: "/support/Research Papers" },
  //     // { name: "Video Tutorials", link: "/about" },
  //   ],
  // },
  {
    id: "technology",
    title: "Technology",
    subpage: [
      // {name: 'TECHNOLOGY PAGE', link: "/technology"},
      // {name: 'Tech 1', link: "/technology/tech-1"},
      // {name: 'Tech 2', link: "/technology/tech-2"},
      // {name: 'Tech 3', link: "/technology/tech-3"},
      // {name: 'Tech 4', link: "/technology/tech-4"}
    ],
  },
  {
    id: "applications",
    title: "Applications",
    subpage: [],

    // subpage: [
    //   {name: 'Elderly Assistive Care', link: "/applications/#elderly_care_assistive_technology"},
    //   {name: 'Sports Analysis', link: "/applications/#sports_performance_analysis"},
    //   {name: 'Muscle Fatigue Tracking', link: "/applications/#muscle_fatigue_detection" },
    //   {name: 'Augmented Reality', link: "/applications/#augmented_reality"}],
  },
  {
    id: "news",
    title: "News",
    subpage: [],
  },
  {
    id: "about",
    title: "About",
    subpage: [
      { name: "Our Company", link: "/about" },
      { name: "Our Team", link: "/about/ourteam" },
    ],
  },
  {
    id: "support",
    title: "Support",
    subpage: [
      { name: "Support Page", link: "/support" },
      { name: "Get In Touch", link: "/about" },
      { name: "FAQs", link: "/support/Frequently Asked Questions" },
      // { name: "User Manuals", link: "/support/User Manuals" },
      // { name: "Technical Documents", link: "/support/Technical Documents" },
      { name: "Send Us A Message", link: "/about" },
      // { name: "Firmware Downloads", link: "/support/Firmware Downloads" },
      // {
      //   name: "EleMotion Patents and Publications",
      //   link: "/support/EleMotion Patents and Publications",
      // },
      { name: "Research Papers", link: "/support/Research Papers" },
      // { name: "Video Tutorials", link: "/about" },
    ],
  },
  {
    id: "contact us",
    title: "Contact Us",
    subpage: [],
  },
];
export const mobilenavLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "technology",
    title: "Technology",
  },
  {
    id: "applications",
    title: "Applications",
  },
  {
    id: "news",
    title: "News",
  },
  {
    id: "about",
    title: "Our Company",
  },

  {
    id: "about/ourteam",
    title: "Our Team",
  },
  {
    id: "support",
    title: "Support",
  },
  {
    id: "contact us",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: wifi,
    title: "Wireless Transmission",
    content:
      "Effortless wireless transmission for real-time muscle signal insights and analysis through the EleMotion app",
  },
  {
    id: "feature-2",
    icon: signal,
    title: "Superior Signal-to-Noise Ratio",
    content:
      "Capture and analyze muscle signals with high sampling rates and exceptional resolution.",
  },
  {
    id: "feature-3",
    icon: waveform,
    title: "Real-Time Muscle Activity Monitoring",
    content:
      "Monitor multiple muscles or muscle groups simultaneously with independent channel amplification",
  },
  {
    id: "feature-2",
    icon: feedbackicon,
    title: "Effective Personalized Feedback",
    content:
      "Experience instantaneous feedback through on-sensor processing and the EleMotion visualization app.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "Innovation propels us forward. EMG sensors drive the change.",
    name: "Sun Chuying",
    title: "Chief Executive Officer",
    img: stella,
  },
  {
    id: "feedback-2",
    content: "EMG technology empowers lives. Our passion fuels its growth.",
    name: "Wang Xiaojun ",
    title: "Chief Technology Officer",
    img: xiaoojun,
  },
  {
    id: "feedback-3",
    content:
      "Biotech breakthroughs redefine possibilities. EMG chips pioneer the way.",
    name: "Yu Zhige",
    title: "Chief Financial Officer",
    img: yu,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Awards",
    value: "7+",
  },
  {
    id: "stats-2",
    title: "Patents Granted",
    value: "2+",
  },
  {
    id: "stats-3",
    title: "Pioneering Research Collaborations",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "",
      },
      {
        name: "Products",
        link: "products",
      },
      {
        name: "Support",
        link: "support",
      },
      {
        name: "Technology",
        link: "technology",
      },
      {
        name: "Applications",
        link: "applications",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "News",
        link: "news",
      },
      {
        name: "Our Company",
        link: "about",
      },
      {
        name: "Our Team",
        link: "about/ourteam",
      },
      {
        name: "Contact Us",
        link: "contact us",
      },
      {
        name: "Terms & Services",
        //link: "https://www.hoobank.com/terms-and-services/",     <Link to={`/news/${id}`} className="link-style">
        // link: "terms-and-conditions",
        link: "contact us",
      },
    ],
  },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "contact us",
      },
      {
        name: "Become a Partner",
        link: "contact us",
      },
    ],
  },
];

export const socialMedia = [
  // {
  //   id: "social-media-1",
  //   icon: instagram,
  //   link: "https://www.instagram.com/",
  // },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/elemotionhk",
  },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/elemotion/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const sponsors = [
  {
    id: "sponsor-1",
    logo: HKUmed,
  },
  {
    id: "sponsor-2",
    logo: HKSTP,
  },
  {
    id: "sponsor-3",
    logo: eng,
  },
];
export const products = [
  {
    id: "product-1",
    img: img9,
    title: "eMyoFlex Prime",
    content:
      "Use Portable Electromyography(EMG) sensor for muscle activity detection.",
    link: "/products/eMyoFlex-Prime",
    main: "/products",
  },
  {
    id: "product-2",
    img: matrix,
    title: "MuscleMatrix 32X",
    content:
      "A comprehensive 32-channel EMG detection system that is able to detect high-density EMG signal for clinical neuromuscular condition assessment.",
    link: "/products/MuscleMatrix-32X",
    main: "/products",
  },
];

export const values = [
  {
    id: "value-1",
    icon: integrity,
    title: "Integrity",
    content:
      "Embracing unwavering ethical standards as the cornerstone of every decision and action.",
  },
  {
    id: "value-2",
    icon: collaboration,
    title: "Collaboration",
    content:
      "Unleashing the power of synergy by fostering seamless teamwork and collective expertise.",
  },
  {
    id: "value-3",
    icon: innovation,
    title: "Innovation",
    content:
      "Pioneering groundbreaking solutions that redefine what is achievable and drive transformative progress.",
  },
];

export const support = [
  {
    id: "support-1",
    icon: call,
    title: "Get In Touch",
    content: "+852 6998 2403",
  },

  {
    id: "support-2",
    icon: question,
    title: "Frequently Asked Questions",
    content: "Quick answers to common questions and concerns.",
  },
  // {
  //   id: "support-3",
  //   icon: guide,
  //   title: "User Manuals",
  //   content:
  //     "Comprehensive guides for easy navigation and optimal use of our products.",
  // },
  // {
  //   id: "support-4",
  //   icon: document,
  //   title: "Technical Documents",
  //   content:
  //     "In-depth technical resources for a deeper understanding of our products and technologies.",
  // },
  {
    id: "support-5",
    icon: email,
    title: "Send Us A Message",
    content: "Connect with us for inquiries, support, or collaboration.",
  },
  // {
  //   id: "support-6",
  //   icon: download,
  //   title: "Firmware Downloads",
  //   content: "Access the latest firmware updates for Elemotion Products",
  // },
  // {
  //   id: "support-7",
  //   icon: book,
  //   title: "EleMotion Patents and Publications",
  //   content: "Patents issued out to Elemotion Technology Limited",
  // },
  {
    id: "support-8",
    icon: research,
    title: "Research Papers",
    content:
      "Explore informative research papers for valuable insights and industry knowledge. ",
  },
  // {
  //   id: "support-9",
  //   icon: play,
  //   title: "Video Tutorials",
  //   content:
  //     "Learn and master with our comprehensive video tutorials for easy understanding.",
  // },
];

export const news = [
  {
    id: "news-1",
    icon: [{ img: chunhui }],
    title: "“Chun hui” Cup, Excellence Awards, 2022.",
    content: [
      "EleMotion Technology Limited is delighted to announce that we have been awarded the Excellence Award in the High-Tech Category at the 17th 'Chunhui Cup' Innovation and Entrepreneurship Competition for Chinese Overseas Students. This prestigious competition, which aims to inspire innovation and foster entrepreneurship among Chinese students studying abroad, is a highly esteemed platform for budding businesses. We are extremely honored to be recognized for our cutting-edge technology and innovative solutions, marking a significant milestone in our journey.",
    ],
  },
  {
    id: "news-2",
    icon: [{ img: dreamon3 }, { img: dreamon2 }, { img: dreamon1 }],
    title:
      "The Excellent Pitching in the ”DreamOn” HKU Innovation & Entrepreneurship Day 2023. ",
    content: [
      "We are delighted to announce that EleMotion Technology Limited has been honored with the Excellent Pitching award at the 'DreamOn' HKU Innovation & Entrepreneurship Day. This accolade showcases our potential and ability to present our innovative solutions with efficacy and impact.",

      "The 'DreamOn' HKU Innovation & Entrepreneurship Day is an esteemed platform designed to celebrate and foster entrepreneurial spirit among the incubated startups at The University of Hong Kong (HKU). Standing out among ten other exceptional HKU-incubated companies, this award underlines our team's aptitude for effectively conveying our value proposition and demonstrating the potential of our technological solutions.",
      " Our team's compelling presentation skill, combined with our innovative technology, undoubtedly made a significant impact on the judges and audience alike. We are incredibly proud of this achievement, as it speaks volumes about the passion, dedication, and hard work our team puts into every aspect of our operation.",
    ],
  },
  {
    id: "news-3",
    // icon: [{ img: merit3 }, { img: merit1 }, { img: merit2 }, { img: merit5 }],
    // icon: [{ img: merit1 }, { img: merit5 }],
    icon: [
      { img: thirdprize1 },
      { img: thirdprize2 },
      { img: thirdprize4 },
      { img: thirdprize3 },
    ],
    title:
      "The 3rd Prize in the 8th Hong Kong University Student Innovation and Entrepreneurship Competition ",
    content: [
      "EleMotion Technology Limited is proud to announce that we have been awarded the 3rd Prize in the 8th Hong Kong University Student Innovation and Entrepreneurship Competition. This recognition not only honors our innovative technological solutions but also underscores the strength of our team's work and our commitment to pioneering advancements in our field.",
      "The Hong Kong University Student Innovation and Entrepreneurship Competition is a prestigious platform that brings together the brightest minds from universities across the region. It aims to foster a culture of innovation and entrepreneurship among students and to highlight their outstanding contributions in these areas. Being acknowledged with the 3rd Prize amidst a pool of remarkable competitors is a testament to our team's hard work, creativity, and unwavering dedication.",
    ],
  },
  // {
  //   id: "news-4",
  //   icon: [{ img: event1 }, { img: event2 }],
  //   title:
  //     "Exploring the Intricacies of Circuit Boards: An In-Depth Look at the Backbone of Modern Electronics",
  //   content: [
  //     "Circuit boards are an essential component of modern electronics, serving as the backbone of devices that power our daily lives. While often taken for granted, these intricate pieces of technology are critical to the functioning of everything from smartphones to cars and even space shuttles. In this essay, we will delve into the intricacies of circuit boards and explore the key players driving innovation in this field.",
  //     "The field of circuit board design and manufacturing is a highly specialized one, with experts working tirelessly to push the boundaries of what is possible. One of the key players in this field is Andrew Grove, a pioneer in the semiconductor industry who co-founded Intel Corporation and played a crucial role in the development of the microprocessor. Another notable figure is Steve Wozniak, who co-founded Apple Computer and was instrumental in the design of the company's first products, including the Apple I and II.",
  //     "Today, circuit board design and manufacturing continue to evolve at a rapid pace, with new materials, techniques, and technologies making it possible to create smaller, faster, and more powerful devices than ever before. From medical implants to self-driving cars, the potential applications of circuit board technology are virtually limitless. As we continue to explore the intricacies of these essential components, we can look forward to even more exciting innovations that will shape our world for generations to come.",
  //   ],
  // },
  {
    id: "news-4",
    icon: [{ img: event1 }, { img: event2 }],

    title: "iDM2 Micro-Electronics Node (MEN) talent matching event ",
    content: [
      "We are delighted to report that EleMotion Technology Limited recently attended the inaugural iDM2 Micro-Electronics Node (MEN) talent matching event on 13th February 2023, at the Hong Kong Science and Technology Parks (HKSTP). This unique event brought together a plethora of high-calibre engineering talents from Dongguan, who have earned their Bachelor's, Master's, or Ph.D. degrees from top universities across Mainland China.",

      "At the event, our CTO, Xiaojun, had the privilege of introducing EleMotion Technology Limited to the attendees. His presentation, detailing our vision, mission, and ongoing projects, sparked significant interest among the talented attendees. The engineers' enthusiastic response to our work is a testament to the compelling and innovative nature of our initiatives.",
      "In addition to the presentation, we also engaged in deep discussions and interactive sessions with these talented individuals. This gave us an invaluable opportunity to understand their capabilities better, discuss potential collaborations, and gauge how their skills and expertise could contribute to our projects.",
      "We are thrilled with the outcome of the event, which provided a platform to connect with potential future collaborators and further reinforce our commitment to technological advancement. Our participation underscored our dedication to fostering connections within the industry and our efforts to remain at the cutting edge of technology.",
    ],
  },
  // {
  //   id: "news-6",
  //   icon: [{ img: artificial }, { img: scientist }, { img: scientist }],
  //   title:
  //     "Harnessing the Power of Artificial Intelligence for Innovation and Progress",
  //   content: [
  //     "Artificial intelligence (AI) has emerged as a powerful tool for driving innovation and progress across a wide range of fields and industries. By leveraging advanced algorithms and machine learning techniques, researchers and developers are able to analyze vast amounts of data and gain insights that were previously impossible to attain. ",

  //     "From healthcare to finance to transportation, AI is transforming the way we live and work, making our lives easier, more efficient, and more productive. As we continue to harness the power of AI, we can look forward to even more exciting innovations that will shape the course of human history for generations to come.",
  //   ],
  // },
  {
    id: "news-5",
    icon: [{ img: tsssu23 }],
    title:
      "TSSSU@HKU 2023-2024: Technology Startup Support Scheme for Universities at HKU ",
    content: [
      "We are thrilled to announce that EleMotion Technology Limited has once again been recognized with project funding under the Technology Startup Support Scheme for Universities (TSSSU) at The University of Hong Kong (HKU) for the 2023-2024 academic year.",

      "This consecutive acknowledgement from the TSSSU not only signifies our unwavering commitment to technological innovation, but also underscores the effectiveness of our solutions and the strength of our team's work. We would like to extend our heartfelt gratitude to HKU and the TSSSU for their continued support and belief in our mission.",
    ],
  },
  {
    id: "news-6",
    icon: [{ img: tsssu22 }],
    title:
      "TSSSU@HKU 2022-2023: Technology Startup Support Scheme for Universities at HKU ",
    content: [
      "We are pleased to announce that EleMotion Technology Limited has been awarded project funding under the Technology Startup Support Scheme for Universities (TSSSU) at The University of Hong Kong (HKU) for the 2022-2023 academic year. This grant is a significant milestone for us, further strengthening our commitment to innovate and advance in the technological field.",
    ],
  },
  {
    id: "news-7",
    icon: [{ img: merit5 }],
    title:
      "The Merit Prize in the 9th Hong Kong University Student Innovation and Entrepreneurship Competition 2023",
    content: [
      "We are thrilled to share that EleMotion Technology Limited has once again demonstrated its innovative prowess by securing the Merit Prize in the 9th Hong Kong University Student Innovation and Entrepreneurship Competition.",
    ],
  },
];
export const questions = [
  {
    id: "question-1",
    classification: "general",
    img: battery,
    question: "What is an EMG chip, and how does it work?",
    answer:
      " An EMG chip, also known as an electromyography chip, is a microelectronic device that measures and records electrical signals produced by skeletal muscles. It uses electrodes to detect and amplify these signals, which can then be analyzed for various purposes such as muscle activity monitoring or prosthetic control.",
  },
  {
    id: "question-2",
    classification: "general",
    img: battery,
    question: "What are the potential applications of EMG chips?",
    answer:
      " EMG chips have a wide range of applications, including biomedical research, physical therapy, sports performance analysis, human-computer interaction, and assistive technologies. They can be used for muscle rehabilitation, gesture recognition, prosthetic control, ergonomic assessments, and more.",
  },
  {
    id: "question-3",
    img: battery,
    classification: "general",
    question: "Can the EMG chip be used for real-time muscle monitoring?",
    answer:
      " Yes, EMG chips are designed to provide real-time muscle monitoring capabilities. They capture electrical signals generated by muscles and can transmit or process the data in real-time, allowing for immediate analysis and feedback.",
  },
  {
    id: "question-4",
    img: battery,
    classification: "troubleshooting",
    question: "How accurate is the EMG chip in capturing muscle activity?",
    answer:
      " The accuracy of an EMG chip depends on various factors, including the quality of the chip itself, electrode placement, signal processing algorithms, and noise reduction techniques. High-quality EMG chips can provide accurate and reliable muscle activity measurements when used correctly.",
  },
  {
    id: "question-5",
    classification: "troubleshooting",
    img: battery,
    question:
      "What kind of data can be obtained from the EMG chip, and how can it be analyzed?",
    answer:
      "EMG chips capture raw electromyographic signals, which can be further processed to extract valuable information such as muscle activation patterns, timing, amplitude, and frequency characteristics. This data can be analyzed using signal processing techniques, machine learning algorithms, or custom software to gain insights into muscle performance, fatigue, coordination, or to control external devices.",
  },
  {
    id: "question-6",
    classification: "elemotion_sensor_setup",
    img: battery,
    question:
      "What are the recommended steps for setting up the Elemotion sensor?",
    answer:
      "The setup process for the Elemotion sensor involves connecting the sensor to the appropriate device, installing the required software or app, and following the instructions provided in the user manual or setup guide.",
  },
  {
    id: "question-7",
    classification: "elemotion_sensor_setup",
    img: battery,
    question:
      "Are there any specific system requirements for using the Elemotion sensor?",
    answer:
      "Yes, to use the Elemotion sensor, your device should meet certain system requirements such as minimum operating system version, Bluetooth compatibility, and available storage space. Please refer to the product documentation for detailed system requirements.",
  },
  {
    id: "question-8",
    classification: "ordering",
    img: battery,
    question:
      "What is the process for placing an order for the Elemotion sensor?",
    answer:
      "To place an order for the Elemotion sensor, you can visit our website, add the product to your cart, and proceed to checkout. Alternatively, you can contact our sales team and provide them with the necessary details to place the order.",
  },
  {
    id: "question-9",
    classification: "ordering",
    img: battery,
    question:
      "What payment options are available for ordering the Elemotion sensor?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and online payment platforms. During the checkout process, you will be presented with the available payment options to choose from.",
  },
  {
    id: "question-10",
    classification: "firmware_updates",
    img: battery,
    question: "How can I update the firmware of the Elemotion sensor?",
    answer:
      "To update the firmware of the Elemotion sensor, you will need to download the latest firmware version from our official website or through the dedicated software or app. Follow the provided instructions to install the firmware update on the sensor.",
  },
  {
    id: "question-11",
    classification: "firmware_updates",
    img: battery,
    question:
      "Is it necessary to regularly update the firmware of the Elemotion sensor?",
    answer:
      "Yes, keeping the firmware of your Elemotion sensor up to date is important to ensure optimal performance, compatibility with new software features, and to address any known issues or vulnerabilities. We recommend checking for firmware updates periodically and installing them as necessary.",
  },
  {
    id: "question-12",
    classification: "training",
    img: battery,
    question:
      "Do you provide training resources for using the Elemotion sensor?",
    answer:
      "Yes, we offer various training resources to help users effectively utilize the Elemotion sensor. These resources include user manuals, video tutorials, online documentation, and technical support. Please visit our website or contact our support team for more information on available training resources.",
  },
  {
    id: "question-13",
    classification: "training",
    img: battery,
    question:
      "Can I request personalized training or demonstrations for the Elemotion sensor?",
    answer:
      "Yes, we can provide personalized training or demonstrations for the Elemotion sensor upon request. Please reach out to our sales or support team to discuss your specific training needs and to arrange a personalized session.",
  },
  {
    id: "question-14",
    classification: "troubleshooting",
    img: battery,
    question:
      "What should I do if I encounter connectivity issues with the Elemotion sensor?",
    answer:
      "If you are experiencing connectivity issues with the Elemotion sensor, try the following troubleshooting steps: 1) Ensure that the sensor and your device are within the recommended range and have a clear line of sight. 2) Check that Bluetooth is enabled on your device and that it is not connected to any other conflicting devices. 3) Restart both the sensor and your device. If the issue persists, please contact our support team for further assistance.",
  },
  {
    id: "question-15",
    classification: "training",
    img: battery,
    question:
      "What should I do if the battery life of the Elemotion sensor is shorter than expected?",
    answer:
      "If you are experiencing shorter battery life than expected with the Elemotion sensor, try the following steps: 1) Ensure that the sensor is fully charged before use. 2) Minimize the use of power-intensive features or functionalities that may drain the battery quickly. 3) If the issue persists, consider replacing the battery with a new one following the instructions provided in the user manual or contact our support team for further assistance.",
  },
  {
    id: "question-16",
    classification: "elemotion_sensor_setup",
    img: battery,
    question:
      "Is there a user manual available for the Elemotion sensor setup?",
    answer:
      "Yes, we provide a comprehensive user manual that guides you through the setup process of the Elemotion sensor. The manual includes step-by-step instructions, illustrations, and troubleshooting tips to ensure a smooth setup experience.",
  },
  {
    id: "question-17",
    classification: "elemotion_sensor_setup",
    img: battery,
    question: "Can I connect multiple Elemotion sensors to the same device?",
    answer:
      "Yes, it is possible to connect multiple Elemotion sensors to the same device, depending on the capabilities of your device and the software or app you are using. Please refer to the documentation or contact our support team for specific instructions on connecting multiple sensors.",
  },
  {
    id: "question-18",
    classification: "ordering",
    img: battery,
    question:
      "How long does it take to process and ship an order for the Elemotion sensor?",
    answer:
      "Once your order for the Elemotion sensor is placed and confirmed, we strive to process and ship it within [X] business days. The actual delivery time may vary depending on the shipping method and your location. You will receive a shipping confirmation with tracking details once your order is dispatched.",
  },
  {
    id: "question-19",
    classification: "ordering",
    img: battery,
    question: "Can I cancel or modify my order for the Elemotion sensor?",
    answer:
      "If you need to cancel or modify your order for the Elemotion sensor, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that order cancellations or modifications may not be possible if the order has already been processed or shipped.",
  },
  {
    id: "question-20",
    classification: "ordering",
    img: battery,
    question:
      "Are there any discounts or promotions available for ordering multiple Elemotion sensors?",
    answer:
      "We occasionally offer discounts or promotions for bulk orders or multiple purchases of the Elemotion sensor. Please check our website or contact our sales team to inquire about any available discounts or special offers for ordering multiple sensors.",
  },
];

export const faq = [
  {
    id: "general",
    icon: document,
    title: "General",
  },
  {
    id: "troubleshooting",
    icon: email,
    title: "Troubleshooting",
  },
  {
    id: "elemotion_sensor_setup",
    icon: download,
    title: "EleMotion Sensor Setup ",
  },
  {
    id: "ordering",
    icon: book,
    title: "Ordering",
  },
  {
    id: "firmware_updates",
    icon: research,
    title: "Firmware Updates",
  },
  {
    id: "training",
    icon: play,
    title: "Training",
  },
];

export const researching = [
  {
    id: "1",
    Year: "2023",
    Publication: "Small",
    Title:
      "Synergetic Monitoring of both Physiological Pressure and Epidermal Biopotential Based on a Simplified on-Skin-Printed Sensor Modality",
    Authors: "Song Y, Ren W, Zhang Y, et al.",
    Link: "https://doi.org/10.1002/smll.202303301",
  },
  {
    id: "2",
    Year: "2023",
    Publication: "Science Advances",
    Title:
      "At-home wireless sleep monitoring patches for the clinical assessment of sleep quality and sleep apnea    ",
    Authors: "Kwon S, Kim H S, Kwon K, et al.",
    Link: "https://doi.org/10.1126/sciadv.adg9671",
  },

  {
    id: "3",
    Year: "2022",
    Publication: "ACS Nano",
    Title:
      "An All-in-One, Bioderived, Air-Permeable, and Sweat-Stable MXene Epidermal Electrode for Muscle Theranostics   ",
    Authors: "Song Dekui, et al.",
    Link: "https://doi.org/10.1021/acsnano.2c07646",
  },
  {
    id: "4",
    Year: "2022",
    Publication: "Nano-Micro Letters",
    Title:
      "High-Performance Flexible Microneedle Array as a Low-Impedance Surface Biopotential Dry Electrode for Wearable Electrophysiological Recording and Polysomnography  ",
    Authors: "Li Junshi, et al.",
    Link: "https://doi.org/10.1007/s40820-022-00870-0    ",
  },
  {
    id: "5",
    Year: "2021",
    Publication: "Microsystems & Nanoengineering",
    Title:
      "Miura-ori structured flexible microneedle array electrode for biosignal recording",
    Authors: "Hou Yue, et al.",
    Link: "https://doi.org/10.1038/s41378-021-00259-w    ",
  },
];

export const coreteam = [
  {
    id: "1",
    year: "2021",
    name: "Sun Chuying",
    img: stella,
    position: "CEO",
    bullet1: "Ph.D. in Mechanical Engineering, HKU ",
    bullet2: "6+ Years in Nanofabrication and Nanoelectronics",
    bullet3: "Recipient of the HK PhD Fellowship Schemer",
    bullet4: "National Second-Level Athlete",
    content1:
      "Dr. Sun obtained her Ph.D. degree in Mechanical Engineering from the University of Hong Kong in 2023, having worked alongside Prof. Wendi Li in the field of nanofabrication and nanoelectronics for more than 5 years. Their collaborative efforts aimed to enhance electronics performance through cutting-edge nanofabrication techniques.",
    content2:
      "With her entrepreneurial spirit, Dr. Sun has received several awards in the innovation and entrepreneurship competitions in China, demonstrating her commitment to translating research into commercial products.  Beyond academia, Dr. Sun is a professional table tennis athlete, with titles including First Runner-up in the DHS-Luneng Cup National Table Tennis Competition. Today, Dr. Sun employs her diverse skill set to lead EleMotion Technology Limited, guiding the company in its mission to revolutionize muscle activity detection through the development of advanced EMG sensors.",
    linked_in: "https://www.linkedin.com/in/chuying-sun-516167160/",
  },
  {
    id: "2",
    year: "2021",
    name: "Wang Xiaojun",
    img: wang,
    position: "CTO",
    bullet1: "Ph.D. in Orthopaedics and Traumatology, HKU",
    bullet2: "7+ years in Clinical Electrophysiology & Neural Engineering",
    bullet3: "Enthusiast in Mechanical Keyboard and Hiking",
    bullet4: "Well-recognized Cook for Chinese Food",
    content1:
      "Dr. Wang obtained his Ph.D. degree from Dept. of Orthopaedics and Traumatology, LKS Faculty of Medicine, University of Hong Kong in 2023, and he has worked alongside Prof. Yong Hu in the field of clinical electrophysiology and neural engineering for more than 5 years. During Xiaojun’s Ph.D. study, he worked with Prof. Hu to develop functional prosthesis hand powered by artificial intelligent aims to help upper limb amputee for rehabilitation and daily applications.",
    content2:
      "Worked with CEO, Chuying, they have received several awards in the innovation and entrepreneurship competitions in China, demonstrating his ability in pitching and road show. Beyond academic, Dr. Wang is a well-recognized cook in Chinse food and he established the cooking club in the Chi Sun College, one of favorite residual colleges in HKU. Today, Xiaojun applies his discipline knowledge and experience to drive EleMotion Technology Limited, providing convenient and accurate muscle activity tracking and training suggestion for rehabilitation centers, the care centers and sport teams.",
    linked_in: "https://www.linkedin.com/in/xiaojun-wang-5b2016289/",
  },
  {
    id: "3",
    year: "2021",
    name: "Yu Zhige",
    img: yu,
    position: "CFO",
    bullet1: "Ph.D. in Accounting, HKU",
    bullet2: "            Extensive Experience in Primary Market Incubation",
    bullet3:
      "Expertise in Investment Decision-Making and Financial Planning Management",
    bullet4: "Skilled in Commercial Negotiations",
    content1: "",
    content2: "",
    linked_in: "https://www.linkedin.com/in/harry-yu-8626b2261/",
  },
  {
    id: "4",
    year: "2021",
    name: "Liang Huahui",
    img: liang,
    position: "R&D Engineer",
    bullet1: "              Master in Mechanical Engineering, HKU",
    bullet2:
      "              Expertise in Wearable Electrodes Development and Advanced Materials",
    bullet3: "Extensive Experience in Project Management",
    bullet4: "Contributed to the Wearable Electrode R&D at EleMotion",
    content1:
      "Huahui serves as an R&D engineer at EleMotion, with his main work area focusing on the design, fabrication, and manufacturing of micro-structured electrodes. During his academic years, he managed to independently complete multiple engineering projects, such as a “Reverse 3D Scanning Printer” “Drone Crash-Proof Device”, and a “High-Altitude Curtain Cleaning Robot.” ",
    content2:
      "Given his technical capabilities, coupled with the systemic work experience he gained during his internships, his goal is to build wireless, wearable, and intelligent EMG monitoring devices.",
    linked_in: "https://www.linkedin.com/in/lianghuahui/?originalSubdomain=cn",
  },
  {
    id: "5",
    year: "2021",
    name: "Qu Zhan",
    img: qu,
    position: "Innovative Wearable & Smart Textile Designer",
    bullet1: "Master at the Royal College of Art",
    bullet2: "2023 Recipient of PolyU Ph.D. Scholarship in HK.",
    bullet3: "2022 Recipient of Royal College of Art Innovation Fund in UK",
    bullet4:
      "2021 Bronze Award of 'Yinger International Fashion Design Prize' in China.",
    content1:
      "Zhan is an interdisciplinary designer who focuses on combining the aesthetic, materials and programmable properties (interactive algorithm) of smart textiles for wearables that support inclusivity. She seeks to expand the dimensions of movement and explore the effect on body sensations and develop user-friendly wearable electronic textiles for performance, well-being and healthcare applications. ",
    content2:
      "Zhan aims to expand access to wearable prototypes, through her work on embedded actuation whilst adopting new technologies to broaden people’s sensations. ",
    linked_in: "",
  },
];
export const advisors = [
  {
    id: "1",
    year: "2021",
    name: "Prof. Li Wen-Di",
    img: wendy,
    position: "Senior Advisor",
    bullet1:
      "Associate Director, Institute of Nanotechnology, Zhejiang Institutes of Science and Technology, HKU  ",
    bullet2:
      "Tenured Associate Professor,Department of Mechanical Engineering, HKU",
    content1:
      "The team is dedicated to realizing new device structures and improving device performance through innovations in micro- and nanofabrication technologies.",
  },
  {
    id: "1",
    year: "2021",
    name: "Prof. Hu Yong",
    img: yong,
    position: "Senior Advisor",
    bullet1:
      "Director, Laboratory of Neuroengineering and Clinical Electrophysiology, HKU  ",
    bullet2:
      "Tenured Associate Professor, Department of Mechanical Engineering, HKU",
    content1:
      "The team is dedicated to the application of physiological electrical signals for intraoperative detection and postoperative rehabilitation.",
  },
];
export const interns = [
  {
    id: "1",
    year: "2023",
    name: "Ngonidzashe Maposa",
    img: ngoni,
    position: "Software Intern",
    major: "Computer Engineering",
    university: "University of Hong Kong",
    linked_in: "https://www.linkedin.com/in/ngonidzashe-maposa/",
  },
  {
    id: "2",
    year: "2023",
    name: "Lin Zhiran",
    img: lin,
    position: "Summer Intern",
    major: "Electronic Information Engineering",
    university: "Shenzhen University",
    linked_in: "https://www.linkedin.com",
  },
  {
    id: "3",
    year: "2020",
    name: "Li Zhenyang",
    img: lizzie,
    position: "Summer Intern",
    major: "Communication Engineering",
    university: "Dongguan University of Technology",
    linked_in: "https://www.linkedin.com",
  },
];
export const devices1 = [
  {
    id: "1",
    year: "2020",
    name: "eMyoFlex Prime",
    img: img9,
    content: "Portable EMG sensor for muscle activity detection.",
  },
  {
    id: "2",
    year: "2020",
    name: "eMyoFlex IMU Plus",
    img: comingsoon,
    content:
      "Portable EMG sensor integrated with IMU, offering enhanced motion tracking alongside EMG analysis",
  },
];
export const devices2 = [
  {
    id: "3",
    year: "2020",
    name: "MuscleMatrix 32X ",
    img: channel32,
    content:
      "A comprehensive 32-channel EMG detection system that is able to detect high-density EMG signal for clinical neuromuscular condition assessment.",
  },
  {
    id: "4",
    year: "2020",
    name: "MuscleMatrix 32X StimFusion ",
    img: comingsoon,
    content:
      "An advanced 32-channel EMG detection system by integrating electrical stimulation to alleviate muscle fatigue alongside its EMG detection",
  },
];
export const aspects = [
  {
    id: "aspect-1",
    icon: portable,
    title: "Portability",
    content:
      " The sensor adopts a highly integrated design with physical dimensions are 45mm x 25mm x 8mm, and it weighs only 15 grams.",
  },
  {
    id: "aspect-2",
    icon: detection,
    title: "High Detection Accuracy",
    content:
      "It boasts high detection accuracy with a signal-to-noise ratio reaching over 100 dB. The signal readings are smooth and robust under intense body movement.",
  },
  {
    id: "aspect-3",
    icon: channel,
    title: "Multi-Channel Detection",
    content:
      "Our system could collect the surface EMG from customer-defined layouts up to 16 muscle groups simultaneously at a sampling frequency of 1000 Hz.",
  },

  {
    id: "aspect-4",
    icon: innovate,
    title: "Point-of-Care",
    content:
      " The sensor replaces conventional wet electrodes with dry, micro-structured ones, which showcases outstanding flexibility, biocompatibility, and high detection accuracy.",
  },
  {
    id: "aspect-5",
    icon: personalization,
    title: "Personalization",
    content:
      " The sensor comes with a self-developed app that provides data visualization, personal guidance, and progress tracking.",
  },
  {
    id: "aspect-6",
    icon: versatility,
    title: "Versatility",
    content:
      " Potential applications extend to sports, healthcare, VR, gaming, and robotics.",
  },
];
export const aspects2 = [
  {
    id: "aspect-1",
    icon: safety,
    title: "Safety Measures",
    content:
      " Built-in safety features, with low voltage operation and proper insulation, to ensure user safety.",
  },
  {
    id: "aspect-2",
    icon: wireless,
    title: "Wireless Connectivity",
    content:
      "High-speed Wi-Fi connection to a computer for real-time muscle activation visualization and data recording",
  },
  {
    id: "aspect-3",
    icon: highsignal,
    title: "High Signal Quality",
    content:
      "High-accuracy and high SNR acquisition of sEMG signals for accurate and reliable detection.",
  },

  {
    id: "aspect-4",
    icon: portable,
    title: "Portability",
    content:
      "Compact, lightweight design for easy transportation and use in different application scenarios",
  },
  {
    id: "aspect-5",
    icon: userfriendly,
    title: "User-Friendly Interface",
    content:
      " Easy-to-use interface, with clear instructions and options for exporting recorded sEMG data to various formats and professional analysis for clinical reference.",
  },
  {
    id: "aspect-6",
    icon: channel,
    title: "Multi-Channel System",
    content:
      " 32 independent channels for simultaneous monitoring of multiple muscles",
  },
];
export const healthcare = [
  {
    icon: health1,
  },
  {
    icon: health2,
  },
  {
    icon: health3,
  },
  {
    icon: health4,
  },
  {
    icon: health5,
  },
];
export const vr = [
  {
    icon: vr3,
  },
  {
    icon: vr5,
  },
  {
    icon: augmentedreality,
  },
  {
    icon: sensor,
  },
  {
    icon: vr4,
  },
];
export const sports = [
  {
    icon: sport1,
  },
  {
    icon: sport2,
  },
  {
    icon: sport3,
  },
  {
    icon: sport4,
  },
  {
    icon: sport5,
  },
];
