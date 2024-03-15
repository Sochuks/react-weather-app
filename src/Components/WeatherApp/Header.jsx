import { useState } from 'react'
import search_icn from '../WeatherApp/img/search.png'

const Header = ({addCity}) => {

    const [cityInput, setCityInput] = useState('')

    // Validate form
    const checkCity = (e) => {
        e.preventDefault();

        if (!cityInput.trim()){
            alert('Enter city name')
            return
        }
        // call addCity prop
        addCity(cityInput.trim())
        setCityInput('')
    }

  return (
    <header className='pt-10'>
        {/* Header container */}
        <div className="flex justify-center items-center gap-4">
            
            {/* Search Box */}
            <div>
                <input type="text" placeholder='Search' 
                className="p-4 text-xl font-normal bg-green-100 focus:outline-none" 
                value={cityInput} 
                onChange={(e) => 
                {setCityInput(e.target.value)}}
                aria-label='Enter city name'/>
            </div>
            {/* Search Icon */}
            <button className="flex justify-center bg-green-100 
            rounded-full w-14 h-14 
            items-center"
            aria-label='Search'
            onClick={checkCity}>
                <img src={search_icn} alt="Search" />
            </button>
        </div>
    </header>
  )
}

export default Header