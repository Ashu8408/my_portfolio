import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Build with me</h2>
            <p>Enthusiastic Developer | Embracing technologies to shape innovative ideas 💡
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/favicon.ico' alt='' />
                </div>
                <img src='./assets/images/aj.png' alt='' />
            </div>

            <div>
            <div className='tech-icon'>
                    <img src = './assets/images/js.png' alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src = './assets/images/cpp.png' alt=''/>
                </div>
            <div className='tech-icon'>
                    <img src='./assets/images/sql.png' alt='' />
                </div>
                
                <div className='tech-icon'>
                    <img src = './assets/images/python.png' alt=''/>
                </div>
                
            </div>


        </div>

    </section>
  )
}

export default Hero
