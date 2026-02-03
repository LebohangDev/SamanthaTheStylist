// src/Gallery/Gallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp } from "../animations";
import styles from "./Gallery.module.css";

const images = [
  "/Images/gallery1.png",
  "/Images/gallery2.png",
  "/Images/gallery3.png",
  "/Images/gallery4.png",
  "/Images/gallery5.png",
  "/Images/gallery6.png",
  "/Images/gallery7.png",
  "/Images/gallery8.png",
  "/Images/gallery9.png",
];

function Gallery() {
  const [page, setPage] = useState(0);

  const handleDotClick = (index) => {
    setPage(index);
  };

  const startIndex = page * 3;
  const visibleImages = images.slice(startIndex, startIndex + 3);

  return (
    <motion.section
      className={styles.galleryWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.heading}>A Gallery of My Clients</h2>

      <motion.div className={styles.carousel} variants={fadeInUp}>
        {visibleImages.map((src, i) => (
          <motion.div
            key={i}
            className={styles.imageWrapper}
            variants={fadeInUp}
          >
            <img src={src} alt="" className={styles.image} />
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.dots}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${page === i ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;
