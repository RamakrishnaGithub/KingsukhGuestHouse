import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <div className={styles['Services-container']}>
            <div className={styles['Tile-1']}>
                <div className={styles['Services']}>
                    <h6 className={styles.fadeIn}>SERVICES</h6>
                    <h2 className={styles.fadeInDelayed}>Strive Only For The Best.</h2>
                    <p className={styles.fadeInDelayed}><i className="bi bi-shield-lock-fill"></i> High Class Security</p>
                    <p className={styles.fadeInDelayed}><i className="bi bi-clock-fill"></i> 24 Hours Room Service</p>
                    <p className={styles.fadeInDelayed}><i className="bi bi-egg-fried"></i> Restaurant</p>
                    <p className={styles.fadeInDelayed}><i className="bi bi-map-fill"></i> Tourist Guide Support</p>
                </div>
            </div>
            <div className={styles['Tile-2']}>
                <div className={styles.row}>
                    <div className={styles['col-md-6']}>
                        <h1>100+</h1>
                        <p>Bookings Completed</p>
                    </div>
                    <div className={styles['col-md-6']}>
                        <h1>150+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
