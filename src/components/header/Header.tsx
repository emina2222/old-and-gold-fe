// components/Header.tsx
"use client";

import React from "react";
import styles from "./header.module.css";
import Navbar from "../nav/Navbar";

interface HeaderProps {
  mode: "home" | "compact";
}

export default function Header({ mode }: HeaderProps) {
  const [compact, setCompact] = React.useState(mode === "compact");
  const [titleVisible, setTitleVisible] = React.useState(false);
  const tickingRef = React.useRef(false);
  const headerRef = React.useRef<HTMLElement | null>(null);

  // Helper: write current header height to a CSS var so the mobile panel can read it
  const setHeaderVar = React.useCallback(() => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 64;
    document.documentElement.style.setProperty("--header-h", `${Math.round(h)}px`);
  }, []);

  React.useEffect(() => {
    if (mode !== "home") {
      setCompact(true);
      setTitleVisible(true);
      // Ensure var is correct for compact pages
      requestAnimationFrame(setHeaderVar);
      return;
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          const shouldCompact = y > 180;
          setCompact(shouldCompact);
          setTitleVisible(shouldCompact);
          setHeaderVar(); // update var on every scroll frame that changes height
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    const onResize = () => setHeaderVar();

    // Initial sync
    requestAnimationFrame(() => {
      onScroll();
      setHeaderVar();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [mode, setHeaderVar]);

  // Also update on layout changes (font loading etc.)
  React.useEffect(() => {
    const i = setInterval(setHeaderVar, 250);
    return () => clearInterval(i);
  }, [setHeaderVar]);

  return (
    <header
      ref={headerRef}
      className={[
        styles.header,
        compact ? styles.headerCompact : styles.headerExpanded,
        mode === "home" ? styles.headerOverlay : styles.headerSolid,
      ].join(" ")}
    >
      <div className={styles.headerInner}>
        <div className={styles.brandWrap}>
          <a href="/" className={styles.logoLink} aria-label="Home">
            <span className={styles.logoMark}>M</span>
          </a>
        </div>

        <div className={`${styles.heroTitle} ${titleVisible ? styles.heroTitleVisible : ""}`}>
          Old & Gold
        </div>

        <div className={styles.navWrapper}>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
