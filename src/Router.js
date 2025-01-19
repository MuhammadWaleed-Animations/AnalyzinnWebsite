import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Services from "./pages/Services";
import Topbar from "./components/Topbar";
import Footer from "./components/footer/footer";
import Automation from "./pages/Automation";
import BussinessAnalytics from "./pages/BussinessAnalytics";
import MarketingTabs from "./components/DigitalMarketing";
import Contact from "./pages/contact/contact";
import AppDev from "./pages/AppDev";
import AiMl  from "./pages/AiMl";
import WebDevPage from "./components/WebDev/WebDev";

export default function Routing() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route index path="/" element={<App />} />

        <Route path="/services" element={<Services />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/App-development" element={<AppDev />} />
        <Route path="/Ai-Ml" element={<AiMl />} />


        {<Route path="/about" element={<About />} />}
        <Route path="/DigitalMarketing" element={<MarketingTabs />} />
        <Route path="/Web-Development" element={<WebDevPage />} />
        <Route path="/Bussiness-analytics" element={<BussinessAnalytics />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
