import styles from './Features.module.css';

export default function Features() {
  return (
    <div className={styles.features}>
      <h2>Stay elevated, feel limitless</h2>
      <div className={styles.featureCards}>
        <div className={styles.featureCard}>Hydration</div>
        <div className={styles.featureCard}>Electrolytes</div>
        <div className={styles.featureCard}>Infused</div>
        <div className={styles.featureCard}>Tasting</div>
      </div>
    </div>
  );
}