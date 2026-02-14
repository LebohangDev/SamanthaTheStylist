// src/Booking/Booking.jsx
import React from "react";
import CalInline from "@calcom/embed-react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp } from "../animations";
import styles from "./Booking.module.css";

function Booking({ selectedServices }) {
  const calLinks = {
    "Wash and Cut": "samantha-the-stylist/hair-styling-wash-cut",
    "Wash Cut & Style": "samantha-the-stylist/hair-styling-wash-cut-style",
    "Bangs Cut": "samantha-the-stylist/bangs-cut",

    Keratin: "samantha-the-stylist/hair-treatment-keratin-protein",
    Botox: "samantha-the-stylist/botox-treatment",
    Protein: "samantha-the-stylist/protein-treatment",

    "Full Dye": "samantha-the-stylist/full-dye",
    Highlights: "samantha-the-stylist/highlights",
    Ombre: "samantha-the-stylist/ombre",

    Bridal: "samantha-the-stylist/bridal-makeup",
    Party: "samantha-the-stylist/party-makeup",
    Prom: "samantha-the-stylist/prom-makeup",
  };

  const activeService = selectedServices?.[0]?.name;
  const activeCalLink = calLinks[activeService] || "samantha-the-stylist";

  return (
    <motion.section
      id="booking-section"
      className={styles.bookingWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.heading}>Make a booking with me</h2>

      <motion.div className={styles.calendarCard} variants={fadeInUp}>
        <h3 className={styles.subheading}>
          {activeService ? `Booking: ${activeService}` : "Select a Service"}
        </h3>

        <div className={styles.calWrapper}>
          <CalInline
            key={activeCalLink}
            calLink={activeCalLink}
            style={{
              width: "100%",
              height: "550px",
              background: "transparent",
            }}
            config={{
              theme: "light",
              layout: "month_view",
              primaryColor: "#D7AF41",
              lightColor: "#FAF7F0",
              darkColor: "#492E3A",
              textColor: "#492E3A",
              borderColor: "#d8c6b0",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Booking;
