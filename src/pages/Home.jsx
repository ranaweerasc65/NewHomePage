import React from 'react'
import '../styles/home.css'

import{ Container, Row, Col} from 'reactstrap';
import heroImg01 from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.jpg'
import Subtitle from '../shared/Subtitle';



import ServiceList from '../services/ServiceList';

import ImagesGallery from '../components/Image-gallery/ImagesGallery';
import Newsletter from '../shared/Newsletter';



/* HERO SECTION*/


const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">

          <h1>The Department of Interdisciplinary Studies<span className="highlight"> DIS </span></h1>

            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'Overview '}/>
            </div>
           
            
            <p>Out of the five departments at the Faculty of Engineering, which was established in July, 1999 at Galle, the Department of Interdisciplinary Studies is the Department, which cater for the managerial skill development while supporting the major streams by providing the necessary background knowledge in Mathematical areas.

The Department of Interdisciplinary Studies (DIS) has mainly designed its curriculum to bridge the gap between the student’s technical skills and personal development. The Department offers courses for all students regardless of the discipline. It facilitates all other departments by providing the basic skills required to follow their degree programs. Further, the department provides opportunities to enhance their knowledge in mathematics, management, economics, social science, and personal development under the following subdivisions.</p>
          <ul>
            Mathematics
           </ul>
           <ul>Management</ul>
           <ul>Economics</ul>
           <ul>Personal Development</ul>
           </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box">
            <img src={heroImg01} alt=""/>
          </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt="" controls/>
          </div>
        </Col>

        <Col lg ='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg03} alt=""/>
          </div>
        </Col>

      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col lg='3'> 
        
        <h2 className="services__title">
          We offer our best services
        </h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>


  {/* GALLERY*/}

  <section>
  <Container>
      <Row>
        <Col lg = '12' >
          <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title"> Visit our gallery </h2>
        </Col>
        <Col lg='12'>
          <ImagesGallery/>
        </Col>
       
      </Row>
  </Container>
</section>

<Newsletter/>
  </>
}

export default Home