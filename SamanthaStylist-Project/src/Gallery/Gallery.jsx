// src/Gallery/Gallery.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp } from "../animations";
import styles from "./Gallery.module.css";

const images = [
  "Images/gallery1.png",
  "Images/gallery2.png",
  "Images/gallery3.png",
  "Images/gallery1.png",
  "Images/gallery2.png",
  "Images/gallery3.png",
  "Images/gallery1.png",
  "Images/gallery2.png",
  "Images/gallery3.png",
];

function Gallery() {
  const [page, setPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const mobileRef = useRef(null);

  const handleDotClick = (index) => {
    setPage(index);
  };

  const handleMobileDotClick = (index) => {
    setMobilePage(index);
    if (mobileRef.current) {
      // Estimate item width: 80% container width + 16px gap
      const containerWidth = mobileRef.current.offsetWidth;
      // Note: simple approximation
      const itemWidth = (containerWidth * 0.8) + 16;
      mobileRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const onMobileScroll = () => {
    if (mobileRef.current) {
      const left = mobileRef.current.scrollLeft;
      const containerWidth = mobileRef.current.offsetWidth;
      const itemWidth = (containerWidth * 0.8) + 16;
      const index = Math.round(left / itemWidth);
      if (index !== mobilePage && index >= 0 && index < 5) {
        setMobilePage(index);
      }
    }
  };

  const startIndex = page * 3;
  const visibleImages = images.slice(startIndex, startIndex + 3);
  // Use first 5 images for mobile carousel
  const mobileImages = images.slice(0, 5);

  return (
    <motion.section
      className={styles.galleryWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.heading}>A Gallery of My Clients</h2>

      <div className={styles.desktopView}>
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
      </div>

      <div className={styles.mobileView}>
        <div
          className={styles.mobileCarousel}
          ref={mobileRef}
          onScroll={onMobileScroll}
        >
          {mobileImages.map((src, i) => (
            <div key={i} className={styles.mobileImageWrapper}>
              <img src={src} alt="" className={styles.image} />
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {mobileImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${mobilePage === i ? styles.activeDot : ""}`}
              onClick={() => handleMobileDotClick(i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery;
