// Header.jsx
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Header.module.css';

const Header = () => {
  // State to control offcanvas visibility
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Toggle function to open and close offcanvas
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  // Function to close offcanvas when a link is clicked
  const handleLinkClick = () => setShowOffcanvas(false);

  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`${styles.navbar} mb-1`}>
          <Container fluid>
            <Navbar.Brand href="#home" className={`${styles['navbar-brand']}`}>
              Kingsukh Guest House
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffcanvas} />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={toggleOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={styles['offcanvas-header']}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={styles['offcanvas-title']}>
                  Kingsukh Guest House
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles['offcanvas-body']}>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#home" className={styles['nav-link']} onClick={handleLinkClick}>Home</Nav.Link>
                  <Nav.Link href="#about" className={styles['nav-link']} onClick={handleLinkClick}>About</Nav.Link>
                  <Nav.Link href="#services" className={styles['nav-link']} onClick={handleLinkClick}>Services</Nav.Link>
                  <Nav.Link href="#rooms" className={styles['nav-link']} onClick={handleLinkClick}>Rooms</Nav.Link>
                  <Nav.Link href="#gallery" className={styles['nav-link']} onClick={handleLinkClick}>Gallery</Nav.Link>
                  <Nav.Link href="#contact" className={styles['nav-link']} onClick={handleLinkClick}>Contact</Nav.Link>
                </Nav>
                <Form className="d-flex pe-4 fw-800">
                  <Button variant="outline-success" className={styles['book-now-btn']}>Book Now</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
