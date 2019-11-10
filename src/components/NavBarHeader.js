import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const NavBarHeader = () => {
    return (
        <div style={{'display': 'flex', 'alignItems': 'center'}} className="navbar-brand">
            <FontAwesomeIcon size="6x" icon={faUserAstronaut} />
            <p className="h3">My Galaxy Book</p>
        </div>
    );
}

export default NavBarHeader;
