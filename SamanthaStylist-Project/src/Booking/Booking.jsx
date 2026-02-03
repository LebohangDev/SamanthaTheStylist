// src/Booking/Booking.jsx
import React, { useState } from "react";
import CalInline from "@calcom/embed-react";
import { motion } from "framer-motion";
import { sectionReveal, fadeInUp, staggerContainer } from "../animations";
import styles from "./Booking.module.css";

function Booking({ selectedServices }) {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });

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
        {/* CAL.COM CALENDAR */}
        <motion.div className={styles.calendarCard} variants={fadeInUp}>
          <h3 className={styles.subheading}>Select a Date & Time</h3>

          <div className={styles.calWrapper}>
            <CalInline
              calLink="rick/example-embed-dynamic-location"
              style={{
                width: "100%",
                height: "650px",
                background: "transparent",
              }}
              config={{
                theme: "light",
                hideEventTypeDetails: false,
                layout: "month_view",
                primaryColor: "#D7AF41", // matches your brand gold
                lightColor: "#FAF7F0", // soft beige background
                darkColor: "#492E3A", // deep brown text
                textColor: "#492E3A",
                borderColor: "#d8c6b0",
              }}
            />
          </div>
        </motion.div>

        {/* BOOKING FORM */}
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

          {["first", "last", "email", "phone"].map((field) => (
            <motion.div
              key={field}
              variants={fadeInUp}
              className={styles.fieldGroup}
            >
              <label>
                {field === "first"
                  ? "First Name"
                  : field === "last"
                    ? "Last Name"
                    : field === "email"
                      ? "Email"
                      : "Phone"}
              </label>

              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                      ? "tel"
                      : "text"
                }
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
            </motion.div>
          ))}

          {/* SUMMARY */}
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
