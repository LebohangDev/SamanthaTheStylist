// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav/Nav.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Services from "./Services/Services.jsx";
import Booking from "./Booking/Booking.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    // On initial load, if the path contains a section (e.g. /services or /booking)
    // scroll to that section. This works with the GitHub Pages 404 -> /?p= redirect trick
    const scrollToPath = () => {
      const raw = window.location.pathname || "/";
      // normalize: remove leading slash
      const path = raw.replace(/^\/+|\/+$/g, "");
      const id = path || "home";

      // small delay to allow DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // notify Nav to update active state
          window.dispatchEvent(new CustomEvent("nav:activate", { detail: id }));
        }
      }, 80);
    };

    scrollToPath();

    // Also handle back/forward navigation (popstate)
    const onPop = () => {
      scrollToPath();
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="appRoot">
      <div className="appInner">
        <Nav />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>

          <section id="services">
            <Services onSelectService={setSelectedServices} />
          </section>
          <section id="booking">
            <Booking selectedServices={selectedServices} />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
