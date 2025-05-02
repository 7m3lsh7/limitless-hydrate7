import styles from './Footer.module.css';
import EmailSignup from './EmailSignup';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <div className={styles.limitless}>LIMITLESS</div>
            <div className={styles.hydrate}>HYDRATE</div>
          </div>
          <h3>Stay Hydrated, Stay Updated!</h3>
          <p>Get hydration tips & product updates!</p>
          <EmailSignup />
        </div>

        <div className={styles.footerSection}>
          <h4>Our Products</h4>
          <p><a href="#">Limitless Hydrate Original</a></p>
          <p><a href="#">Limitless Hydrate Glow</a></p>
          <p><a href="#">Limitless Hydrate Kids</a></p>
        </div>

        <div className={styles.footerSection}>
          <h4>Need Help?</h4>
          <p><a href="#">FAQs</a></p>
          <p><a href="#">Articles</a></p>
          <p><a href="#">Lifestyle & Wellness</a></p>
        </div>

        <div className={styles.footerSection}>
          <h4>About</h4>
          <p><a href="#">Who we are</a></p>
          <p><a href="#">Our Philosophy</a></p>
          <p><a href="#">Quality Assurance</a></p>
        </div>

        <div className={styles.footerSection}>
          <h4>Community</h4>
          <p><a href="#">Our Ambassador</a></p>
          <p><a href="#">Water+ Community</a></p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="X (Twitter)" />
            </a>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footerBottom}>
        <div>© 2025 Limitless Hydrate. All rights reserved.</div>
        <div>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}