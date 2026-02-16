// src/Home/Home.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeInUp } from "../animations";
import styles from "./Home.module.css";

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <motion.section
      className={styles.heroWrapper}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* <img
        src="/Images/section-bg-home.png"
        alt=""
        aria-hidden="true"
        className={styles.sectionBg}
      /> */}

      <motion.img
        src="/Images/section-bg-home.png"
        alt=""
        aria-hidden="true"
        className={styles.sectionBg}
        style={{ y }}
      />

      <div className={styles.heroInner}>
        <motion.div variants={fadeInUp} className={styles.heroImage}>
          <img src="Images/hero.png" alt="Hero" className={styles.heroImg} />
        </motion.div>

        <motion.div variants={fadeInUp} className={styles.heroText}>
          <p className={styles.kicker}>Samantha · The Stylist</p>
          <h1 className={styles.title}>Timeless Beauty, Expertly Styled</h1>
          <p className={styles.subtitle}>
            Personalized hair artistry designed to enhance your natural beauty.
            From effortless everyday looks to statement styles, every
            appointment is tailored just for you.{" "}
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </button>
            <button
              type="button"
              className={styles.primary}
              onClick={() => {
                const el = document.getElementById("booking");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              BOOK NOW
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
