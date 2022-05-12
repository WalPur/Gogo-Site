import "./Header.css";

import { NavLink } from 'react-router-dom';
import logo from "./logo.png";

function Header() {
    return (
        <header className="container-fluid">
            <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">
                <img src={logo}/>
            </NavLink>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <span className="navbar-brand"><b>Gogo</b>Курьер</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/">ГЛАВНАЯ</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/docs">ДОКУМЕНТЫ</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/courier">ЗАЯВКА ДЛЯ КУРЬЕРОВ</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}  to="/partner">ЗАЯВКА ДЛЯ ПАРТНЕРОВ</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;