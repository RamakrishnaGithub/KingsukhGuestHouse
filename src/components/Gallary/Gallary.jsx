import React from 'react';
import styles from './Gallary.module.css';

const Gallary = () => {
    return (
        <div className={styles['Gallary-Container']}>
            <div className={styles.header}>
                <h4>GALLERY</h4>
            </div>
            <div className={styles.grid}>
                <img src="images/out.jpg" alt="Outdoor view" className={styles.image} />
                <img src="images/ayodhya.webp" alt="Ayodhya" className={styles.image} />
                <img src="images/baranti.webp" alt="Baranti" className={styles.image} />
                <img src="images/flower.jpg" alt="Flower" className={styles.image} />
                <img src="images/large.jpg" alt="Large view" className={styles.image} />
                <img src="images/mithonDam.webp" alt="Mithon Dam" className={styles.image} />
                <img src="images/palash.webp" alt="Palash" className={styles.image} />
                <img src="images/recep.jpg" alt="Reception" className={styles.image} />
                <img src="images/room1.jpg" alt="Room" className={styles.image} />
                <img src="images/small.jpg" alt="Small view" className={styles.image} />
            </div>
        </div>
    );
};

export default Gallary;
