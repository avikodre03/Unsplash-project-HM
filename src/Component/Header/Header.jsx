import React, { useContext } from 'react'
import './Header.css'
import { mainContext } from '../Context'

const Header = () => {
    const { searchValue,setsearchValue, category,setcategory } = useContext(mainContext)
  return (
    <div className='searchContainer'>
<h1>Geek Gallary</h1>
<div className="input">
    <input type="text" name="" id="" placeholder='Search Photos..'  onChange={(e) => {
            setcategory(e.currentTarget.value)
          }} />
    <button onClick={(e) => {
            console.log("clicked", searchValue)
            setsearchValue(category);

          }}>Search</button>
</div>
    </div>
  )
}

export default Header