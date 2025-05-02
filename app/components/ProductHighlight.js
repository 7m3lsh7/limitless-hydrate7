import styles from './ProductHighlight.module.css';

export default function ProductHighlight() {
  console.log('Checking images:', {
    frame159: '/assets/Frame159.png',
    frame158: '/assets/Frame158.png',
    vector: '/assets/Vector.png',
    vector1: '/assets/Vector1.png',
    vector2: '/assets/Vector2.png',
    vector3: '/assets/Vector3.png',
  });

  return (
    <section className={styles.productHighlight}>
      <div className={styles.highlightRow}>
        <div className={`${styles.highlightCard} ${styles.yellowBg} ${styles.topLeft}`}>
          <div className={styles.logo}>
            <div className={styles.limitless}>LIMITLESS</div>
            <div className={styles.hydrate}>HYDRATE</div>
          </div>
          <p className={styles.text}>
            Fuel your body with essential electrolytes, vitamins, and great taste. Whether you’re working out or on the go, Limitless Hydrate keeps you refreshed, replenished, and energized.
          </p>
          <img src="/assets/Isolation_Mode.png" alt="Features Image" className={styles.featuresImage} />
        </div>
        <div className={`${styles.highlightCard} ${styles.imageBg} ${styles.topRight}`}>
          <img src="/assets/Frame159.png" alt="Limitless Hydrate Products" />
        </div>
      </div>
      <div className={styles.highlightRow}>
        <div className={`${styles.highlightCard} ${styles.imageBg} ${styles.bottomLeft}`}>
          <img src="/assets/Frame158.png" alt="Person with Limitless Hydrate" />
        </div>
        <div className={`${styles.highlightCard} ${styles.blueBg} ${styles.bottomRight}`}>
          <div className={styles.logo2}>
          <div className={styles.STAY_HYDRATED}>STAY HYDRATED,</div>
          <div className={styles.FEEL_ELEVATED}>FEEL ELEVATED</div>
          </div>
          <p>
            With a refreshing blend of electrolytes, vitamins, and great taste—designed to keep you energized and balanced throughout your day.
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <img src="/assets/Vector.png" alt="Hydration Icon" />
              <span>HYDRATION, ELEVATED</span>
            </div>
            <div className={styles.featureItem}>
              <img src="/assets/Vector1.png" alt="Lifestyle Icon" />
              <span>TAILORED FOR YOUR LIFESTYLE</span>
            </div>
            <div className={styles.featureItem}>
              <img src="/assets/Vector2.png" alt="Electrolytes Icon" />
              <span>INFUSED WITH ELECTROLYTES, VITAMINS, AND MORE</span>
            </div>
            <div className={styles.featureItem}>
              <img src="/assets/Vector3.png" alt="Taste Icon" />
              <span>AMAZING TASTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}