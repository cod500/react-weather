import React from 'react';

export default function weatherApi(searchValue) {
    const api = {
        key: "bbff31b32d6800ec2ffeba396e6925f0",
        base: "api.openweathermap.org/data/2.5/",
    }

    const data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=imperial&appid=${api.key}`)
        .then((response) => {
            return response.json();
        })

    return data;
}
