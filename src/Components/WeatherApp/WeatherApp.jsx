// STATES
import {useState} from 'react'

import Header from './Header'
import Weather from './Weather'

const WeatherApp = () => {
// Declare useState
const [weatherData, setWeatherData] = useState()


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