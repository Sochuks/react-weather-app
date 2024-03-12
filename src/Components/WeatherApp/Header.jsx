import search_icn from '../WeatherApp/img/search.png'

const Header = () => {
  return (
    <header>
        {/* Header container */}
        <div className="container grid grid-cols-2 items-center text-center gap-3">
            
            {/* Search Box */}
            <input type="text" name="" id="" />
            {/* Search Icon */}
            <img src={search_icn} alt="Search" />
        </div>
    </header>
  )
}

export default Header