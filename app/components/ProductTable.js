export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.Name}</h3>
      <p>${product.price}</p>
      <button>Learn More</button>
    </div>
  );
}