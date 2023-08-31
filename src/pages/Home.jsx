import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context'
import SearchBar from '../components/SearchBar'
import Cocktails from '../components/Cocktails'
import Navbar from '../components/Navbar'

const Home = () => {

  

 
  return (
    <div>

      <Navbar/> 
     
      <SearchBar/>
      <Cocktails/>
    </div>
  )
}

export default Home