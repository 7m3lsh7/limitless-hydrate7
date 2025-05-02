import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <h3>{product.Name}</h3>
      <p>${product.price}</p>
      <button>Learn More</button>
    </div>
  );
}