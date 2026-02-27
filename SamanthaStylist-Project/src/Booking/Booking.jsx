// src/Booking/Booking.jsx
import React, { useState } from "react";
import CalInline from "@calcom/embed-react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp } from "../animations";
import styles from "./Booking.module.css";

function Booking({ selectedServices }) {
  const calLinks = {
    "Wash and Cut": "samantha-the-stylist/hair-styling-wash-cut",
    "Wash Cut & Style": "samantha-the-stylist/hair-styling-wash-cut-style",
    "Bangs Cut": "samantha-the-stylist/hair-styling-bangs-cut",
    "Hair Trimming": "samantha-the-stylist/hair-styling-hair-trimming",

    "Keratin & Protein": "samantha-the-stylist/hair-treatment-keratin-protein",
    "Hair Botox": "samantha-the-stylist/hair-treatment-botox-treatment",
    "Organic Protein": "samantha-the-stylist/hair-treatment-organic-protein",
    "Hair Toning": "samantha-the-stylist/hair-treatment-hair-toning",
    Olaplex: "samantha-the-stylist/hair-treatment-olaplex-treatment",

    "Full Dye": "samantha-the-stylist/hair-dye-highlights-full-dye",
    Highlights: "samantha-the-stylist/hair-dye-highlights-highlights",
    "Ombre & Balayage":
      "samantha-the-stylist/hair-dye-highlights-ombre-balayage",

    "Bridal Makeup and Hairstyle":
      "samantha-the-stylist/makeup-services-bridal-makeup-hairstyle",
    Evening: "samantha-the-stylist/makeup-services-evening-makeup",
    Party: "samantha-the-stylist/makeup-services-party-makeup",
    Prom: "samantha-the-stylist/makeup-services-prom-makeup",

    "Upper Lip Threading":
      "samantha-the-stylist/eyebrows-upper-lips-upper-lip-threading",
    "Eyebrows Threading":
      "samantha-the-stylist/eyebrows-upper-lips-eyebrows-threading",
    "Eyebrows Tint": "samantha-the-stylist/eyebrows-upper-lips-eyebrows-tint",
    "Eyebrows & Lashes Tint":
      "samantha-the-stylist/eyebrows-upper-lips-eyebrows-lashes-tint",
  };

  const activeService = selectedServices?.[0]?.name;
  const activeCalLink = calLinks[activeService] || "samantha-the-stylist";

  return (
    <motion.section
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

        {/* WHATSAPP CONTACT BLOCK */}
        <motion.a
          href="https://wa.me/+971554120771"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBox}
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <i className="ri-whatsapp-line"></i>
          <span>Contact me on WhatsApp</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Booking;
