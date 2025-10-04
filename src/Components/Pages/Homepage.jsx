import Navbar from "../navbar";
import HeroSection from "../HeroSection";
import Dashboard from "../DashBoard";
import Footer from "../Footer";
import ResourcesDownloads from "../ResourcesDownloads";
import RecentNotifications from "../RecentNotifications";
import { useNavigate } from "react-router-dom";
import Chatbot from "../chatbot";

export default function HomePage() {
const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dashboard />
      <RecentNotifications/>
      <ResourcesDownloads/>
      <Chatbot/>
      <Footer/>
    </>
  );
}