import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a href="/products">Products</a>
        <a href="/about">About us</a>
        <a href="/community">Community</a>
      </div>
      <div className={styles.logo}>
        <div className={styles.limitless}>LIMITLESS</div>
        <div className={styles.hydrate}>HYDRATE</div>
      </div>
      <div className={styles.buyNowContainer}>
        <a href="/buy" className={styles.buyNow}>Buy Now</a>
      </div>
    </nav>
  );
}