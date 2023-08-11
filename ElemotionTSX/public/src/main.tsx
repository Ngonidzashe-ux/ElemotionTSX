import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApplicationsPage,
  AboutPage,
  ContactUsPage,
  NewsPage,
  ProductsPage,
  SupportPage,
  TechnologyPage,
  FullNews,
  TermsandConditions,
  TechPage1,
  TechPage2,
  TechPage3,
  TechPage4,
  FAQs,
  FirmwareDownloads,
  ResearchPapers,
  TechnicalDocuments,
  UserManuals,
  Team,
  EMG_Sensor,
  EMG_32_Channel,
} from "./Pages";
import { news } from "./Constants/index.js";
import TrainingForm from "./Components/TrainingForm.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuoteForm from "./Components/QuoteForm.tsx";
import PurchaseForm from "./Components/PurchaseForm.tsx";

const router = createBrowserRouter([
  {
    path: "home",
    element: <App />,
  },
  {
    path: "applications",
    element: <ApplicationsPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "/about/ourteam",
    element: <Team />,
  },
  {
    path: "contact us",
    element: <ContactUsPage />,
  },
  {
    path: "news",
    element: <NewsPage />,
  },
  {
    path: "/news/news-1",
    element: <FullNews news={news[0]} />,
  },
  {
    path: "/news/news-2",
    element: <FullNews news={news[1]} />,
  },
  {
    path: "/news/news-3",
    element: <FullNews news={news[2]} />,
  },
  {
    path: "/news/news-4",
    element: <FullNews news={news[3]} />,
  },
  {
    path: "/news/news-5",
    element: <FullNews news={news[4]} />,
  },
  {
    path: "/news/news-6",
    element: <FullNews news={news[5]} />,
  },
  {
    path: "/news/news-7",
    element: <FullNews news={news[6]} />,
  },
  {
    path: "/news/news-8",
    element: <FullNews news={news[7]} />,
  },
  {
    path: "/news/news-9",
    element: <FullNews news={news[8]} />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsandConditions />,
  },

  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "/products/getquote",
    element: <QuoteForm />,
  },
  {
    path: "/products/purchase",
    element: <PurchaseForm />,
  },
  {
    path: "/products/emg-sensor",
    element: <EMG_Sensor />,
  },
  {
    path: "/products/32-channel-emg-detection-system",
    element: <EMG_32_Channel />,
  },

  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "/support/FAQs",
    element: <FAQs />,
  },
  {
    path: "/support/User Manuals",
    element: <UserManuals />,
  },
  {
    path: "/support/Technical Documents",
    element: <TechnicalDocuments />,
  },
  {
    path: "/support/Firmware Downloads",
    element: <FirmwareDownloads />,
  },
  {
    path: "/support/EleMotion Patents and Publications",
    element: <TrainingForm />,
  },
  {
    path: "/support/Research Papers",
    element: <ResearchPapers />,
  },

  {
    path: "technology",
    element: <TechnologyPage />,
  },
  {
    path: "/technology/tech-1",
    element: <TechPage1 />,
  },
  {
    path: "/technology/tech-2",
    element: <TechPage2 />,
  },
  {
    path: "/technology/tech-3",
    element: <TechPage3 />,
  },
  {
    path: "/technology/tech-4",
    element: <TechPage4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
