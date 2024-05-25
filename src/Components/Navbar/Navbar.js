import React, { useEffect, useState } from 'react'

import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';


const download_img = <img src = './assets/images/download.png'/>

const Navbar = () => {

    const [openMenu, setOpenMenu]=useState(false);

    const toggleMenu =()=>{
        setOpenMenu(!openMenu);
    };


    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    const download_cv = ()=>{
        <a href="https://drive.google.com/drive/folders/17QisbI-Ulo41pBm_tmFGbHcxfXGYDcIA?usp=drive_link" target="_blank" rel="noopener noreferrer"></a>
    }
    
    
    return (
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        
       
        <div>
      <nav className={`nav-wrapper ${isSticky ? 'sticky':''}`}>
    <div className='nav-content'>
        <img className='logo' src={'logo'} alt=''/>
        
        <ul>
            <li>
                <a className='menu-item'>Home</a>
            </li>
            <li>
                <a className='menu-item'>Skills</a>
            </li>
            <li>
                <a className='menu-item'>Projects</a>
            </li>
            <li>
                <a className='menu-item'>Contact</a>
            </li>
            
            <a
            className='contact-me'
            href='https://drive.google.com/drive/folders/17QisbI-Ulo41pBm_tmFGbHcxfXGYDcIA?usp=drive_link'target='blank' rel='noopener noreferrer'>{download_img} &nbsp;&nbsp; CV
            </a>
        </ul>

        <button className='menu-button' onClick={toggleMenu}>
        <span style={{fontSize:'25px'}}>
            {openMenu? "x":"≡"}
        </span>
        </button>

        </div>
        </nav>
     
    </div>
    </>
  )
}

export default Navbar
