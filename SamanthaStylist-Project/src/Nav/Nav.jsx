// src/Nav/Nav.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

function Nav() {
  const [active, setActive] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "services", "gallery"];

  const handleScroll = (id) => {
    // update URL without reloading the page
    const newPath = id === "home" ? "/" : `/${id}`;
    try {
      window.history.pushState(null, "", newPath);
    } catch (e) {
      // fallback: replaceState if pushState fails for any reason
      window.history.replaceState(null, "", newPath);
    }

    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  useEffect(() => {
    // hide/show nav on scroll
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) setShowNav(false);
      else setShowNav(true);
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll);

    // listen for external activation (App initial load or other code)
    const onActivate = (e) => {
      const id = e?.detail || "home";
      setActive(id);
    };
    window.addEventListener("nav:activate", onActivate);

    // handle browser back/forward (popstate)
    const onPop = () => {
      const raw = window.location.pathname || "/";
      const id = raw.replace(/^\/+|\/+$/g, "") || "home";
      setActive(id);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("nav:activate", onActivate);
      window.removeEventListener("popstate", onPop);
    };
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
          {sections.map((item) => (
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
            {sections.map((item) => (
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
