// src/Services/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionReveal, staggerContainer, fadeInUp } from "../animations";
import styles from "./Services.module.css";

function Services({ onSelectService }) {
  const [selected, setSelected] = useState([]);

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset + 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const toggleService = (service, price) => {
    const updated = [{ name: service, price }];
    setSelected(updated);
    onSelectService && onSelectService(updated);

    setTimeout(scrollToBooking, 150);
  };

  const serviceGroups = [
    {
      title: "Hair Styling",
      icon: "Icons/style.png",
      items: [
        { name: "Wash and Cut", price: 150 },
        { name: "Wash Cut & Style", price: 250 },
        { name: "Bangs Cut", price: 45 },
        { name: "Hair Trimming", price: 100 },
      ],
    },

    {
      title: "Hair Treatments",
      icon: "Icons/treatment.png",
      items: [
        {
          name: "Keratin & Protein",
          price: "S 800-1000 | M 1000-1200 | L 1200-1500",
        },
        { name: "Hair Botox", price: "S 800-1000 | M 1000-1200 | L 1200-1500" },
        {
          name: "Organic Protein",
          price: "S 800-1000 | M 1000-1200 | L 1200-1500",
        },
        // { name: "Collagen", price: "800-1500" },
        { name: "Hair Toning", price: "S 120 | M 150 | L 200" },
        { name: "Olaplex", price: "S 150 | M 200 | L 250" },
      ],
    },

    {
      title: "Hair Dye",
      icon: "Icons/dye.png",
      items: [
        { name: "Full Dye", price: "S 350 | M 450 | L 600" },
        { name: "Highlights", price: "S 400 | M 550 | L 700" },
        { name: "Ombre & Balayage", price: "S 400 | M 500 | L 700" },
      ],
    },

    {
      title: "Makeup Services",
      icon: "Icons/makeup.png",
      items: [
        { name: "Bridal Makeup and Hairstyle", price: 2500 },
        { name: "Evening", price: 400 },
        { name: "Party", price: 600 },
        { name: "Prom", price: 400 },
      ],
    },

    {
      title: "Eyebrows & Upper-lips",
      icon: "Icons/eyebrow.png",
      items: [
        { name: "Upper Lips Threading", price: 20 },
        { name: "Eyebrows Threading", price: 35 },
        { name: "Eyebrows Tint", price: 50 },
        { name: "Eyebrows & Lashes Tint", price: 75 },
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      className={styles.servicesWrapper}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className={styles.heading}>My Services</h2>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {serviceGroups.map((group, idx) => {
          const cardIsSelected = selected.some((s) =>
            group.items.some((i) => i.name === s.name),
          );

          return (
            <motion.div
              key={idx}
              className={`${styles.card} ${cardIsSelected ? styles.selectedCard : ""
                }`}
              variants={fadeInUp}
              animate={cardIsSelected ? { scale: 1.03 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className={styles.cardHeader}>
                <img src={group.icon} alt="" className={styles.icon} />
                <h3 className={styles.cardTitle}>{group.title}</h3>
              </div>

              {group.items.map((item, i) => {
                const rowSelected = selected.some((s) => s.name === item.name);

                return (
                  // <label
                  //   key={i}
                  //   className={`${styles.row} ${
                  //     rowSelected ? styles.selectedRow : ""
                  //   }`}
                  // >
                  //   <div className={styles.leftSide}>
                  //     <input
                  //       type="checkbox"
                  //       checked={rowSelected}
                  //       onChange={() => toggleService(item.name, item.price)}
                  //       className={styles.checkbox}
                  //     />
                  //     <span className={styles.itemName}>{item.name}</span>
                  //   </div>
                  //   <span className={styles.price}>{item.price}</span>
                  // </label>
                  <label
                    key={i}
                    className={`${styles.row} ${rowSelected ? styles.selectedRow : ""}`}
                  >
                    <div className={styles.leftSide}>
                      <input
                        type="checkbox"
                        checked={rowSelected}
                        onChange={() => toggleService(item.name, item.price)}
                        className={styles.checkbox}
                      />
                      <span className={styles.itemName}>{item.name}</span>
                    </div>

                    <span className={styles.price}>{item.price}</span>
                  </label>
                );
              })}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Services;
