import Header from './Header'
import Weather_details from './Weather'

// Weather - Icons
import clear_icn from '../WeatherApp/img/clear.png'
import cloud_icn from '../WeatherApp/img/cloud.png'
import drizzle_icn from '../WeatherApp/img/drizzle.png'
import humidity_icn from '../WeatherApp/img/humidity.png'
import rain_icn from '../WeatherApp/img/rain.png'
import snow_icn from '../WeatherApp/img/snow.png'
import wind_icn from '../WeatherApp/img/wind.png'

const WeatherApp = () => {
  return (
    <div className='app-main flex-column mx-auto rounded-md'>
        {/* Header Component */}
        <Header />

    </div>
  )
}

export default WeatherApp