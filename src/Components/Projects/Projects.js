import React, { useRef } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECTS } from '../../utility/data'
import Slider from 'react-slick'



const Projects = () => {
    const sliderRef = useRef();
    const settings={
        dots:true,
        infinite:true,
        speed:600,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,                    
                },
            },
        ],

    };

    const slideRight=()=>{
        sliderRef.current.slickNext();
    }
    const slideLeft=()=>{
        sliderRef.current.slickPrev();
    }



  return (
    <section className='projects-container'>
        <h5>Projects</h5>

        <div className='projects-content'>

        <div className='right-arrow' onClick={slideRight}>
                <img src='./assets/images/right.png'></img>
            </div>
            <div className='left-arrow' onClick={slideLeft}>
                <img src='./assets/images/left.png'></img>
            </div>

            <Slider ref={sliderRef} {...settings} >
            {PROJECTS.map((item)=>(
                <ProjectCard key={item.title} details={item} />
            ))}
            </Slider>


        </div>

    </section>
  )
}

export default Projects
