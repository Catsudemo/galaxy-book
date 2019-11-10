import React, {useState} from 'react';

const SinglePicture = ({  imgUrl, title, description }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleCardDescription = () => {

        return setShowDescription(!showDescription);
    }
    
    return (
        <div className="card" style={{'width': '70%','marginBottom': '3%'}}>
            <img src={imgUrl} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    { !showDescription && <button type="button" className="btn btn-primary" onClick={toggleCardDescription}>Read more</button> }
                    { showDescription && <p className="card-text">{description}</p> }
                    { showDescription && <button type="button" className="btn btn-primary" onClick={toggleCardDescription}>Hide</button> }
                </div>
        </div>
    )
}

export default SinglePicture;