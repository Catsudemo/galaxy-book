import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    useEffect(() => {
        emptyBackgroundImg();
    });

    const emptyBackgroundImg = () => {
        document.body.style.backgroundImage = '';
    };
    return (
        <div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <Link to="/showGallery/Andromeda">Andromeda</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/showGallery/Nebula">Nebula</Link>
                </li>
                <li className="list-group-item">
                    <Link to={`/showGallery/${'black hole'}`}>Black hole</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default GalleryPage;
