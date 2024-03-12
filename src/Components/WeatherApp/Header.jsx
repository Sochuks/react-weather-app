import search_icn from '../WeatherApp/img/search.png'

const Header = () => {
  return (
    <header className='pt-10'>
        {/* Header container */}
        <div className="flex justify-center items-center gap-4">
            
            {/* Search Box */}
            <>
                <input type="text" placeholder='Search' className="p-4 text-xl font-normal bg-green-100" />
            </>
            {/* Search Icon */}
            <div className="flex justify-center bg-green-100 rounded-full w-14 h-14 items-center">
                <img src={search_icn} alt="Search" />
            </div>
        </div>
    </header>
  )
}

export default Header