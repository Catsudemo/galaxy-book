import React, { useState, useEffect } from 'react';
const NASA_PICTURE_OF_TODAY_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const API_CALL_FAIL = 'https://http.cat/429';


const GalaxyBook = () => {

    const [backgroundImgUrl, setBackgrounImgUrl] = useState('');
    const [imgDescription, setImgDescription] = useState('');
    const [greeting, setGreeting] = useState('');

    // useEffect(() => {
    //     getNASAPictureOfTheDay();
    // }, [backgroundImgUrl]);
    useEffect(() => {
        setBackgroundImgWhenAPICallFails();
        setImgDescriptionWhenAPICallFails();
        setGreetingBasedOnTimeOfDay(new Date());
    });

    const getNASAPictureOfTheDay = async () => {
        
        const res = await fetch(NASA_PICTURE_OF_TODAY_API);
        if (res.error) {
            console.log(res.error.code, ' ', res.error.message);
            setBackgroundImgWhenAPICallFails();
            setImgDescriptionWhenAPICallFails();
            setGreetingBasedOnTimeOfDay(new Date());
        }
        else {
            const data = await res.json();
            console.log('Response json: ', data);
            setBackgrounImgUrl(data.url);
            setImgDescription(data.explanation);
            setGreetingBasedOnTimeOfDay(new Date());
            initHomePage();
        }
    };

    const setGreetingBasedOnTimeOfDay = now => {

        const timeOfDay = now.getHours();
        console.log('Current hour: ', timeOfDay);

        if (12 > timeOfDay && timeOfDay >= 6) {
            setGreeting('Good morning');
        }
        else if (12 <= timeOfDay && timeOfDay < 18) {
            setGreeting('Good afternoon');
        }
        else if (18 <= timeOfDay && timeOfDay <= 23) {
            setGreeting('Good evening');
        }
        else {
            setGreeting('Hello');
        }
    };

    const initHomePage = () => {
        setBackgroundImg();
    };

    const setBackgroundImg = () => {
        document.body.style.backgroundImage = `url('${backgroundImgUrl}')`;
    };

    const setBackgroundImgWhenAPICallFails = () => {
        document.body.style.backgroundImage = `url('${API_CALL_FAIL}')`
    };

    const setImgDescriptionWhenAPICallFails = () => {
        setImgDescription('API call to NASA image of today fails, sorry :(')
    }

    return(
        <div className="home-page-text-box">
            <div className="transparent-box">
                <h1 className="display-3">{greeting}</h1>
                <p className="display-4">Story behind today's picture</p>
                <p className="lead">
                    {imgDescription}
                </p>
            </div>
            
        </div>
    )
}

export default GalaxyBook;