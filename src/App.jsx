import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import Members from "./Components/Members";
import Navigation from "./Components/Navigation";
import Events from "./Components/Events";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import ContactPage from "./Components/ContactPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSectionOnLoad() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (location.pathname === "/" && sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); 
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Navigation />
      <ScrollToSectionOnLoad />

      <Routes>
        {/* Main Page with Scrollable Sections */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="card">
                <Card />
              </div>
              <div id="team">
                <Members />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </>
          }
        />

        {/* Blog Page */}
        <Route
          path="/blogs"
          element={
            <>
              <Blog />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Events />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
            </>
          }
        />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />

        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </>
  );
}

export default App;
