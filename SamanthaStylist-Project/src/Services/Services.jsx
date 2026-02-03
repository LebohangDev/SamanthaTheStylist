// src/Services/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionReveal, staggerContainer, fadeInUp } from "../animations";
import styles from "./Services.module.css";

function Services({ onSelectService }) {
  const [selected, setSelected] = useState([]);

  const toggleService = (service, price) => {
    let updated;
    if (selected.some((s) => s.name === service)) {
      updated = selected.filter((s) => s.name !== service);
    } else {
      updated = [...selected, { name: service, price }];
    }
    setSelected(updated);
    onSelectService && onSelectService(updated);
  };

  const serviceGroups = [
    {
      title: "Hair Styling",
      icon: "/Icons/style.png",
      items: [
        { name: "Wash and Cut", price: 150 },
        { name: "Wash Cut & Dry", price: 250 },
        { name: "Bangs Cut", price: 45 },
      ],
    },
    {
      title: "Hair Treatments",
      icon: "/Icons/treatment.png",
      items: [
        { name: "Keratin", price: 150 },
        { name: "Botox", price: 250 },
        { name: "Protein", price: 150 },
      ],
    },
    {
      title: "Hair Dye",
      icon: "/Icons/dye.png",
      items: [
        { name: "Full Dye", price: 150 },
        { name: "Highlights", price: 250 },
        { name: "Ombre", price: 150 },
      ],
    },
    {
      title: "Makeup Services",
      icon: "/Icons/makeup.png",
      items: [
        { name: "Bridal", price: 2500 },
        { name: "Party", price: 600 },
        { name: "Prom", price: 400 },
      ],
    },
  ];

  return (
    <motion.section
      className={styles.servicesWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.heading}>My Services</h2>

      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {serviceGroups.map((group, idx) => (
          <motion.div key={idx} className={styles.card} variants={fadeInUp}>
            <div className={styles.cardHeader}>
              <img src={group.icon} alt="" className={styles.icon} />
              <h3 className={styles.cardTitle}>{group.title}</h3>
            </div>

            {group.items.map((item, i) => (
              <label key={i} className={styles.row}>
                <div className={styles.leftSide}>
                  <input
                    type="checkbox"
                    checked={selected.some((s) => s.name === item.name)}
                    onChange={() => toggleService(item.name, item.price)}
                    className={styles.checkbox}
                  />
                  <span className={styles.itemName}>{item.name}</span>
                </div>
                <span className={styles.price}>{item.price}</span>
              </label>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
