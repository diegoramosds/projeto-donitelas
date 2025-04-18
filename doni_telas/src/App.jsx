// Import all of Bootstrap's JS
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Work from "./pages/Work/Work";
import ScrollToTop from "./components/ScrollTop/ScrollTop";

// index.js ou App.js
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Information from "./pages/Information/Information";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
