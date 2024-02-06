import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from '@react-spring/web'
import NavigationMenu from './NavigationMenu'
function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    //className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'
    //mask className='bg-black fixed top-0 left-0 w-full h-full z-40 opacity-30'


    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 0.3 },
        leave: { opacity: 0 },
        config: { duration: 250 },
    })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 , transform:'translateX(100%)'},
        enter: { opacity: 1 , transform:'translateX(0%)'},
        leave: { opacity: 0 , transform:'translateX(100%)' },
        config: { duration: 300 },
    })


  return (
    <nav>
        <span className='text-xl cursor-pointer'>
            <FontAwesomeIcon

            icon={faBars}
            onClick={()=>setShowMenu(!showMenu)}/>
        </span>

        {
              maskTransitions((style, item) => (
                item &&
                <animated.div 
                className='bg-black fixed top-0 left-0 w-full h-full z-40 '
                style={style}
                onClick={()=>setShowMenu(false)} >
                   
                </animated.div>
              ))
        }

        {
              menuTransitions((style, item) => (
                item && 
                <animated.div 
                className='fixed bg-white top-0 right-0 text-right w-72 h-full z-50 shadow p-3'
                style={style}>
                  <NavigationMenu closeMenu={()=>setShowMenu(false)}/>
                </animated.div>
                
              ))
        }
        
    </nav>
  )
}

export default Navigation