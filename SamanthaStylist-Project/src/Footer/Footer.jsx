// src/Footer/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.logoWrapper}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomRow}>
        <span className={styles.left}>© 2026</span>
        <span className={styles.center}>Developed by Creators Blueprint</span>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/samantha_the_stylist_dubai"
            className={styles.icon}
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://wa.me/+971554120771" className={styles.icon}>
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href="mailto:samanthathestylistdubai@gmail.com"
            className={styles.icon}
          >
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
