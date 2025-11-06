export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <h1>Old & Gold</h1>
          <p>Inspirisani tradicijom.</p>
        </div>
      </section>

      <section className="container">
        <h2>Featured</h2>
        <p>
          Add your grid of products or collections here. Scrolling past the hero
          will compact the header.
        </p>
        <div style={{ height: 1600 }} />
      </section>
    </>
  );
}
