"use client";

import { Container } from "@mui/material";
import { useMemo, useState } from "react";
import styles from "./catalog.module.css";

type CategoryValue = "namestaj" | "rasveta" | "dekor" | "zidni";
type SortOption = "default" | "priceAsc" | "priceDesc";
type TypeFilter = "all" | "novo" | "polovno" | "restaurirano";

const items = [
  {
    id: 1,
    name: "Drvena komoda sa mesing ručkama",
    tag: "restaurirano",
    image: "/images/novo.jpeg",
    era: "70-e",
    origin: "Jugoslavija",
    price: "14.500 RSD",
    priceValue: 14500,
    category: "namestaj" as CategoryValue,
    status: "jedinstveni komad",
  },
  {
    id: 2,
    name: "Set keramičkih šolja",
    tag: "novo",
    image: "/images/novo.jpeg",
    era: "savremeno",
    origin: "Evropa",
    price: "3.200 RSD",
    priceValue: 3200,
    category: "dekor" as CategoryValue,
    status: "ograničeno izdanje",
  },
  {
    id: 3,
    name: "Industrijska stolica na podešavanje",
    tag: "polovno",
    image: "/images/novo.jpeg",
    era: "80-e",
    origin: "Nemačka",
    price: "9.800 RSD",
    priceValue: 9800,
    category: "namestaj" as CategoryValue,
    status: "studio favorit",
  },
  {
    id: 4,
    name: "Zidni sat sa patinom",
    tag: "restaurirano",
    image: "/images/novo.jpeg",
    era: "50-e",
    origin: "Francuska",
    price: "7.400 RSD",
    priceValue: 7400,
    category: "zidni" as CategoryValue,
    status: "ukrasni akcenat",
  },
  {
    id: 5,
    name: "Metalna lampa za radni sto",
    tag: "polovno",
    image: "/images/novo.jpeg",
    era: "60-e",
    origin: "Skandinavija",
    price: "6.900 RSD",
    priceValue: 6900,
    category: "rasveta" as CategoryValue,
    status: "idealno za studio",
  },
  {
    id: 6,
    name: "Tkan plakat u ramu",
    tag: "novo",
    image: "/images/novo.jpeg",
    era: "savremeno",
    origin: "lokalni dizajn",
    price: "4.600 RSD",
    priceValue: 4600,
    category: "zidni" as CategoryValue,
    status: "limitirana serija",
  },
];

const categories = [
  { label: "Nameštaj", value: "namestaj" },
  { label: "Rasveta", value: "rasveta" },
  { label: "Dekor", value: "dekor" },
  { label: "Zidni detalji", value: "zidni" },
];

export default function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<CategoryValue[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const filteredAndSortedItems = useMemo(() => {
    let result = items;

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    // Type filter
    if (typeFilter !== "all") {
      result = result.filter((item) => item.tag === typeFilter);
    }

    // Sorting
    if (sortOption === "priceAsc") {
      result = [...result].sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortOption === "priceDesc") {
      result = [...result].sort((a, b) => b.priceValue - a.priceValue);
    }

    return result;
  }, [selectedCategories, sortOption, typeFilter]);

  const handleCategoryToggle = (value: CategoryValue) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <Container maxWidth="lg" className={styles.pageRoot}>
      {/* Header */}
      <header className={styles.catalogHeader}>
        <p className={styles.catalogOverline}>katalog</p>
        <h1 className={styles.catalogTitle}>Predmeti sa karakterom</h1>
      </header>

      {/* Layout: left = filters, right = products */}
      <div className={styles.mainLayout}>
        {/* Left sidebar */}
        <aside className={styles.filtersSidebar}>
          <p className={styles.filtersTitle}>Filteri</p>
          <p className={styles.filtersSubtitle}>
            Odaberite kategorije koje vas zanimaju. Možete kombinovati više
            njih istovremeno.
          </p>

          <p className={styles.filterGroupLabel}>Kategorije</p>
          <div className={styles.checkboxList}>
            {categories.map((cat) => (
              <label key={cat.value} className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.value as CategoryValue)}
                  onChange={() => handleCategoryToggle(cat.value as CategoryValue)}
                />
                <span>{cat.label}</span>
              </label>
            ))}
          </div>
          <p className={styles.checkboxHint}>
            Ako ništa nije označeno, prikazujemo ceo katalog.
          </p>
        </aside>

        {/* Right side */}
        <section className={styles.productsSection}>
          {/* Tip proizvoda + sorting */}
          <div className={styles.typeFilterBar}>
            <div className={styles.typeFilterLeft}>
              <span className={styles.typeFilterLabel}>Tip proizvoda</span>
              <div className={styles.typeChipGroup}>
                {[
                  { label: "Sve", value: "all" },
                  { label: "Novo", value: "novo" },
                  { label: "Polovno", value: "polovno" },
                  { label: "Restaurirano", value: "restaurirano" },
                ].map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setTypeFilter(t.value as TypeFilter)}
                    className={`${styles.typeChip} ${
                      typeFilter === t.value ? styles.typeChipActive : ""
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.sortSelectWrapper}>
              <span className={styles.sortLabel}>Sortiranje</span>
              <select
                className={styles.sortSelect}
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="default">Podrazumevano</option>
                <option value="priceAsc">Cena: rastuće</option>
                <option value="priceDesc">Cena: opadajuće</option>
              </select>
            </div>
          </div>

          {/* Products grid */}
          <div className={styles.productsGrid}>
            {filteredAndSortedItems.map((item) => (
              <article key={item.id} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.productImage}
                  />
                  <span className={styles.productTag}>{item.tag}</span>
                </div>
                <div className={styles.productBody}>
                  <h2 className={styles.productTitle}>{item.name}</h2>
                  <p className={styles.productMeta}>
                    {item.era} · {item.origin}
                  </p>
                  <div className={styles.productMetaRow}>
                    <span className={styles.productPrice}>{item.price}</span>
                    <span className={styles.productStatus}>{item.status}</span>
                  </div>
                  <p className={styles.productNote}>
                    Svaki predmet se može pogledati uživo u studiju uz
                    dogovoreni termin.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.catalogFooter}>
        <p className={styles.catalogFooterHighlight}>
          Ako tražite nešto specifično, rado ćemo potražiti komad baš za vas.
        </p>
      </footer>
    </Container>
  );
}
