'use client';

import styles from './EmailSignup.module.css';

export default function EmailSignup() {
  return (
    <div className={styles.emailSignup}>
      <input
        type="email"
        placeholder="Enter your email to stay refreshed!"
        onFocus={(e) => (e.target.style.outline = 'none')}
      />
      <button>Send</button>
    </div>
  );
}