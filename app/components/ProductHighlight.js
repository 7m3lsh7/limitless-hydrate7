"use client";

import { useEffect, useState } from 'react';
import styles from './ProductHighlight.module.css';

export default function ProductHighlight() {
  const [images, setImages] = useState({
    frame159: '',
    frame158: '',
    Isolation_Mode: '',
    vector: '',
    vector1: '',
    vector2: '',
    vector3: '',
  });

  useEffect(() => {
    async function fetchImageByName(name) {
      try {
        const res = await fetch(`http://localhost:1337/api/images?filters[name][$eq]=${name}&populate=*`);
        if (!res.ok) {
          console.error(`Failed to fetch image for name ${name}. Status: ${res.status}`);
          return '';
        }
        const data = await res.json();
        console.log(`Full Response for ${name}:`, data);
        if (!data?.data || data.data.length === 0) {
          console.error(`No image found for name: ${name}`);
          return '';
        }
        const imageData = data.data[0]?.image; // تعديل الـ path هنا
        console.log(`Image Data for ${name}:`, imageData);
        if (!imageData) {
          console.error(`No image data found for name: ${name}`);
          return '';
        }
        const url = imageData?.url || '';
        console.log(`URL for ${name}:`, url);
        if (!url) {
          console.error(`No image URL found for name: ${name}`);
        }
        return url;
      } catch (error) {
        console.error(`Error fetching image for name ${name}:`, error);
        return '';
      }
    }

    async function fetchImages() {
      const imageNames = ['frame159', 'frame158', 'Isolation_Mode', 'vector', 'vector1', 'vector2', 'vector3'];
      const imagePromises = imageNames.map(name => fetchImageByName(name));
      const imageUrls = await Promise.all(imagePromises);
      console.log('All image URLs:', imageUrls);

      setImages({
        frame159: imageUrls[0],
        frame158: imageUrls[1],
        Isolation_Mode: imageUrls[2],
        vector: imageUrls[3],
        vector1: imageUrls[4],
        vector2: imageUrls[5],
        vector3: imageUrls[6],
      });
    }

    fetchImages();
  }, []);

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
          <img src={`http://localhost:1337${images.Isolation_Mode}`} alt="Features Image" className={styles.featuresImage} />
        </div>
        <div className={`${styles.highlightCard} ${styles.imageBg} ${styles.topRight}`}>
          <img src={`http://localhost:1337${images.frame159}`} alt="Limitless Hydrate Products" />
        </div>
      </div>
      <div className={styles.highlightRow}>
        <div className={`${styles.highlightCard} ${styles.imageBg} ${styles.bottomLeft}`}>
          <img src={`http://localhost:1337${images.frame158}`} alt="Person with Limitless Hydrate" />
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
              <img src={`http://localhost:1337${images.vector}`} alt="Hydration Icon" />
              <span>HYDRATION, ELEVATED</span>
            </div>
            <div className={styles.featureItem}>
              <img src={`http://localhost:1337${images.vector1}`} alt="Lifestyle Icon" />
              <span>TAILORED FOR YOUR LIFESTYLE</span>
            </div>
            <div className={styles.featureItem}>
              <img src={`http://localhost:1337${images.vector2}`} alt="Electrolytes Icon" />
              <span>INFUSED WITH ELECTROLYTES, VITAMINS, AND MORE</span>
            </div>
            <div className={styles.featureItem}>
              <img src={`http://localhost:1337${images.vector3}`} alt="Taste Icon" />
              <span>AMAZING TASTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}