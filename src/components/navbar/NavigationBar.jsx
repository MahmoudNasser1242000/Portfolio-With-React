import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import styles from "./navbar.module.css";
import { NavLink, Link } from 'react-router-dom';

export default function NavigationBar() {
    const activeLink = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "#1ABC9C" : "",
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" className={`${styles.nav_bar} py-4`} data-bs-theme="dark">
            <Container>
                <h1>
                    <Link to="" className={`${styles.nav_title} fw-bold`}>START FRAMEWORK</Link>
                </h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <NavLink to="about" className={`${styles.nav_link} fw-bold rounded-1`} style={activeLink}>About</NavLink>
                        <NavLink to="portfolio" className={`${styles.nav_link} fw-bold rounded-1`} style={activeLink}>Portfolio</NavLink>
                        <NavLink to="contact" className={`${styles.nav_link} fw-bold rounded-1`} style={activeLink}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
