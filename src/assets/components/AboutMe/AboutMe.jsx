import React from 'react'
import { AboutMeContainer, AboutMeDescription, AboutMeDescriptionContainer, AboutMeImg, AboutMeImgContainer, AboutMeTitle, AboutMeWrapper, DownloadBtn } from './AboutMeStyles'
import { useSelector } from 'react-redux'

const AboutMe = () => {

  const language = useSelector((state) => state.language.language)


  return (
    <AboutMeWrapper id='AboutMe'>
      <AboutMeTitle>{language === "ES" ? "SOBRE MI": "ABOUT ME"}</AboutMeTitle>
      <AboutMeContainer>
      <AboutMeImgContainer>
        {/* <AboutMeImg src="../../../../public/CSSLogo.png" alt="" /> */}
      </AboutMeImgContainer>
        
          {language === "ES" 
          ? <AboutMeDescriptionContainer>
          <AboutMeDescription>
           Soy Facundo Mychaliczka, desarrollador web full-stack de Argentina. <br />
           <br />
           Aunque no tengo experiencia profesional en el campo, he estado realizando diversos proyectos en NUCBA, donde estudié los diferentes módulos de desarrollo web: HTML y CSS puro, JavaScript, ReactJS y Typescript junto a distintas librerías necesarias que me permitieron conseguir el título de "Programación Full-Stack". <br />
           <br />
           A demás, hablo Inglés con fluidez, lo que me permite comunicarme eficazmente en un entorno global.<br />
           <br />
           Estoy entusiasmado por adentrarme aún más en el mundo del desarrollo web y seguir aprendiendo sobre las últimas tecnologías y tendencias. <br />
           <br />
           Actualmente estoy haciendo proyectos personales para seguir afianzando mis conocimientos y perfeccionando mis habilidades, tanto en frot-end como en back-end. <br />
          </AboutMeDescription>
          <DownloadBtn href='../../../../public/Certificado Full-Stack.pdf' download="Certificado Full-Stack Mychaliczka"  title="Descargar Certificado Full-Stack">Descargar Certificado</DownloadBtn>
          </AboutMeDescriptionContainer>
         : 
         <AboutMeDescriptionContainer>
         <AboutMeDescription>
         I am Facundo Mychaliczka, a full-stack web developer from Argentina. <br />
         <br />
          Although I do not have professional experience in the field, I have been carrying out various projects at NUCBA, where I studied the different web development modules: HTML and CSS, JavaScript, ReactJS and Typescript along with different necessary libraries that allowed me to obtain the title of "Programming Full-Stack". <br />
          <br />
          Additionally, I speak fluent English, which allows me to communicate effectively in a global environment. <br />
          <br />
          I'm excited to delve even further into the world of web development and continue learning about the latest technologies and trends. <br />
          <br />
          I am currently doing personal projects to continue strengthening my knowledge and perfecting my skills, both front-end and back-end.
        </AboutMeDescription>
        <DownloadBtn href='../../../../public/Certificado Full-Stack.pdf' download="Certificate Full-Stack Mychaliczka"  title="Download Full-Stack Certificate">Download Certificate</DownloadBtn>
        </AboutMeDescriptionContainer>
        }
         
        
      </AboutMeContainer>
    </AboutMeWrapper>
    
  )
}

export default AboutMe