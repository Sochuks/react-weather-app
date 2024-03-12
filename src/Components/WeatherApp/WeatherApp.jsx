import Header from './Header'
import Weather from './Weather'

const WeatherApp = () => {
  return (
    <div className='app-main flex-column mx-auto rounded-md'>
        {/* Header Component */}
        <Header />
        {/* Weather Component */}
        <Weather />
    </div>
  )
}

export default WeatherApp