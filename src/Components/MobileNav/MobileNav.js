import React  from 'react'

import './MobileNav.css'

const MobileNav =({ isOpen, toggleMenu}) =>{


    const download_img = <img src = './assets/images/download.png'/>
    const download_cv = ()=>{
        <a href="https://drive.google.com/drive/folders/17QisbI-Ulo41pBm_tmFGbHcxfXGYDcIA?usp=drive_link" target="_blank" rel="noopener noreferrer"></a>
    }

    return (
        <>
        <div className={`mobile-menu ${isOpen ?"active":""}`}   onClick={toggleMenu}>
            <div className='mobile-mmenu-container'>
                <img className='logo' src={''} alt=''/>
        
        <ul>
            <li>
                <a className='menu-item'>Home</a>
            </li>
            <li>
                <a className='menu-item'>About</a>
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
        </div>
        </div>
        </>
     
    );
  };


export default MobileNav
