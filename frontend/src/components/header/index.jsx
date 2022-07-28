import { Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { Container } from '../../global-styles';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    return (
        <header 
            id="header" 
            style={{ 
                marginBottom: '-56px',
                background: 'none',
             }}
        >
            <Container>
                <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light" style={{ justifyContent: 'end', }}>
                    {/* <Container className="nav__container"> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav 
                                className="me-auto navbar-nav"
                                style={{ 
                                    fontFamily: 'MuseoSansCyrl-500',
                                    fontSize: 20,
                                    lineHeight: '120%',
                                    width: '100%',
                                    justifyContent: 'end',
                                }}
                            >
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/courier">Курьерам</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/partner">Партнерам</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/about-us">О нас</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')} to="/contacts">Контакты</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    {/* </Container> */}
                </Navbar>
            </Container>
        </header>
    );
}


export default Header;