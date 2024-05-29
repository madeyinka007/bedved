import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
