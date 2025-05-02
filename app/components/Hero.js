import styles from './Hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Water+</h1>
        <p>
          Limitless Hydrate redefines hydration with advanced electrolytes and clean ingredients. Designed for performance, recovery, and everyday wellness, our formulas keep you at your best—no matter your lifestyle.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
}