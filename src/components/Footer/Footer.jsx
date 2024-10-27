import React from 'react';
import styles from './Footer.module.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className={styles['Footer-Container']}>        
      <div className={styles.row}>
        
        <div className={styles['col-md-3']}>
          <h4>Kingsukh Guest House</h4>
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <Button  className={styles['book-now-btn']}>Book Now</Button>

        </div>

        <div className={styles['col-md-3']}>
          <h4>QUICK LINKS</h4>
          <p><a href="#">Browse Destinations</a></p>
          <p><a href="#">Special Offers & Packages</a></p>
          <p><a href="#">Room Types & Amenities</a></p>
          <p><a href="#">Customer Reviews & Ratings</a></p>
          <p><a href="#">Travel Tips & Guides</a></p>
        </div>

        <div className={styles['col-md-3']}>
          <h4>OUR SERVICES</h4>
          <p><a href="#">Concierge Assistance</a></p>
          <p><a href="#">Flexible Booking Options</a></p>
          <p><a href="#">Airport Transfers</a></p>
          <p><a href="#">Wellness & Recreation</a></p>
          <p><a href="#">Travel Tips & Guides</a></p>
        </div>

        <div className={styles['col-md-3']}>
          <h4>CONTACT US</h4>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
          <p><a href="tel:+919007062180">+91 9007062180</a></p>
          <div>
            <img src="/images/twitter.png" alt="Twitter" />
            <img src="/images/youtube.png" alt="YouTube" />
            <img src="/images/instagram.png" alt="Instagram" />
            <img src="/images/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
      <div>Copyright © 2024 Kingsukh Guest House. All rights reserved.</div>
    </div>
  );
};

export default Footer;
