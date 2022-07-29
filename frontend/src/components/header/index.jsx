import { Nav, Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { ContainerBig } from '../../global-styles';

function Header() {
    const { t, i18n } = useTranslation();

    const routes = [
        {
            title: 'Главная',
            route: '/',
        },
        {
            title: 'Курьерам',
            route: '/courier',
        },
        {
            title: 'Партнерам',
            route: '/partner',
        },
        {
            title: 'О нас',
            route: '/about-us',
        },
        {
            title: 'Контакты',
            route: '/contacts',
        },
    ]

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
            <ContainerBig sx={{
                background: 'none',
            }}>
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
                                {routes.map(( item, index ) => (
                                    <NavLink
                                        key={index}
                                        className={({ isActive }) => (isActive ? 'header-nav active nav-link' : 'header-nav inactive nav-link')} 
                                        to={item.route}
                                        style={{
                                            '&.active': {
                                                position: 'relative',
                                            },
                                            '&.active:after': {
                                                marginTop: '20px',
                                                position: 'absolute',
                                                content: '',
                                                display: 'block',
                                                height: '2px',
                                                width: 'calc(100% - 8px * 2)',
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </NavLink>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    {/* </Container> */}
                </Navbar>
            </ContainerBig>
        </header>
    );
}


export default Header;