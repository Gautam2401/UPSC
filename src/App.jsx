import React from "react";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/HeroSection";
import Dashboard from "./Components/DashBoard";
import LatestUpdates from "./Components/LatestUpdates";
import ResourcesDownloads from "./Components/ResourcesDownloads";
import RecentNotifications from "./Components/RecentNotifications";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dashboard />
      <RecentNotifications/>
      <ResourcesDownloads/>
      <Footer/>
    </>
  );
}
