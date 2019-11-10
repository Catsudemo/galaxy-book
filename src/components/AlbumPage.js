import React, { useState, useEffect } from 'react';
import SinglePicture from './SinglePicture';

import { Link } from 'react-router-dom';

const NASA_IMAGE_API_ENDPOINT = 'https://images-api.nasa.gov/search?q=';

const AlbumPage = ({ match }) => {

    useEffect(() => {
        
        getImgListFromNASAAPI();

    }, []);

    const [pictureList, setPictureList] = useState([]);

    const getImgListFromNASAAPI = async () => {

        const res = await fetch(`${NASA_IMAGE_API_ENDPOINT}${match.params.searchTermKey}`);
        const data = await res.json();

        console.log('Fetched data: ', data);
        setPictureList(data.collection.items);
        console.log('picture list: ', pictureList);
        
    }

    return (
        <div className="row justify-content-md-center">
            {
                pictureList.map(pictureObj => {
                    const title = pictureObj.data[0].title
                    const description = pictureObj.data[0].description
                    const imgUrl = pictureObj.links[0].href
                    return (
                        <SinglePicture key={imgUrl} title={title} description={description} imgUrl={imgUrl} />
                    )
                })
            }
        </div>
    );
}

export default AlbumPage;
