import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.copyrightSection}>
          <div className={styles.copyrightWrapper}>
            <h2 className={styles.copyrightText}>
              Copyright © {currentYear} - Adam_dev
            </h2>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
