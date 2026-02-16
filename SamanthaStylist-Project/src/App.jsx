import { useState } from "react";
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
          {/* <section id="services">
            <Services />
          </section>
          <section id="booking">
            <Booking />
          </section> */}
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
