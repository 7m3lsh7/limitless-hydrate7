'use client';

import styles from './ConnectHydrate.module.css';

export default function ConnectHydrate() {
  return (
    <section className={styles.connectHydrate}>
      <h2>Connect & Hydrate</h2>
      <p>Get Water+ tips, inspiring stories, and exclusive moments! Follow us on instagram @limitlesshydrate.</p>
      <div className={styles.cardContainer}>
        <div className={styles.connectHydrateCard}>
          <img src="/5d474791c9213f7eda9939373853992d7db50a1c (1).jpg" alt="Kids Hydrate" />
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
        </div>
        <div className={styles.connectHydrateCard}>
          <img src="/50efb891f32dddd092235e17a0bfc033854cf471.jpg" alt="Glow Hydrate" />
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
        </div>
        <div className={styles.connectHydrateCard}>
          <img src="/275d284b75d2c1e83739685ff36b62140a8c9707.jpg" alt="Original Hydrate" />
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
        </div>
        <div className={styles.connectHydrateCard}>
          <img src="/5d474791c9213f7eda9939373853992d7db50a1c (2).jpg" alt="Charge Hydrate" />
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
        </div>
        <div className={styles.connectHydrateCard}>
          <img src="/5d474791c9213f7eda9939373853992d7db50a1c.jpg" alt="New Hydrate" />
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
          <a href="https://www.instagram.com/limitlesshydrate" target="_blank" className={styles.hoverSquare}></a>
        </div>
      </div>
    </section>
  );
}