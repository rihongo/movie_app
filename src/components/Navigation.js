import React from "react";
import { Link } from "react-router-dom";
import { Nav,Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
        </Nav>
        </Navbar>

    )
}

export default Navigation;