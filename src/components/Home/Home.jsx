import React from 'react';
import styles from './Home.module.css';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div className={styles['Home-Container']}>
      <h6>Simple - Unique - Friendly</h6>
      <h1>Make Yourself At Home</h1>
      <h1>In Our <span> Guest House.</span></h1>
      <div className={styles['Booking-Container']}>
      <Button  className={styles['book-now-btn']}>Search Now</Button>
      </div>
    </div>
  );
};

export default Home;
