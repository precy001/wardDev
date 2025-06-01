import React, { useRef, useEffect } from 'react';
import Header from './Header';
import '../styles/styles.css'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'

const HeroSection = () => {
  const images = [
    image1, image2, image3
  ]; 

  const textHeadRef = useRef(null);
  const textContentRef = useRef(null)
  const backgroundRef = useRef(null)

  const textContent = [
    {
      head : "Our initiative",
      content : "The Niger Ward Development Project is a significant initiative by the Niger State Government in Nigeria, aimed at driving grassroots development and empowering communities to take ownership of their development priorities",
    },
 
    {
      head : "Our Aim",
      content : "The Niger Ward Development Project faces developments and inittiatives with a strong focus on transparency and accountability towards every innovation.",
    },

    {
      head : "History",
      content : "The Ward Development Project was first introduced during the administration of former Governor Muazu Babangida Aliyu but was discontinued by the preceding administration.",
    }
  ]

  const main = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const changeBackground = () => {
      if (main.current ) {
        main.current.style.backgroundImage = `url(${images[currentIndex]})`;
        main.current.style.backgroundSize = 'cover';
        
       /*  textHeadRef.current.innerText = `${textContent[currentIndex].head}`
        textContentRef.current.innerText = `${textContent[currentIndex].content}` */
      }

      currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
    };

    changeBackground(); 
    const interval = setInterval(changeBackground, 8000);

    return () => clearInterval(interval); // 
  }, []);

  return (
    <div>
      <Header />
      <div
        className="main"
        ref={main}
      >

    
        <div className="write-up">
          <center>
          <div className="write-up-head" >
                       The Niger State <br />Ward Development Project
          </div>
          </center>
        </div>

        <div className="overlay">

        </div>


      </div>
    </div>
  );
};

export default HeroSection;
