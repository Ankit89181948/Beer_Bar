import React from 'react'
import SearchBar from "./SearchBar";
import logo from './logo.png'  

const Header = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='text-center flex justify-between items-center min-w-full bg-black mb-2 p-2'>
      <div className='flex items-center'>
        <img src={logo} alt='no img' className='h-14 w-14 object-contain rounded-full m-1' />
        <h1 className='text-white text-3xl'>Beer Bar</h1>
      </div>
      
      <div className='flex justify-end'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </div>
  )
}

export default Header