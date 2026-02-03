// src/About/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { sectionReveal, staggerContainer, fadeInUp } from "../animations";
import styles from "./About.module.css";

function About() {
  return (
    <motion.section
      className={styles.aboutWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.sectionTitle}>About Me</h2>

      <div className={styles.aboutInner}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 variants={fadeInUp} className={styles.heading}>
            Hi! I&apos;m Samantha 👋
          </motion.h3>

          <motion.p variants={fadeInUp} className={styles.body}>
            A dedicated hair stylist specializing in refined, effortless beauty.
            With an eye for detail and a love for timeless style, I create
            customized looks that enhance your natural features. My approach is
            personal, relaxed, and focused on delivering hair that feels as good
            as it looks.
          </motion.p>

          <motion.div variants={fadeInUp} className={styles.carousel}>
            <img
              src="/Images/gallery1.png"
              alt=""
              className={styles.carouselImg}
            />
            <img
              src="/Images/gallery2.png"
              alt=""
              className={styles.carouselImg}
            />
            <img
              src="/Images/gallery3.png"
              alt=""
              className={styles.carouselImg}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.actions}>
            <button type="button" className={styles.primary}>
              BOOK NOW
            </button>
            <button type="button" className={styles.secondary}>
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} className={styles.right}>
          <img
            src="/Images/about-main.png"
            alt="About Samantha"
            className={styles.mainImg}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
