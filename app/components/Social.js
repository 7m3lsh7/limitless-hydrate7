import styles from './Social.module.css';

export default function Social() {
  return (
    <div className={styles.social}>
      <h2>Connect & Hydrate</h2>
      <p>Get Water+ tips, stories, and exclusive moments! @limitlesshydrate</p>
      <div className={styles.socialImages}>
        <img src="https://via.placeholder.com/150x150" alt="Social 1" />
        <img src="https://via.placeholder.com/150x150" alt="Social 2" />
        <img src="https://via.placeholder.com/150x150" alt="Social 3" />
      </div>
    </div>
  );
}