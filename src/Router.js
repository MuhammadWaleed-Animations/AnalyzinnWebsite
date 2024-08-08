import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Services from "./pages/Services";
import Topbar from "./components/Topbar";
import Footer from "./components/footer/footer";
import Automation from "./pages/Automation";

// >>>>>>> 00d5da72a3aa5188137e830104b522316a94434c

export default function Routing() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/sevices" element={<Services />}/>
        <Route path="/about" element={<About />} />
        <Route path="/Automation" element={<Automation />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
