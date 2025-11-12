import { createBrowserRouter } from "react-router-dom";
import EventGalleryPage from "./components/EventGalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import EventGalleryDetailPage from "./pages/EventGalleryDetailPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import GivePage from "./pages/GivePage";
import HomePage from "./pages/HomePage";
import InvolvedPage from "./pages/InvolvedPage";
import Layout from "./pages/Layout";
import LeadershipPage from "./pages/LeadershipPage";
import SermonsPage from "./pages/SermonsPage";
import TestimonialPage from "./pages/TestimonialPage";
import WhatweDoPage from "./pages/WhatweDoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <ContactUsPage /> },
      {
        path: "events",
        element: <EventsPage />,
        children: [
          { index: true, element: <EventGalleryPage /> },
          { path: ":slug", element: <EventGalleryDetailPage /> },
        ],
      },
      { path: "gallery", element: <GalleryPage /> },
      { path: "involved", element: <InvolvedPage /> },
      { path: "leadership", element: <LeadershipPage /> },
      { path: "sermons", element: <SermonsPage /> },
      { path: "testimonial", element: <TestimonialPage /> },
      { path: "what-we-do", element: <WhatweDoPage /> },
      { path: "give", element: <GivePage /> },
      { path: "terms-and-conditions", element: <GivePage /> },
    ],
  },
]);

export default router;
