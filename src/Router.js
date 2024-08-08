import { Routes, Route } from "react-router-dom";
import App from "./App";
import Topbar from "./components/Topbar";
import Automation from "./pages/Automation";
import About from "./pages/About";

export default function Routing() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/Automation" element={<Automation />} />
        {/* <Route path="/srevices" element={<Services />} /> */}
        { <Route path="/about" element={<About />} /> }
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}
