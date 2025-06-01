import ProductCard from "../Cards/ProductCard"; // já criado por você

const relatedProducts = [
  {
    id: 101,
    title: "Vela Aromática Lavanda",
    price: 49.9,
    image: "/images/vela1.jpg",
  },
  {
    id: 102,
    title: "Vela de Eucalipto",
    price: 39.9,
    image: "/images/vela2.jpg",
  },
  {
    id: 103,
    title: "Vela de Baunilha",
    price: 59.9,
    image: "/images/vela3.jpg",
  },
];

export default function RelatedProducts() {
  return (
    <section>
      <h2>Produtos Relacionados</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
