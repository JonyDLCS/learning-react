import React from 'react'
import { Link } from 'react-router-dom'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppName from './AppName'

function NavigationMenu(props) {
  return (
    <>
    <div className='font-bold py-3 flex justify-between '>
        <FontAwesomeIcon
        icon={faX}
        className='pl-3 cursor-pointer hover:text-blue-800'
        onClick={props.closeMenu//setShowMenu(!showMenu)}
        }/>
        <AppName/>
        
    </div>
    <ul>
        <li>
            <Link to='/' 
            className='text-blue-600 hover:text-blue-800 py-3 border-t border-b block' 
            onClick={props.closeMenu}>
                Home
            </Link>
        </li>
        <li>
            <Link to='/about' 
            className='text-blue-600 hover:text-blue-800 py-3 border-b block' 
            onClick={props.closeMenu}>
                About
            </Link>
        </li>
        
    </ul>
    </>
  )
}

export default NavigationMenu