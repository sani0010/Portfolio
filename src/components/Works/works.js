import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/porftolio-3.jpg';
import Portfolio4 from '../../assets/porftolio-4.jpg';
import Portfolio5 from '../../assets/porftolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesk'>I take pride in paying attention to the smallest details and making sure
         that my work is pixel perfect. I am excited to bring my skills and experience to help busimess achieve 
         their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg' />
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
        </section>
  )
}

export default Works;