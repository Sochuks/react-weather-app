// STATES
import {useState} from 'react'

import Header from './Header'
import Weather from './Weather'

const WeatherApp = () => {
// Declare useState
const [weatherData, setWeatherData] = useState()

// fetch city data
const fetchData= async (cityInput)=> {
    const cityName = cityInput.trim();
    
    // error handling
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&uk&APPID=09f9327956dcd39a294c20990d9d4eb5`);
        if(!res.ok){
            alert('City not found! Enter a valid city name')
            return;
        }
        const data = await res.json();
        // call setWeatherData for weatherData
        setWeatherData(data); 
    }
        catch{}
}
  return (
    <div className='app-main flex-col mx-auto rounded-md'>
        {/* Header Component */}
        <Header />
        {/* Weather Component */}
        <Weather />
    </div>
  )
}

export default WeatherApp