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
      { name: "PRODUCTS PAGE", link: "/products" },
      { name: "Portable EMG Sensor", link: "/products/emg-sensor" },
      {
        name: "32-Channel EMG Detection System",
        link: "/products/32-channel-emg-detection-system",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    subpage: [
      { name: "SUPPORT PAGE", link: "/support" },
      { name: "Get In Touch", link: "/about" },
      { name: "FAQs", link: "/support/FAQs" },
      { name: "User Manuals", link: "/support/User Manuals" },
      { name: "Technical Documents", link: "/support/Technical Documents" },
      { name: "Send Us A Message", link: "/about" },
      { name: "Firmware Downloads", link: "/support/Firmware Downloads" },
      {
        name: "EleMotion Patents and Publications",
        link: "/support/EleMotion Patents and Publications",
      },
      { name: "Research Papers", link: "/support/Research Papers" },
      { name: "Video Tutorials", link: "/about" },
    ],
  },
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
    id: "contact us",
    title: "Contact Us",
    subpage: [],
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
    icon: feedbackicon,
    title: "Effective Personalized Feedback",
    content:
      "Experience instantaneous feedback through on-sensor processing and the EleMotion visualization app.",
  },
  {
    id: "feature-3",
    icon: waveform,
    title: "Real-Time Muscle Activity Monitoring",
    content:
      "Monitor multiple muscles or muscle groups simultaneously with independent channel amplification",
  },

  {
    id: "feature-4",
    icon: signal,
    title: "Superior Signal-to-Noise Ratio",
    content:
      "Capture and analyze muscle signals with high sampling rates and exceptional resolution.",
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
    name: "Xiaojun ",
    title: "Chief Technology Officer",
    img: xiaojun,
  },
  {
    id: "feedback-3",
    content:
      "Biotech breakthroughs redefine possibilities. EMG chips pioneer the way.",
    name: "Xu Xuning",
    title: "Chief Financial Officer",
    img: people03,
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
        link: "terms-and-conditions",
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
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
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
    img: img8,
    title: "EleMotion Portable EMG Sensor",
    content:
      " Compact EMG sensor with personalized app for accurate detection.",
    link: "/products/emg-sensor",
    main: "/products",
  },
  {
    id: "product-2",
    img: arm,
    title: "32 Channel EMG Detection System",
    content: "Empowering Elderly Care with Smart EMG Solutions",
    link: "/products/32-channel-emg-detection-system",
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
    content: "+852 1234 5678",
  },

  {
    id: "support-2",
    icon: question,
    title: "FAQs",
    content: "Quick answers to common questions and concerns.",
  },
  {
    id: "support-3",
    icon: guide,
    title: "User Manuals",
    content:
      "Comprehensive guides for easy navigation and optimal use of our products.",
  },
  {
    id: "support-4",
    icon: document,
    title: "Technical Documents",
    content:
      "In-depth technical resources for a deeper understanding of our products and technologies.",
  },
  {
    id: "support-5",
    icon: email,
    title: "Send Us A Message",
    content: "Connect with us for inquiries, support, or collaboration.",
  },
  {
    id: "support-6",
    icon: download,
    title: "Firmware Downloads",
    content: "Access the latest firmware updates for Elemotion Products",
  },
  {
    id: "support-7",
    icon: book,
    title: "EleMotion Patents and Publications",
    content: "Patents issued out to Elemotion Technology Limited",
  },
  {
    id: "support-8",
    icon: research,
    title: "Research Papers",
    content:
      "Explore informative research papers for valuable insights and industry knowledge. ",
  },
  {
    id: "support-9",
    icon: play,
    title: "Video Tutorials",
    content:
      "Learn and master with our comprehensive video tutorials for easy understanding.",
  },
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
    icon: [{ img: merit3 }, { img: merit1 }, { img: merit2 }, { img: merit5 }],
    title:
      "The Merit Prize in the 9th Hong Kong University Student Innovation and Entrepreneurship Competition 2023",
    content: [
      "We are thrilled to share that EleMotion Technology Limited has once again demonstrated its innovative prowess by securing the Merit Prize in the 9th Hong Kong University Student Innovation and Entrepreneurship Competition.",
    ],
  },
  {
    id: "news-4",
    icon: [{ img: event1 }, { img: event2 }],
    title:
      "Exploring the Intricacies of Circuit Boards: An In-Depth Look at the Backbone of Modern Electronics",
    content: [
      "Circuit boards are an essential component of modern electronics, serving as the backbone of devices that power our daily lives. While often taken for granted, these intricate pieces of technology are critical to the functioning of everything from smartphones to cars and even space shuttles. In this essay, we will delve into the intricacies of circuit boards and explore the key players driving innovation in this field.",
      "The field of circuit board design and manufacturing is a highly specialized one, with experts working tirelessly to push the boundaries of what is possible. One of the key players in this field is Andrew Grove, a pioneer in the semiconductor industry who co-founded Intel Corporation and played a crucial role in the development of the microprocessor. Another notable figure is Steve Wozniak, who co-founded Apple Computer and was instrumental in the design of the company's first products, including the Apple I and II.",
      "Today, circuit board design and manufacturing continue to evolve at a rapid pace, with new materials, techniques, and technologies making it possible to create smaller, faster, and more powerful devices than ever before. From medical implants to self-driving cars, the potential applications of circuit board technology are virtually limitless. As we continue to explore the intricacies of these essential components, we can look forward to even more exciting innovations that will shape our world for generations to come.",
    ],
  },
  {
    id: "news-5",
    icon: [
      { img: thirdprize1 },
      { img: thirdprize2 },
      { img: thirdprize4 },
      { img: thirdprize3 },
    ],
    title: "iDM2 Micro-Electronics Node (MEN) talent matching event ",
    content: [
      "We are delighted to report that EleMotion Technology Limited recently attended the inaugural iDM2 Micro-Electronics Node (MEN) talent matching event on 13th February 2023, at the Hong Kong Science and Technology Parks (HKSTP). This unique event brought together a plethora of high-calibre engineering talents from Dongguan, who have earned their Bachelor's, Master's, or Ph.D. degrees from top universities across Mainland China.",

      "At the event, our CTO, Xiaojun, had the privilege of introducing EleMotion Technology Limited to the attendees. His presentation, detailing our vision, mission, and ongoing projects, sparked significant interest among the talented attendees. The engineers' enthusiastic response to our work is a testament to the compelling and innovative nature of our initiatives.",
      "In addition to the presentation, we also engaged in deep discussions and interactive sessions with these talented individuals. This gave us an invaluable opportunity to understand their capabilities better, discuss potential collaborations, and gauge how their skills and expertise could contribute to our projects.",
      "We are thrilled with the outcome of the event, which provided a platform to connect with potential future collaborators and further reinforce our commitment to technological advancement. Our participation underscored our dedication to fostering connections within the industry and our efforts to remain at the cutting edge of technology.",
    ],
  },
  {
    id: "news-6",
    icon: [{ img: artificial }, { img: scientist }, { img: scientist }],
    title:
      "Harnessing the Power of Artificial Intelligence for Innovation and Progress",
    content: [
      "Artificial intelligence (AI) has emerged as a powerful tool for driving innovation and progress across a wide range of fields and industries. By leveraging advanced algorithms and machine learning techniques, researchers and developers are able to analyze vast amounts of data and gain insights that were previously impossible to attain. ",

      "From healthcare to finance to transportation, AI is transforming the way we live and work, making our lives easier, more efficient, and more productive. As we continue to harness the power of AI, we can look forward to even more exciting innovations that will shape the course of human history for generations to come.",
    ],
  },
  {
    id: "news-7",
    icon: [{ img: tsssu23 }],
    title:
      "TSSSU@HKU 2023-2024: Technology Startup Support Scheme for Universities at HKU ",
    content: [
      "We are thrilled to announce that EleMotion Technology Limited has once again been recognized with project funding under the Technology Startup Support Scheme for Universities (TSSSU) at The University of Hong Kong (HKU) for the 2023-2024 academic year.",

      "This consecutive acknowledgement from the TSSSU not only signifies our unwavering commitment to technological innovation, but also underscores the effectiveness of our solutions and the strength of our team's work. We would like to extend our heartfelt gratitude to HKU and the TSSSU for their continued support and belief in our mission.",
    ],
  },
  {
    id: "news-8",
    icon: [{ img: tsssu22 }],
    title:
      "TSSSU@HKU 2022-2023: Technology Startup Support Scheme for Universities at HKU ",
    content: [
      "We are pleased to announce that EleMotion Technology Limited has been awarded project funding under the Technology Startup Support Scheme for Universities (TSSSU) at The University of Hong Kong (HKU) for the 2022-2023 academic year. This grant is a significant milestone for us, further strengthening our commitment to innovate and advance in the technological field.",
    ],
  },
  {
    id: "news-9",
    icon: [{ img: scientist }, { img: industry }],
    title:
      "Driving Innovation and Digital Transformation Across Diverse Industries and Sectors Worldwide with the Power of Coding",
    content: [
      "Microscope technology has advanced significantly in recent years, unlocking new frontiers in the fields of science and medicine. From electron microscopes that can capture images of individual atoms to high-resolution light microscopes that can visualize structures deep within living organisms, these tools are transforming our understanding of the natural world and enabling breakthroughs in medical research.",

      "With advanced imaging and analysis techniques, researchers are now able to study cellular processes in unprecedented detail, leading to new insights into the mechanisms of disease and the development of more effective treatments. Additionally, advances in microscopy are driving innovation across a wide range of fields, from materials science to environmental monitoring.",

      "As we continue to unveil the unseen with these amazing advancements in microscope technology, we can look forward to even more exciting discoveries and breakthroughs that will shape the future of science and medicine.",
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
    title: "Elemotion Sensor Setup ",
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
    bullet1: "Ph.D. in Mechanical Engineering, HKU",
    bullet2: "5+ years in nanofabrication & nanoelectronics",
    bullet3: "Professional Ping Pong player",
    bullet4: "HK PhD fellowship Scheme receiver",
    content1:
      "Dr. Sun obtained her Ph.D. degree in Mechanical Engineering from the University of Hong Kong in 2023, having worked alongside Prof. Wendi Li in the field of nanofabrication and nanoelectronics for more than 5 years. Their collaborative efforts aimed to enhance electronics performance through cutting-edge nanofabrication techniques.",
    content2:
      "With her entrepreneurial spirit, Dr. Sun has received several awards in the innovation and entrepreneurship competitions in China, demonstrating her commitment to translating research into commercial products.  Beyond academia, Dr. Sun is a professional table tennis athlete, with titles including First Runner-up in the DHS-Luneng Cup National Table Tennis Competition. Today, Dr. Sun employs her diverse skill set to lead EleMotion Technology Limited, guiding the company in its mission to revolutionize muscle activity detection through the development of advanced EMG sensors.",
  },
  {
    id: "2",
    year: "2021",
    name: "Xiaojun Wang",
    img: xiaojun,
    position: "CTO",
    bullet1: "Ph.D. in Orthopaedics and Traumatology, HKU",
    bullet2: "7+ years in clinical electrophysiology & neural engineering",
    bullet3: "Enthusiast in mechanical keyboard and hiking",
    bullet4: "Well-recognized cook for chinese food",
    content1:
      "Dr. Wang obtained his Ph.D. degree from Dept. of Orthopaedics and Traumatology, LKS Faculty of Medicine, University of Hong Kong in 2023, and he has worked alongside Prof. Yong Hu in the field of clinical electrophysiology and neural engineering for more than 5 years. During Xiaojun’s Ph.D. study, he worked with Prof. Hu to develop functional prosthesis hand powered by artificial intelligent aims to help upper limb amputee for rehabilitation and daily applications.",
    content2:
      "Worked with Stella, they have received several awards in the innovation and entrepreneurship competitions in China, demonstrating his ability in pitching and road show. Beyond academic, Dr. Wang is a well-recognized cook in Chinse food and he established the cooking club in the Chi Sun College, one of favorite residual colleges in HKU. Today, Xiaojun applies his discipline knowledge and experience to drive EleMotion Technology Limited, providing convenient and accurate muscle activity tracking and training suggestion for rehabilitation centers, the care centers and sport teams.",
  },
  {
    id: "3",
    year: "2021",
    name: "Liang Huahui",
    img: huahui,
    position: "R&D Engineer",
    bullet1: "Masters in Mechanical Engineering, HKU",
    bullet2: "Independent multiple engineering projects",
    bullet3: "Gained valuable experience from diverse internships",
    bullet4: "Wearable electrode R&D of EleMotion",
    content1:
      "Hello, my name is Liang Huahui. I received my bachelor's degree in Materials Science and Engineering from Northwestern Polytechnical University and my master's degree from the Department of Mechanical Engineering at the University of Hong Kong. I currently serve as an R&D engineer at EleMotion, with my main work area focusing on the design, fabrication, and manufacturing of micro-structured electrodes. During my academic years, I managed to independently complete multiple engineering projects, such as a “Reverse 3D Scanning Printer” “Drone Crash-Proof Device”, and a “High-Altitude Curtain Cleaning Robot.” ",
    content2:
      "Given my technical capabilities, coupled with the systemic work experience I gained during my internships, I am committed to contributing to the wearable electrode R&D of EleMotion. My goal is to build wireless, wearable, and intelligent EMG monitoring devices. I look forward to working actively with my team to contribute to the company and realize my own value.",
  },
  {
    id: "4",
    year: "2021",
    name: "Qu Zhan",
    img: qu,
    position: "Innovation Wearable & Smart Textile Designer",
    bullet1: "Masters at the Royal College of Art",
    bullet2: "2023 Recipient of PolyU PhD scholarship in HK.",
    bullet3: "2022 Recipient of Royal College of Art Innovation Fund in the UK",
    bullet4:
      "2021 Bronze Award of 'Yinger International Fashion Design Prize' in China.",
    content1:
      "Zhan is an interdisciplinary designer who focuses on combining the aesthetic, materials and programmable properties (interactive algorithm) of smart textiles for wearables that support inclusivity. She seeks to expand the dimensions of movement and explore the effect on body sensations and develop user-friendly wearable electronic textiles for performance, well-being and healthcare applications. ",
    content2:
      "Zhan aims to expand access to wearable prototypes, through her work on embedded actuation whilst adopting new technologies to broaden people’s sensations. ",
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
    name: "EleMotion Portable EMG Sensor",
    img: img8,
    content: "Compact EMG sensor with personalized app for accurate detection.",
  },
];
export const devices2 = [
  {
    id: "2",
    year: "2020",
    name: "32-Channel EMG Detection System ",
    img: arduino,
    content:
      "Array for extracting sensor data Array for extracting sensor data data",
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
      "It boasts high detection accuracy with a signal-to-noise ratio reaching over 160 dB. The signal readings are smooth and robust under intense body movement.",
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
    title: "Innovation",
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
