import "./Header.css";

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';
import logo from "./logo.png";

function Header() {
    return (
        <header className="container-fluid">
            <NavLink className={({ isActive }) => (isActive ? 'active nav-link logo-img' : 'inactive nav-link logo-img')}  to="/">
                <img src={logo}/>
            </NavLink>
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
                <Container>
                    <Navbar.Brand href="/"><span className="navbar-brand"><b>Gogo</b>Курьер</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbar-nav">
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">ГЛАВНАЯ</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/docs">ДОКУМЕНТЫ</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/courier">ЗАЯВКА ДЛЯ КУРЬЕРОВ</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/partner">ЗАЯВКА ДЛЯ ПАРТНЕРОВ</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


export default Header;