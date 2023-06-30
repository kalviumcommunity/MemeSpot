import React from 'react'
import logo from '../../images/Logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={logo} alt="appLogo" className='logoPNG'/>
        <div className='search'>
            <input type="text" placeholder='#Explore'/>
            <div className='searchIcon'>
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch