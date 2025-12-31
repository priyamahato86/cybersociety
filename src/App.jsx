// App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router";
import { useEffect } from "react";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Members from "./Components/Members";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import Events from "./Components/Events";
import ContactPage from "./Components/ContactPage";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import PhoneVerification from "./Components/PhoneVerification";
// import ChallengesPage from "./Components/ChallengesPage";
// import PrivateRoute from "./Components/PrivateRoute";

import "./App.css";

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
              <div id="home"><Home /></div>
              <div id="card"><Card /></div>
              <div id="team"><Members /></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />

        {/* Public Routes */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

         </Routes>

    </>
  );
}
export default App;
