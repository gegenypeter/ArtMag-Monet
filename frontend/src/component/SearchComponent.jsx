import React from 'react'
import "../styles/Search.css"


const Search = () => {
  return (
    <div className='searchDiv'>
        <h1 className="headerTitle">The Metropolitan Museum of Art Collection</h1>
        <input className='searchInput' type="text" placeholder='You can search here'></input>
    </div>
  )
}

export default Search