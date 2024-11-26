import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import '../styles/Navbar.css';

const CustomNavbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value); // Pass search query to the parent component
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
            <Navbar.Brand as={Link} to="/">Vaishnavi Traders</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <div className="d-none d-lg-block flex-grow-1"></div> {/* Placeholder to keep the search bar in center */}
                <Form inline className="search-form mx-auto"> {/* Center the search bar */}
                    <div className="search-bar-wrapper">
                        <FormControl
                            type="text"
                            placeholder="Search for products and brands..."
                            className="search-bar"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products" className="mx-2">Products</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/LoginSignup" className="mx-2">Login/Signup</Nav.Link>
                    <Nav.Link as={Link} to="/cart" className="mx-2">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
