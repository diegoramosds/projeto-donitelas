// Import all of Bootstrap's JS
import { BrowserRouter, Routes, Route} from "react-router-dom"

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import Work from './pages/Work/Work'

// index.js ou App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"
import Information from "./pages/Information/Information"
import ScrollToTop from "./components/ScrollTop/ScrollTop"

function App() {

  return (
    <>
     <BrowserRouter>
     <ScrollToTop />
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/information" element={<Information />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
      <Footer />
  
    </BrowserRouter>
    </>
  )
}

export default App
