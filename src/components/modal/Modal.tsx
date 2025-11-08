"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

type ModalProps = {
  open: boolean;
  title: string;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, title, className, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll + focus management
  useEffect(() => {
    if (!mounted) return;
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first focusable element inside, fallback to dialog
    const root = dialogRef.current;
    if (root) {
      const focusables = root.querySelectorAll<HTMLElement>(
        'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0] ?? root;
      first.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, mounted]);

  // Esc + Tab trap
  useEffect(() => {
    if (!mounted || !open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") trapFocus(e);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, mounted, onClose]);

  function trapFocus(e: KeyboardEvent) {
    const root = dialogRef.current;
    if (!root) return;

    const focusables = root.querySelectorAll<HTMLElement>(
      'a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  }

  if (!mounted || !open) return null;

  const modalNode = (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={styles.modal}
        ref={dialogRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span
            className={styles.close}
            onClick={onClose}
            aria-label="Zatvori"
            role="button">
            ✕
          </span>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalNode, document.body);
}
