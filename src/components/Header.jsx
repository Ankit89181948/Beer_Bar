import React from 'react'
import SearchBar from "./SearchBar";

const Header = ({searchTerm,setSearchTerm}) => {
  
  return (
    <div className='text-center flex justify-between min-w-full bg-black'>
        <h1 className='bg-black text-white py-4 text-2xl mb-4 m-2'>Beer Bar</h1>
        <div className='flex justify-end m-2'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
    </div>
  )
}

export default Header