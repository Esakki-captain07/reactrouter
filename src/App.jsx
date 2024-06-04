import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CardFront from './CardFront';
import { Link, Route, Routes } from 'react-router-dom';
import DataScience from './componends/DataScience';
import FullStackDev from './componends/FullStackDev';
import Carrer from './componends/Carrer';
import CyberSec from './componends/CyberSec';

//import img
import dataScience1 from './assets/img/download.jpeg'
import dataScience2 from './assets/img/OIP.jpeg'
import dataScience3 from './assets/img/DataScienceBundle.png'
import dataScience4 from './assets/img/dataEngineering.png'
import dataScience5 from './assets/img/datascience.jpg'
import dataScience6 from './assets/img/datasciencerarabic.webp'
import dataScience7 from './assets/img/download1.jpeg'
import dataScience8 from './assets/img/downloaddata.png'
import dataScience9 from './assets/img/python.webp'
import dataScience10 from './assets/img/images.jpeg'

import fullstack1 from './assets/img/fullStack1.jpeg'
import fullstack2 from './assets/img/fullStack2.jpeg'
import fullstack3 from './assets/img/fullStack3.jpeg'
import fullstack4 from './assets/img/fullStack4.png'
import fullstack5 from './assets/img/fullStack5.jpeg'
import fullstack6 from './assets/img/fullStack6.png'
import fullstack7 from './assets/img/fullStack7.png'
import fullstack8 from './assets/img/fullStack8.jpeg'

import cyber1 from './assets/img/Cyber1.jpeg'
import cyber2 from './assets/img/Cyber2.jpeg'
import cyber3 from './assets/img/Cyber3.jpeg'
import cyber4 from './assets/img/Cyber4.jpeg'
import cyber5 from './assets/img/Cyber5.jpeg'
import cyber6 from './assets/img/Cyber6.jpeg'
import cyber7 from './assets/img/Cyber7.jpeg'
import cyber8 from './assets/img/Cyber8.jpeg'

import carrer1  from './assets/img/carrer1.png'
import carrer2  from './assets/img/carrer2.jpeg'
import carrer3  from './assets/img/carrer3.jpeg'
import carrer5  from './assets/img/carrer5.jpeg'
import carrer6  from './assets/img/carrer6.png'








let data = [
  {
   image :  cyber1,
   tittle : "Certified in Cybersecurity",
   cyberSecEnabler : true
  },
  {
    image :  cyber2,
    tittle : "Ethical hacking",
    cyberSecEnabler : true
  },
  {
    image :  cyber3,
    tittle : "Cyber Secqurity Malware threats",
    cyberSecEnabler : true
  },
  {
    image :  cyber4,
    tittle : "Cybersecurity Awareness",
    cyberSecEnabler : true
  },
  {
    image :  cyber5,
    tittle : "Network security",
    cyberSecEnabler : true
  },
  {
     image :  cyber6,
     tittle : "Microsoft Cybersecurity Analyst",
     cyberSecEnabler : true
  },
  {
     image :  cyber7,
     tittle : "Python For Cybersecurity",
     cyberSecEnabler : true
    }, 
    {
      image :  cyber8,
      tittle : "IBM Cybersecurity",
      cyberSecEnabler : true
    },       
  {
    image : dataScience1,
    tittle : "IBM Data Science",
    dataScienceEnapler : true,
  },
  {
    image : dataScience2,
    tittle : "Python For Data Science AI & Development",
    dataScienceEnapler : true,
  },
  {
    image : dataScience3,
    tittle : "Foundation Of Data Science",
    dataScienceEnapler : true,
  },
  {
    image : dataScience4,
    tittle : "Data Science With Challange",
    dataScienceEnapler : true,
  },
  {
    image : dataScience5,
    tittle : "Data Science With R",
    dataScienceEnapler : true,
  },
  {
    image : dataScience6,
    tittle : "Data Science and Machine Learning Bootcamp with R	",
    dataScienceEnapler : true,
  },
  {
    image : dataScience7,
    tittle : "R Programming A – Z: R for Data Science With Real Exercises	",
    dataScienceEnapler : true,
  },
  {
    
    image : dataScience8,
    tittle : "Statistics for Data Science and Business Analysis	",
    dataScienceEnapler : true
  },
  {
    image : dataScience9,
    tittle : "Data Science A – Z: Real-Life Data Science",
    dataScienceEnapler : true,
  },
  {
    image : dataScience10,
    tittle : "Executive PGP in Data Science",
    dataScienceEnapler : true,
  },
  {
    image : fullstack1,
    tittle : "Full stack Java developer",
    fullStackEnabler : true
  },
  {
    image : fullstack2,
    tittle : "MEAN Stack",
    fullStackEnabler : true
  },
  {
    image : fullstack3,
    tittle : "MERN Stack",
    fullStackEnabler : true
  },
  {
    image : fullstack4,
    tittle : "Full-Stack Python",
    fullStackEnabler : true
  },
  {
    image : fullstack5,
    tittle : "Full-Stack Django",
    fullStackEnabler : true
  },
  {
    image : fullstack6,
    tittle : "Full-Stack Ruby on Rails",
    fullStackEnabler : true
  },
  {
    image : fullstack7,
    tittle : ".Net FullStack Developer ",
    fullStackEnabler : true
  },
  {
    image : fullstack8,
    tittle : "Full-Stack Web Development With React",
    fullStackEnabler : true
  },
  {
    image : fullstack4,
    tittle : "Django for Everyday",
    fullStackEnabler : true
  },
  {
    image : fullstack3,
    tittle : "Learn MEAN Stack by Bullding Real World Aplication",
    fullStackEnabler : true
  },
  {
    image : carrer1,
    tittle : "robotics process automation",
    CarrerEnabler : true
  },
  {
    image : carrer2,
    tittle : "advanced java",
    CarrerEnabler : true
  },
  {
    image : carrer3,
    tittle : "c advanced",
    CarrerEnabler : true
  },
  {
    image : carrer5,
    tittle : "c++",
    CarrerEnabler : true

  },
  {
    image : carrer5,
    tittle : "game development",
    CarrerEnabler : true

  },
  {
    image : carrer6,
    tittle : "creative career cource ",
    CarrerEnabler : true

  },
  {
    image : carrer2,
    tittle : "type script advanced",
    CarrerEnabler : true

  },
  {
    image : cyber3,
    tittle : "eathical hacking",
    CarrerEnabler : true

  },
  {
    image : dataScience3,
    tittle : "data structer & algarithams",
    CarrerEnabler : true

  },
  {
    image : dataScience6,
    tittle : "data science with r",
    CarrerEnabler : true

  }
]

function App() {
  return<>
   <Navbar expand="sm" bg="primary" data-bs-theme="dark"  >
        <Container className='navBar'>
          <Nav className="navBarW" >
            <Nav.Link as={Link} to='/' className='space'>All</Nav.Link>
            <Nav.Link as={Link} to='/fullStack' className='space'>Full Stack Development</Nav.Link>
            <Nav.Link as={Link} to='/DataScience' element="" className='space'>Data Science</Nav.Link>
            <Nav.Link as={Link} to='/cyberSecurity' className='space'>Cyber Security</Nav.Link>
            <Nav.Link as={Link} to='/career' className='space'>Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='cardUi'>
      <Routes>
          <Route path="/" element={data.map((e, i) => <CardFront data={e} key={i} />)} />
          <Route path="/DataScience" element={<DataScience data={data}/>} />
          <Route path="/fullStack" element={<FullStackDev data={data} />} />
          <Route path="/cyberSecurity" element={<CyberSec data={data}/>} />
          <Route path="/career" element={<Carrer data={data}/>} />
        </Routes>
    </div>

  
  </>
}

export default App