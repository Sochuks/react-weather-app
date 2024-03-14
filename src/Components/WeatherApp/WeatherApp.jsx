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