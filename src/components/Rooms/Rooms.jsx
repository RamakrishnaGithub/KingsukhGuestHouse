// Rooms.jsx
import React from 'react';
import styles from './Rooms.module.css';
import Card from 'react-bootstrap/Card';

const Rooms = () => {
  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomsHeader}>
        <h6>OUR LIVING ROOM</h6>
        <h3>The Most Memorable Rest</h3>
        <h3>Time Starts Here.</h3>
        <div className={styles.underline}></div>
      </div>

      <div className={`row ${styles.cardRow}`}>
        <div className="col-md-6 col-lg-4 mb-4">
          <Card className={styles.roomCard}>
            <Card.Img variant="top" src="images/small.jpg" alt="Cozy Haven Room" />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>Cozy Haven Room</Card.Title>
              <Card.Text className={styles.cardDescription}>
                Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
              </Card.Text>
              <Card.Text className={styles.cardPrice}>Starting from Rs. 1000/night</Card.Text>
              <button className={styles.bookNowBtn}>Book Now</button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <Card className={styles.roomCard}>
            <Card.Img variant="top" src="images/large.jpg" alt="Elegant Suite" />
            <Card.Body>
              <Card.Title className={styles.cardTitle}>Elegant Suite</Card.Title>
              <Card.Text className={styles.cardDescription}>
                Discover luxury and comfort in our Elegant Suite, ideal for an opulent stay.
              </Card.Text>
              <Card.Text className={styles.cardPrice}>Starting from Rs. 2000/night</Card.Text>
              <button className={styles.bookNowBtn}>Book Now</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
