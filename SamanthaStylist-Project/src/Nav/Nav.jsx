// src/Nav/Nav.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

function Nav() {
  const [active, setActive] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) setShowNav(false);
      else setShowNav(true);
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <motion.header
      className={styles.navWrapper}
      animate={{ y: showNav ? 0 : -80, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.navInner}>
        <div className={styles.logoWrapper}>
          <img src="/logo.png" alt="Logo" className={styles.logoImg} />
        </div>

        <nav className={styles.desktopNav}>
          {["home", "about", "services", "gallery"].map((item) => (
            <div key={item} className={styles.navItemWrapper}>
              <button
                type="button"
                className={`${styles.navItem} ${active === item ? styles.active : ""}`}
                onClick={() => handleScroll(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
              {active === item && <div className={styles.underline} />}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {["home", "about", "services", "gallery"].map((item) => (
              <button
                key={item}
                type="button"
                className={styles.mobileItem}
                onClick={() => handleScroll(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Nav;
