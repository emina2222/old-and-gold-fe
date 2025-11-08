export default function Catalog() {
  const items = [{ id: "p1", title: "Vintage Lamp", price: 120 }];
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-semibold">Katalog</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map(i => (
          <li key={i.id} className="rounded-2xl border p-4">
            <div className="h-40 rounded-xl bg-neutral-100" />
            <h2 className="mt-3 font-medium">{i.title}</h2>
            <p className="text-sm text-neutral-600">€{i.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
