import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'
import { useState, useEffect } from 'react';

const Intro = () => {
   const[loopNum, setLoopNum] = useState(0);
   const [isDeleting, setIsDeleting] =useState(false);
   const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
   const [text, setText] = useState('');
   const [delta, setDelta] = useState(300 - Math.random() *100);
   const period = 1000;


   useEffect(() => {
      let ticker = setInterval(() =>{
         tick();
         
      },delta )
      return() => {clearInterval(ticker)};
   }, [text])
   const tick =() =>{
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

      setText(updatedText);
      if(isDeleting){
         setDelta(prevDelta => prevDelta /2)
      }

      if(!isDeleting && updatedText === fullText){
         setIsDeleting(true);
         setDelta(period);
      }else if(isDeleting&& updatedText === ''){
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
      }
   }

  return (
     <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sani</span><br />{text}</span>
            <p className='introPara'>I am a skilled web designer with experience in creating<br /> visiually appealing and user-friendly websites</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg' />Hire Me </button> </Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
     </section>
  )
}
export default Intro;
