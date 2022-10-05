import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
    const API_KEY = "c79e3dfa764ca35b615153b6165b83ed";
    const [clima, setClima] = useState([]);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q="BuenosAires","BuenosAires","AR"&limit=1&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const {lat, lon, contry, name, state} = data[0]
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(({main, weather}) => {
                console.log(main, weather)
                const datosClima = 
                <div className='divClima'>
                <p>Ciudad: {name} </p>
                <p>Provincia: {state}</p>
                <p>Pais: {contry}</p>
                <p>Temperatura: {main.temp}</p>
                <p>Sensacion Termica: {main.feels_like}°C</p>
                <p>Humedad: {main.humidity}%</p>
                <p>Presion: {main.pressure}hPa</p>
                <p>Tiempo: {weather[0].description}</p>
                </div>
                setClima(datosClima)
            })
        })
    }, []);

    return (
        <>
            <h1>{clima}</h1>
        </>
    );
}

export default WeatherApp;
