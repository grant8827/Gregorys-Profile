import React from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Mobile_Responsive() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    
  return (
    <>
    <button style={{backgroundColor:'transparent', border: 'none'}} onClick={toggleDrawer}> <FontAwesomeIcon icon={faBars} size='2xl' color='var(--primaryColor)' /></button>
    <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
    >
         <ul className='drawerNavList'>

<li><Link to="/">Home</Link></li>

<span style={{color:'var(--primaryColor)'}}>|</span>

<li><Link to="/resume">Resume</Link></li>

<span style={{color: 'var(--primaryColor)'}}>|</span>

<li><Link to="/coverletter">Cover Letter</Link></li>


</ul>
    </Drawer>
</>
  )
}

export default Mobile_Responsive