import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Topbar from "./components/Topbar";

export default function Routing() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route index path="/" element={<App />} />
        {/* <Route path="/sevices" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}
