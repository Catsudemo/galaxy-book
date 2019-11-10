import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBinoculars, faPenFancy } from '@fortawesome/free-solid-svg-icons';

// Router dependency
import { Link } from 'react-router-dom';
import NavBarHeader from './NavBarHeader';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavBarHeader />
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to="/">
                        <li className="nav-item h4">
                            <div className="nav-link"><FontAwesomeIcon icon={faHome} />Home</div>
                        </li>
                    </Link>
                    <Link to="/showGallery">
                        <li className="nav-item h4">
                            <div className="nav-link"><FontAwesomeIcon icon={faBinoculars} />Gallery</div>
                        </li>
                    </Link>
                    <Link to="/createNote">
                        <li className="nav-item h4">
                            <div className="nav-link"><FontAwesomeIcon icon={faPenFancy} />Note to self</div>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;