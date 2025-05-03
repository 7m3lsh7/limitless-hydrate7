'use client';

import { useEffect } from 'react';
import styles from './CardSection.module.css';

export default function CardSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach(card => {
      const imageUrl = card.getAttribute('data-image');
      const gradientOverlay = card.querySelector(`.${styles.gradientOverlay}`);
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;

      img.onload = function () {
        img.style.display = 'none';
        document.body.appendChild(img);
        try {
          const colorThief = new ColorThief();
          const dominantColor = colorThief.getColor(img);
          const palette = colorThief.getPalette(img, 2);
          const color1 = `rgb(${dominantColor.join(',')})`;
          const color2 = `rgb(${palette[1].join(',')})`;
          gradientOverlay.style.background = `
            linear-gradient(-45deg, ${color1}, ${color2}),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.3))
          `;
          gradientOverlay.style.opacity = '1';
        } catch (e) {
          console.error('Error extracting colors:', e);
        }
        document.body.removeChild(img);
      };

      img.onerror = function () {
        console.warn('Failed to load image:', imageUrl);
      };
    });
  }, []);

  return (
    <section className={styles.cardSection}>
      <h1>Choose Your Refreshment</h1>
      <p>Refreshing flavors and essential nutrients tailored to keep you energized and hydrated.</p>
      <div className={`${styles.cardGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full`}>
        <div className={styles.card} data-image="/Image.png">
          <div className={styles.backgroundLayer} style={{ backgroundImage: "url('/Image.png')" }}></div>
          <div className={styles.gradientOverlay}></div>
          <h2 className={styles.limitlessText}>LIMITLESS HYDRATE</h2>
          <h3 className={styles.subText}>Glow</h3>
          <p className="mb-4">Electrolyte drink mix for Hair, Skin & Nails Health</p>
          <img src="/Image.png" alt="Glow" className="mx-auto mb-4 max-h-48 object-contain relative z-10" />
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.card} data-image="/Image (2).png">
          <div className={styles.backgroundLayer} style={{ backgroundImage: "url('/Image (2).png')" }}></div>
          <div className={styles.gradientOverlay}></div>
          <h2 className={styles.limitlessText}>LIMITLESS HYDRATE</h2>
          <h3 className={styles.subText}>Charge</h3>
          <p className="mb-4">Essential electrolyte drink mix</p>
          <img src="/Image (2).png" alt="Charge" className="mx-auto mb-4 max-h-48 object-contain relative z-10" />
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.card} data-image="/Image (1).png">
          <div className={styles.backgroundLayer} style={{ backgroundImage: "url('/Image (1).png')" }}></div>
          <div className={styles.gradientOverlay}></div>
          <h2 className={styles.limitlessText}>LIMITLESS HYDRATE</h2>
          <h3 className={styles.subText}>Original</h3>
          <p className="mb-4">Essential electrolyte drink mix</p>
          <img src="/Image (1).png" alt="Original" className="mx-auto mb-4 max-h-48 object-contain relative z-10" />
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.card} data-image="/Image (3).png">
          <div className={styles.backgroundLayer} style={{ backgroundImage: "url('/Image (3).png')" }}></div>
          <div className={styles.gradientOverlay}></div>
          <h2 className={styles.limitlessText}>LIMITLESS HYDRATE</h2>
          <h3 className={styles.subText}>Kids</h3>
          <p className="mb-4">Essential electrolyte drink mix for kids</p>
          <img src="/Image (3).png" alt="Kids" className="mx-auto mb-4 max-h-48 object-contain relative z-10" />
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
}