import React, { useState } from 'react'

import './Skills.css'
import { SKILLS } from '../../utility/data'
import SkillCard from './SkillsCard/SkillsCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

    const [selectedSkill,setselectedSkill] = useState(SKILLS[0]);
const handleSelectSkill =(data)=>{
    setselectedSkill(data);
};

  return (
    <section className='skills-container'>
            <h3>Proficiency</h3>
        <div className='skills-content'>
            
            <div className='skills'>
                {SKILLS.map((item)=>(
                    <SkillCard key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=> {
                        handleSelectSkill(item);
                    }}
                    />
                ))}

            </div>

            <div className='skills-info'>
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills} />
            </div>

        </div>
    </section>
  )
}

export default Skills
