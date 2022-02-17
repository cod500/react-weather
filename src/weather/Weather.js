import React from 'react';
import '../styles/weather-styles.css';

export default function Weather() {
    return (
        <div className="main-container">
            <div className="container top">
                <h1>Weather App</h1>
                <form action="" onsubmit="return false">
                    <input type="text" class="search" placeholder="Search by city name" />
                    <button type="submit" class="btn">Submit</button>
                    <p class="error"></p>
                </form>
                <section>
                    <div className="contaienr">
                        <div className="icon">
                            <img src="" alt="" className="weather-icon" />
                        </div>
                        <div className="location">
                            <div className="city">New York, US</div>
                            <div className="date">Tuesday, Feb 15 2022</div>
                            <div className="current">
                                <div className="temp">Temp: 25 <span>°</span>F</div>
                                <div className="weather">Weather: Snow</div>
                                <div className="temp-range">Temp Range: 10°F / 20°F</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
