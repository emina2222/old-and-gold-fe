import { VisitCatalogButton } from "@/components/ui/VisitCatalogButton";
import style from './home.module.css';
import { SubscribeSection } from "@/components/ui/SubscribeSection";

export default function HomePage() {
  return (
    <>
      <section className={style.hero}>
        <div className={style.heroContent}>
          <h1>Old & Gold</h1>
          <p>Inspirisani tradicijom.</p>
        </div>
      </section>

      <section className={style.container}>
        <article className={style.splitCard}>
          <div className={style.copy}>
            <span className={style.eyebrow}>Novo</span>
            <h2>Nova ponuda</h2>
            <p>Nudimo veliki izbor novih modela i opreme po pažljivo odabranim cenama.</p>
            <VisitCatalogButton url="/katalog" />
          </div>
          <div className={style.media}>
            <img src="novo.jpeg" alt="Novo – primer nove opreme" loading="lazy" />
          </div>
        </article>
      </section>

      <section className={style.container}>
        <article className={`${style.splitCard} ${style.reverse}`}>
          <div className={style.media}>
            <img src="polovno.jpeg" alt="Polovno – primer očuvane opreme" loading="lazy" />
          </div>
          <div className={style.copy}>
            <span className={style.eyebrow}>Polovno</span>
            <h2>Provereno i očuvano</h2>
            <p>Nudimo veliki izbor polovnih artikala koji prolaze detaljnu proveru kvaliteta.</p>
            <VisitCatalogButton url="/katalog" />
          </div>
        </article>
      </section>

      <section className={style.container}>
        <article className={style.splitCard}>
          <div className={style.copy}>
            <span className={style.eyebrow}>Restaurirano</span>
            <h2>Restaurirani artikli</h2>
            <p>Nudimo veliki izbor restauriranih proizvoda koji su pažljivo obnovljeni kako bi
              zadržali svoj šarm i kvalitet.</p>
            <VisitCatalogButton url="/katalog" />
          </div>
          <div className={style.media}>
            <img src="restaurirano.jpeg" alt="Restaurirano – primer" loading="lazy" />
          </div>
        </article>
      </section>

      <SubscribeSection />
    </>
  );
}
