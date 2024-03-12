// Weather - Icons
import clear_icn from '../WeatherApp/img/clear.png'
import cloud_icn from '../WeatherApp/img/cloud.png'
import drizzle_icn from '../WeatherApp/img/drizzle.png'
import humidity_icn from '../WeatherApp/img/humidity.png'
import rain_icn from '../WeatherApp/img/rain.png'
import snow_icn from '../WeatherApp/img/snow.png'
import wind_icn from '../WeatherApp/img/wind.png'

const Weather = () => {
  return (
    // Container
    <div className='flex-column p-4'>
        {/* Weather Details */}
        <div>
            {/* Weather Icon */}
            <div className="flex justify-center">
                <img src={cloud_icn} alt="" />
            </div>
            {/* Temperature */}
            <div className="flex justify-center text-5xl text-white font-normal">
                    24 DEG
            </div>
            {/* Location */}
            <div className="weather-location">
                        London
            </div>
      
        </div>

        {/* Weather Data */}
        <div>
            {/* Humidity element */}
            <div>
                {/* element icon */}
                <img src={humidity_icn} alt="" />
                {/* data */}
                <div>
                    <div className="percentage">30%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            {/* wind element */}
            <div>
                {/* element icon */}
                <img src={wind_icn} alt="" />
                {/* data */}
                <div>
                    <div className="percentage">20 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Weather