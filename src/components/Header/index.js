import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className="p-4 border-bottom border-secondary fw-normal">
            <Container>
                <Link to="/" className='navbar-brand'>yenwise</Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand"
                    aria-labelledby="offcanvasNavbarLabel-expand"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand">yenwise</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link to="/how-it-works" className='nav-link'>How it Works</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;