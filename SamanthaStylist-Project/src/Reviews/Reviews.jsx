import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp } from "../animations";
import styles from "./Reviews.module.css";

function Reviews() {
  useEffect(() => {
    // Load iframe.js script
    const script = document.createElement("script");
    script.src = "https://embedsocial.com/js/iframe.js";
    script.async = true;
    script.onload = () => {
      if (window.iFrameResize) {
        window.iFrameResize();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      id="reviews-section"
      className={styles.reviewsWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        What Clients Say
      </motion.h2>

      <motion.div className={styles.reviewsCard} variants={fadeInUp}>
        <iframe
          style={{ border: 0, width: "100%", height: "100%" }}
          scrolling="no"
          src="https://embedsocial.com/api/pro_hashtag/2791e58870cea0852f5ad5ea803637539b6cec2d"
        ></iframe>
      </motion.div>
    </motion.section>
  );
}

export default Reviews;
