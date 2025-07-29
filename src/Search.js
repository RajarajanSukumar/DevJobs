import React from 'react'
import './Search.css'
import { FcSearch } from "react-icons/fc";
import { GrLocationPin } from "react-icons/gr";
import { useLocation } from 'react-router-dom';

const Search = ({searchDetails, setSearchDetails, searchLocation, setSearchLocation, isFullTime, setIsFullTime, handleSearch}) => {

    const location = useLocation();

    if(location.pathname !== '/')
        {return null;}

  return (
    <form>
        <div className='searchBox'>
            <div className='input-group'>
                <FcSearch />
                <input type="text" 
                placeholder='Filter by title, companies'
                value={searchDetails}
                onChange={(e) => setSearchDetails(e.target.value)}/>
            </div>

            <div className='input-group'>
                <GrLocationPin />
                <input type="text" 
                placeholder='Filter by location'
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}/>
            </div>

            <div className="input-group checkbox-group">
                <input
                type="checkbox"
                id="full-time"
                checked={isFullTime}
                onChange={(e) => setIsFullTime(e.target.checked)}
                />
                <label htmlFor="full-time">Full Time Only</label>
            </div>

            <button className='searchButton' onClick={(e) => handleSearch(e)}>Search</button>
        </div>
    </form>
  )
}

export default Search