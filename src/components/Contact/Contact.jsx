import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // State for errors
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate inputs
    const validateInputs = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?\d{10}$/; // Adjust according to your phone number format

        if (!formData.firstName) {
            newErrors.firstName = true; // Mark as error
        }
        if (!formData.lastName) {
            newErrors.lastName = true; // Mark as error
        }
        if (!formData.email) {
            newErrors.email = true; // Mark as error
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = true; // Mark as error
        }
        if (!formData.phone) {
            newErrors.phone = true; // Mark as error
        } else if (!phonePattern.test(formData.phone)) {
            newErrors.phone = true; // Mark as error
        }
        if (!formData.message) {
            newErrors.message = true; // Mark as error
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (validateInputs()) {
            // Validation successful, return the object
            console.log('Form data:', formData);
            // Optionally reset the form
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            setErrors({});
        }
    };

    return (
        <div className={styles['Contact-Container']}>
            <div className={styles.row}>
                {/* Contact Information Section */}
                <div className={`${styles.col} ${styles['col-md-6']}`}>
                    <h6 className={styles.title}>Contact Info</h6>
                    <p className={styles.info}><i className="bi bi-geo-alt-fill"></i> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                    <p className={styles.info}><i className="bi bi-envelope-fill"></i><a href="mailto:kkghosh0099@gmail.com"> kkghosh0099@gmail.com</a></p>
                    <p className={styles.info}><i className="bi bi-telephone-fill"></i> +91 9007062180</p>
                </div>

                {/* Contact Form Section */}
                <div className={`${styles.col} ${styles['col-md-6']}`}>
                    <h6 className={styles.title}>Send a Message</h6>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className={`${styles.input} ${errors.firstName ? styles.errorInput : ''}`} // Add error class if error exists
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className={`${styles.input} ${errors.lastName ? styles.errorInput : ''}`} // Add error class if error exists
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`} // Add error class if error exists
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`} // Add error class if error exists
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`} // Add error class if error exists
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </form>
                </div>
            </div>
            <div className={styles['Location']}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5099249223026!2d86.85810198881435!3d23.586038448882043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1729994278723!5m2!1sen!2sin"
                    width="100%"
                    height="350px"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
