"use client";

import ContactForm from "@/components/forms/ContactForm";
import styles from "./contact.module.css";

import { Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Box } from "@mui/system";

export default function Page() {
  return (
    <Container maxWidth="md" className={styles.pageRoot}>
      <section className={styles.contactCard}>
        <div className={styles.contactInner}>
          {/* Header */}
          <header className={styles.contactHeader}>
            <p className={styles.contactOverline}>Old & Gold</p>
            <h1 className={styles.contactTitle}>Kontakt</h1>
            <p className={styles.contactIntro}>
              Javite nam se povodom saradnje, pitanja ili posebnih zahteva.
              Odgovorićemo vam sa pažnjom i ličnim pristupom.
            </p>
          </header>

          {/* Company + contact info */}
          <div className={styles.contactContent}>
            <div className={styles.companyBlock}>
              <p className={styles.sectionLabel}>Podaci o kompaniji</p>
              <p className={styles.companyName}>Old & Gold Vintage Shop d.o.o.</p>
              <p className={styles.companyAddress}>
                Ulica Elegancije 9<br />
                11000 Beograd, Srbija
              </p>
            </div>

            <div className={styles.contactBlock}>
              <p className={styles.sectionLabel}>Kontakt</p>

              <div className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} />
                <span className={styles.contactText}>+381 60 123 010</span>
              </div>

              <div className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} />
                <span className={styles.contactText}>
                  info@oldngold.rs
                </span>
              </div>

              <div className={styles.contactItem}>
                <ScheduleIcon className={styles.contactIcon} />
                <span className={styles.contactText}>
                  Ponedeljak – Petak: 09:00–17:00
                  <br />
                  Subota: 12:00–17:00
                  <br />
                  Nedelja: Zatvoreno
                </span>
              </div>
            </div>
          </div>

          <Box mb={15} />

          {/* Form below */}
          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Pišite nam</h2>
            <p className={styles.formSubtitle}>
              Popunite formular ispod, a naš tim će vam odgovoriti u
              najkraćem mogućem roku.
            </p>

            <ContactForm />
          </section>
        </div>
      </section>
    </Container>
  );
}
