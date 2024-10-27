// About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImageContainer}>
        <img src="images/out.jpg" alt="About Us" className={styles.aboutImage} />
      </div>
      <div className={styles.aboutTextContainer}>
        <h2>About Us</h2>
        <div className={styles.underline}></div>
        <h1>The Best Holidays Start Here!</h1>
        <p>
          Embark on a tranquil journey at our Kingsukh Guest House, surrounded by scenic attractions like Biharinath Hill and Susunia Hill. Enjoy comfort, delightful meals, and the beauty of our garden oasis. Explore the hidden gems of Purulia and create lasting memories.
        </p>
        <p>
          <i className="bi bi-geo-alt-fill"></i> <a href="#">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
        </p>
        <p>
          <i className="bi bi-telephone-inbound-fill"></i> <a href="tel:+919007062180"> +91 9007062180</a>
        </p>
        <button className={styles.bookNowBtn}>Book Now</button>
      </div>
    </div>
  );
};

export default About;
