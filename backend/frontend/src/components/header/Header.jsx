import "./Header.css";

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';
import logo from "./logo.png";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    return (
        <header className="container-fluid">
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light">
                <Container>
                    <NavLink className={({ isActive }) => (isActive ? 'active nav-link logo-img' : 'inactive nav-link logo-img')}  to="/">
                        <img src={logo}/>
                    </NavLink>
                    <Navbar.Brand href="/"><span className="navbar-brand"><b>Gogo</b>{t("mainPage.header.name")}</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbar-nav">
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">{t("mainPage.header.main")}</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/docs">{t("mainPage.header.docs")}</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/courier">{t("mainPage.header.courierForm")}</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/partner">{t("mainPage.header.partnerForm")}</NavLink>
                        </Nav>
                        <div className="translationChoose">
                            <span onClick={() => changeLanguage("ru")} className={i18n.language === "ru" ? 'ru activeLang': "ru"}>RU</span>/
                            <span onClick={() => changeLanguage("en")} className={i18n.language === "en" ? 'en activeLang': "en"}>EN</span>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


export default Header;