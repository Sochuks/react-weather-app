import { useState } from 'react'
import search_icn from '../WeatherApp/img/search.png'

const Header = () => {

    const [city, setCity] = useState('')

    // Validate form
    const checkCity = (e) => {
        e.preventDefault();

        if (!city){
            alert('Add a country')
        }else{
            console.log(city)
            setCity('')
        }
    }

  return (
    <header className='pt-10'>
        {/* Header container */}
        <div className="flex justify-center items-center gap-4">
            
            {/* Search Box */}
            <>
                <input type="text" placeholder='Search' 
                className="p-4 text-xl font-normal bg-green-100" 
                value={city} onChange={(e) => {setCity(e.target.value)}}/>
            </>
            {/* Search Icon */}
            <div className="flex justify-center bg-green-100 rounded-full w-14 h-14 items-center"
            onClick={checkCity}>
                <img src={search_icn} alt="Search" />
            </div>
        </div>
    </header>
  )
}

export default Header