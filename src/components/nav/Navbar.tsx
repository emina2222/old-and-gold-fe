"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!panelRef.current || !btnRef.current) return;
      if (!panelRef.current.contains(target) && !btnRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when open (mobile)
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className={styles.shell}>
      {/* Desktop links */}
      <nav className={styles.navDesktop} aria-label="Primary">
        <Link className={`${styles.link} ${isActive("/katalog") ? styles.active : ""}`} href="/katalog">Katalog</Link>
        <Link className={`${styles.link} ${isActive("/o-nama") ? styles.active : ""}`} href="/o-nama">O nama</Link>
        <Link className={`${styles.link} ${isActive("/kontakt") ? styles.active : ""}`} href="/kontakt">Kontakt</Link>
      </nav>

      {/* Mobile trigger */}
      <button
        ref={btnRef}
        className={styles.menuBtn}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {/* 3-dot icon (accessible, no external lib) */}
        <span className={styles.dots} aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </button>

      {/* Mobile panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.panelInner}>
          <Link className={styles.panelLink} href="/katalog" onClick={() => setOpen(false)}>
            Katalog
          </Link>
          <Link className={styles.panelLink} href="/o-nama" onClick={() => setOpen(false)}>
            O nama
          </Link>
          <Link className={styles.panelLink} href="/kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
