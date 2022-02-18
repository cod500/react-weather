import React, { useState } from 'react';
import '../styles/weather-styles.css';
import weatherApi from '../data/weatherApi.js';
import moment from 'moment';

export default function Weather() {

    const [weather, setWeather] = useState([]);
    const [weatherValue, setWeatherValue] = useState("");
    const [error, setError] = useState(false);
    const newDate = moment().format("MMM Do YY");


    const handleWeatherResult = async () => {
        const response = await weatherApi(weatherValue);
        if (response.cod === "404") {
            setError(true)
        } else {
            console.log(newDate)
            setWeather(response)
        }
    }


    return (
        <div className="main-container">
            <div className="container top">
                <h1>Weather App</h1>
                <div>
                    <input type="text" className="search" placeholder="Search by city name" onChange={(e) => {
                        setWeatherValue(e.target.value)
                    }} />
                    <button onClick={handleWeatherResult} className="btn">Submit</button>
                    {error ? <p className="error">Location was not found</p> : null}
                </div>
                <section>
                    <div className="contaienr">
                        <div className="icon">
                            <img src="" alt="" className="weather-icon" />
                        </div>
                        {weather.length !== 0 && error === false ? (<div className="location">
                            <div className="city">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{newDate}</div>
                            <div className="current">
                                <div className="temp">Temp: {weather.main.temp} <span>°</span>F</div>
                                <div className="weather">Weather: {weather.weather[0].main}</div>
                                <div className="temp-range">Temp Range: {weather.main.temp_min}°F / {weather.main.temp_max} °F</div>
                            </div>
                        </div>) : null}
                    </div>
                </section>
            </div>
        </div>
    )
}
