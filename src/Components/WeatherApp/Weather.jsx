// Weather - Icons
import clear_icn from '../WeatherApp/img/clear.png'
import cloud_icn from '../WeatherApp/img/cloud.png'
import drizzle_icn from '../WeatherApp/img/drizzle.png'
import humidity_icn from '../WeatherApp/img/humidity.png'
import rain_icn from '../WeatherApp/img/rain.png'
import snow_icn from '../WeatherApp/img/snow.png'
import wind_icn from '../WeatherApp/img/wind.png'

const Weather = ({weatherData}) => {
    // page loader
    if(!weatherData){
        return <div>Loading....</div>
    }
    // Map weather icons to description in data
    const weatherIcn = {
        Clear: clear_icn,
        Clouds: cloud_icn,
        Drizzle: drizzle_icn,
        Rain: rain_icn,
        Snow: snow_icn,
        Wind: wind_icn,
    }
  return (
    // Container
    <div className='flex flex-col items-center p-4'>
        {/* Weather Details */}
        <div className="flex flex-col items-center justify-center">
            {/* Weather Icon */}
            {weatherData && 
            <div>
                <img src={weatherIcn[weatherData.weather[0].main]} alt="" />
            </div>
            }
            {/* Temperature */}
            {weatherData && 
            <div className="text-6xl text-white font-normal">
                    {weatherData.main.temp}°c
            </div>
            }
            {/* Location */}
            {weatherData &&
                <div className="text-3xl text-white font-normal">{weatherData.name}</div>
            }
        </div>

        {/* Weather Data */}
        <div className="flex justify-between items-center mt-10 gap-12">
            {/* Humidity element */}
            <div className='flex items-center mx-auto gap-2'>
                {/* element icon */}
                    <img src={humidity_icn} alt="" />
                
                {/* data */}
                <div className='text-2xl text-white'> 
                    <div className="percentage">{weatherData && weatherData.main.humidity}%</div>
                    <div className="text-white text-xl font-normal">Humidity</div>
                </div>
            </div>

            {/* wind element */}
            <div className='flex items-center gap-2'>
                {/* element icon */}
                <img src={wind_icn} alt="" />
                {/* data */}
                <div className='text-2xl text-white'>
                    <div className="percentage">{weatherData && weatherData.wind.speed}km/h</div>
                    <div className="text-white text-xl font-normal">Wind Speed</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Weather