"use client";

import { Container } from "@mui/material";
import styles from "./aboutUs.module.css";

export default function AboutPage() {
  return (
    <Container maxWidth="md" className={styles.pageRoot}>
      <section className={styles.aboutCard}>
        <div className={styles.aboutInner}>
          {/* Hero / header */}
          <header className={styles.heroHeader}>
            <p className={styles.heroOverline}>O nama</p>
            <h2 className={styles.heroTitle}>Priča iza studija</h2>
            <p className={styles.heroSubtitle}>
              Verujemo u dizajn koji traje duže od jedne sezone. Spojimo
              pažljivo odabrane detalje, toplu estetiku i savremenu tehnologiju
              kako bismo stvorili iskustva koja deluju poznato, ali iznenađujuće
              drugačije.
            </p>
          </header>

          {/* Main layout: story + facts */}
          <div className={styles.aboutLayout}>
            {/* Left – story */}
            <div>
              <h2 className={styles.storyBlockTitle}>Ko smo mi</h2>
              <p className={styles.storyText}>
                <strong>Old & Gold</strong> čini dvoje jednostavnih ljudi. Tu je Mihajlo koji je strastveni majstor i prodavac, uvek u potrazi za savršenim komadom sa pričom. 
                Zatim je tu Emina, kreativna duša sa okom za detalje i ljubavlju prema svemu što ima duh prošlih vremena. 
                Zajedno, oni kombinuju svoje veštine i strasti kako bi stvorili jedinstvenu ponudu koja slavi vrednost starinskih stvari.
              </p>
              <p className={styles.storyText}>
                Radimo sa novim i polovnim predmetima, kao i sa restauriranim komadima, birajući svaki sa posebnom pažnjom.
                Naša misija je da pružimo kupcima ne samo proizvode, već i deo istorije i karaktera koji dolazi sa svakim predmetom.
              </p>
            </div>

            {/* Right – small facts card */}
            <aside className={styles.factsCard}>
              <p className={styles.factsTitle}>Ukratko</p>
              <ul className={styles.factsList}>
                <li className={styles.factsItem}>
                  <span className={styles.factsBullet} />
                  <span className={styles.factsText}>
                    Studio osnovan 2026. godine u Beogradu.
                  </span>
                </li>
                <li className={styles.factsItem}>
                  <span className={styles.factsBullet} />
                  <span className={styles.factsText}>
                    Poseban fokus na polovne artikle restauraciju.
                  </span>
                </li>
                <li className={styles.factsItem}>
                  <span className={styles.factsBullet} />
                  <span className={styles.factsText}>
                    Ne planiramo da stanemo – stalno širimo naš asortiman.
                  </span>
                </li>
                <li className={styles.factsItem}>
                  <span className={styles.factsBullet} />
                  <span className={styles.factsText}>
                    Ograničen broj projekata godišnje – zbog kvaliteta, ne
                    kvantiteta.
                  </span>
                </li>
              </ul>
            </aside>
          </div>

          {/* Values section */}
          <section className={styles.valuesSection}>
            <p className={styles.valuesLabel}>Naše vrednosti</p>

            <div className={styles.valuesGrid}>
              <article className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Posvećenost detaljima</h3>
                <p className={styles.valueText}>
                  Verujemo da nijansa boje, tekstura ili ukrasni element
                  mogu promeniti kompletni doživljaj.
                </p>
              </article>

              <article className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Raznovrsnost kao filozofija</h3>
                <p className={styles.valueText}>
                  Naša ponuda obuhvata predmete različitog karaktera - od restauriranog nameštaja,
                  preko pažljivo odabranih dekoracija, do alata i autentičnih antikviteta.
                </p>
              </article>

              <article className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Dajemo novi život starim stvarima</h3>
                <p className={styles.valueText}>
                  Ne jurimo kratkotrajne trendove – restauriramo i dajemo novi
                  život postojećim resursima kad god je to moguće.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Iz našeg studija</h2>
            <p className={styles.gallerySubtitle}>
              Mali uvid u atmosferu, detalje i trenutke koji inspirišu naš rad.
            </p>

            <div className={styles.galleryGrid}>
              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Radni sto sa skicama"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Radni sto &amp; prve skice
                </figcaption>
              </figure>

              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Detalj enterijera sa vintage dekorom"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Topli studio detalji
                </figcaption>
              </figure>

              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Tim u opuštenoj radnoj atmosferi"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Tim u radu
                </figcaption>
              </figure>

              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Materijali, paleta boja i uzorci"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Palete &amp; materijali
                </figcaption>
              </figure>

              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Detalj sa dizajnom u toku"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Dizajn u nastajanju
                </figcaption>
              </figure>

              <figure className={styles.galleryItem}>
                <img
                  src="images/novo.jpeg"
                  alt="Završni detalji pred predaju projekta"
                  className={styles.galleryImage}
                />
                <figcaption className={styles.galleryCaption}>
                  Završni detalji
                </figcaption>
              </figure>
            </div>
          </section>


          {/* Signature / small closing note */}
          <footer className={styles.signature}>
            <p>Hvala vam što ste zavirili iza kulisa našeg studija.</p>
            <p className={styles.signatureLine}>
              Uz pažnju i malo nostalgije,
              <br />
              vaš Old & Gold.
            </p>
          </footer>
        </div>
      </section>
    </Container>
  );
}
