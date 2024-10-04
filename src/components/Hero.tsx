import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.shape}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
          <path d="M0 0v1.4c.6.7 1.1 1.4 1.4 2.2 2 3.8 2.2 6.6 1.8 10.8-.3 3.3-2 8.5-.4 11.6 1.4 2.6 4 2.5 5-.2 1.2-3.4-.3-7.6-.5-11.1-.3-4.3 2.9-6.9 7.4-5.8 3.1.7 4.1 3.3 4.3 6.2.2 2-1.2 8 .1 9.6 3.1 4.3 2.5-4.5 2.5-5.2-.1-4 .1-9.6 4.1-11.6 4.5-2.3 6.1 1 5.5 5-.2 1.4-1.5 10.2 2.7 6.9 2.5-1.9-.4-7.5.9-10.3.8-1.8 2.6-4.2 4.8-4.1 2.4.1 2.7 2.2 4 3.7 3.3 3.8 2.2-1.2 4.8-2.7 5.5-3.1 2 5.6 2.9 7.3 1.4 2.4 3.1.6 3.3-1.3.1-1.5-.5-3.1-.4-4.6.3-4.3 2.9-5.3 5.2-1.2 3.7 6.7 2.8-1.9 6.5-.4 3 1.1.9 9.2.6 11.1-.7 4.1 2.2 5.2 2.7.8.4-3.6-2.8-10.2-.8-13.4 2.1-3.3 6.7-.1 7.9 2.4 2.1 4.2.4 8.7 0 13.1-.2 2 .8 8.9 3.8 4.8 3.1-4.3-2.5-11.6-.2-16.3 1.1-2.2 5.8-3.5 7.2-1 .8 1.4-1 3.4-.3 4.8s2.2 1.2 2.8-.3c.8-2.1-2.2-4.8.1-6.5 1.3-.9 3.5.3 4.9.5 2.4-.1 3.3 0 4.5 2 .7 1.2.4 3 2.3 2.1 1.9-.8 1.7-4.3 4.1-4.9 2.1-.6 4 1.3 5.1 2.9.9 1.4 1.3 3 1.3 4.6 0 1.9-1.4 4.2-.3 6 2.4 4.2 4.2-2.2 3.8-4.4-.5-2.9-2-7.7 2.7-7.5 5.2.3 6.1 5.8 6.4 9.8.1 1.3-1.5 10.4 2 8.4 1.8-1 .5-7.5.6-9.1.1-3.5 1.6-8.3 6.3-7.1 7.6 1.9-2.1 18.2 4.8 18.7 3.7.3 2.3-6.2 2-8.1-.5-3.1-.5-11.4 5.5-8.5 2.2 1.1 1 2.3 1.3 4.3.2 1.8 1.3 3.2 2.3.8 1.1-2.5-.8-6.7 3.9-6.6 8 .1.7 16.4 4.8 15.8 2.8-.4 1-9.3 1.3-11.3.6-3.5 3.5-7.8 7.8-6.9 4.4.9 1.4 6.5 1.4 9.1 0 3.1 3.4 5.9 4.4 1.7.5-2.2-.9-4.4-.6-6.6.3-1.9 1.5-4.1 3.2-5.2 5.3-3.4 4.9 5.2 8.1 4.5 1.4-.3 3-8.1 6.1-4.1.7.9-2 10.3 2.2 8 2-1.1.1-6.7.7-8.9 1.8-6.2 4.7 2.3 6.1 3.1 2.9 1.7 4.6-6.2 6.3-.6.5 1.7.4 3.7.2 5.4-.2 1.6-1.5 4.6-1 6.1.6 1.8 1.7 1.7 2.6.3 1-1.6.4-4.5.2-6.2-.3-2.5-2.4-8.4.2-10.3 3.1-2.1 6.8 2.1 7.7 4.5 1.5 4.3-.3 8.7-.5 13-.1 3.2 3 7.5 4.3 2.4.6-2.4-.2-5.1-.6-7.4-.4-2.3-1.2-6 .1-8.1 1.2-1.9 5.8-2.7 7-.5.9 1.6-1.2 5.2.6 5.6 2.4.6 2-2.3 1.8-3.4-.3-1.5-1.1-3.2.4-4.3 1.2-.9 4.7.3 5.9.5 2.4.5 2.5 1.4 3.6 3.3 1.2 2.1 1.4 1.7 3-.1 1.3-1.5 1.7-3.6 4-3.7 1.8-.1 3.4 1.7 4.2 3 1.4 2.2 1.3 4.1 1 6.5-.2 1.4-1 3.8.5 4.9 3.9 2.9 3.2-4.6 2.9-6.3-.8-3.9.4-8.1 5.4-5.6 3.8 1.9 4.1 6.7 4.1 10.5 0 1.6-1.2 5.8.1 6.9.8.7 1.8.3 2.4-.5 1.1-1.5-.1-6.7 0-8.5.1-3.5.9-6.9 4.9-7.4 3.6-.6 6.7 1.2 6.8 4.9.1 3.9-2 8.2-.6 12 .9 2.4 2.9 2.9 4.6.9 2.4-2.8.4-9 0-12.3-.4-4.2-.2-7 1.8-10.8.3-.6.6-1.1.8-1.5V0H0z" />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>I am Professional Web Designer And Developer.</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className={styles.cta}>
            <a href="#" className={styles.ctaButton}>Hire me</a>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
        <Image 
  src="/WIN_20240915_01_06_11_Pro.jpg"
  alt="Description of the image"
  width={500} // Specify the width you want
  height={300} // Specify the height you want
  layout="responsive" // This makes the image responsive
/>

        </div>
      </div>
    </section>
  );
};

export default Hero;
