// src/Booking/Booking.jsx
// custom implementation
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp, staggerContainer } from "../animations";
import styles from "./Booking.module.css";

function Booking({ selectedServices }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });

  const slots = {
    "2026-02-01": ["10:00 AM", "12:00 PM", "3:00 PM"],
    "2026-02-02": ["11:00 AM", "1:00 PM", "4:00 PM"],
    "2026-02-03": ["9:00 AM", "2:00 PM", "5:00 PM"],
  };

  const dates = Object.keys(slots);

  const totalPrice =
    selectedServices?.reduce((sum, s) => sum + s.price, 0) || 0;

  return (
    <motion.section
      className={styles.bookingWrapper}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className={styles.heading}>Make a booking with me</h2>

      <div className={styles.layout}>
        <motion.div className={styles.calendarCard} variants={fadeInUp}>
          <h3 className={styles.subheading}>Select a Date</h3>

          <div className={styles.calendarGrid}>
            {dates.map((date) => (
              <button
                key={date}
                type="button"
                className={`${styles.dateBtn} ${
                  selectedDate === date ? styles.activeDate : ""
                }`}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedSlot(null);
                }}
              >
                {date}
              </button>
            ))}
          </div>

          {selectedDate && (
            <>
              <h3 className={styles.subheading}>Available Slots</h3>
              <div className={styles.slotGrid}>
                {slots[selectedDate].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`${styles.slotBtn} ${
                      selectedSlot === slot ? styles.activeSlot : ""
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>

        <motion.div
          className={styles.formCard}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 variants={fadeInUp} className={styles.subheading}>
            Your Information
          </motion.h3>

          <motion.div variants={fadeInUp} className={styles.fieldGroup}>
            <label>First Name</label>
            <input
              type="text"
              value={form.first}
              onChange={(e) => setForm({ ...form, first: e.target.value })}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.fieldGroup}>
            <label>Last Name</label>
            <input
              type="text"
              value={form.last}
              onChange={(e) => setForm({ ...form, last: e.target.value })}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.fieldGroup}>
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.fieldGroup}>
            <label>Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.summary}>
            <h4>Booking Summary</h4>

            <div className={styles.summaryBox}>
              <p className={styles.summaryLabel}>Selected Services:</p>
              {selectedServices?.length ? (
                selectedServices.map((s, i) => (
                  <p key={i} className={styles.summaryItem}>
                    {s.name} — {s.price}
                  </p>
                ))
              ) : (
                <p className={styles.summaryItem}>No services selected</p>
              )}

              <p className={styles.summaryLabel}>Selected Date:</p>
              <p className={styles.summaryItem}>{selectedDate || "None"}</p>

              <p className={styles.summaryLabel}>Selected Time:</p>
              <p className={styles.summaryItem}>{selectedSlot || "None"}</p>

              <p className={styles.total}>
                Total Price: <span>{totalPrice}</span>
              </p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            type="button"
            className={styles.primary}
          >
            BOOK NOW
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Booking;
