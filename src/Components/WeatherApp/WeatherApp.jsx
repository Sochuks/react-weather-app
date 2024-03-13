import Header from './Header'
import Weather from './Weather'

const WeatherApp = () => {
    // api key
    let api_key = "09f9327956dcd39a294c20990d9d4eb5"
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