import React from 'react'
import Drawer from 'react-modern-drawer'
import { CSSProperties } from 'react';
import '../App.css';
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Mobile_Responsive() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
const navDrawer = {
   backgroundColor: 'var(--secondaryColor)',
}


const drawerList: CSSProperties = {
  justifyContent: 'left',
  textAlign: 'left' as CSSProperties['textAlign'],
  color: 'var(--secondaryColor)',
  margin:"20px",


}

    
  return (
    <div >
    <button style={{backgroundColor:'transparent', border: 'none'}} onClick={toggleDrawer}> <FontAwesomeIcon icon={faBars} size='2xl' color='var(--primaryColor)' /></button>
    <Drawer
        style={navDrawer}
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
        
    >
         <ul style={drawerList} className='drawerNavList'>
<br></br>
<li><FontAwesomeIcon icon={faHouse}  color='var(--primaryColor)' /><Link style={{color: 'var(--primaryColor)', margin:"20px",}} to="/">Home</Link></li>

<br></br>

<li><FontAwesomeIcon icon={faFileAlt}color='var(--primaryColor)' /><Link style={{color: 'var(--primaryColor)', margin:"20px",}} to="/resume">Resume</Link></li>

<br></br>

<li><FontAwesomeIcon icon={faEnvelope} color='var(--primaryColor)' /><Link style={{color: 'var(--primaryColor)', margin:"20px",}} to="/coverletter">Cover Letter</Link></li>


</ul>
    </Drawer>
</div>
  )
}

export default Mobile_Responsive