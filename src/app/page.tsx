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
        <div
          style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
        <h2>Nove stvari</h2>
        <p>
          Nudimo veliki izbor novih proizvoda koji kombinuju klasičan dizajn sa modernim
          trendovima.
        </p>
          </div>

          <div style={{ flex: "1 1 320px" }}>
        <img
          src="novo.jpg"
          alt="Novi proizvodi"
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 8 }}
        />
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: "2rem" }}>
        <div
          style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
        <img
          src="polovno.jpg"
          alt="Polovne stvari"
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: 8 }}
        />
          </div>

          <div style={{ flex: "1 1 320px" }}>
        <h2>Polovne stvari</h2>
        <p>
          Nudimo veliki izbor polovnih i restauriranih proizvoda sa karakterom i istorijom.
        </p>
          </div>
        </div>
      </section>
    </>
  );
}
