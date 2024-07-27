// src/fragments/BarraNavegacion.jsx
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const BarraNavegacion = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Tienda de Peces</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="#">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Catálogo</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sobre Nosotros</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default BarraNavegacion;