import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Contact</h2>
          <h1 className={styles.title}>Get In Touch</h1>
        </div>
        <section className={styles.contactSection}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.googleMap}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645" 
                width="100%" 
                height="300" 
                frameBorder="0" 
                style={{border:0}} 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
