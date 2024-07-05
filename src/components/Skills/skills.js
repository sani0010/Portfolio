import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing 
        and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficent in HTML,
         CSS and JavaScript as well as design software such as Adobe Photoshop and Illustrator</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p> My designs are tailored to meet the needs of your users, ensuring ease of use and engagement.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>From concept to launch, I deliver websites that are both beautiful and effective.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Developing user-friendly and innovative app designs that keep users engaged. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;