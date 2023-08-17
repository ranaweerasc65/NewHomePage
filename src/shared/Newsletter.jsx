import React from 'react'


import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get new information.</h2>
                    <div className="newsletter__input">
                    <input type="email" placeholder="Enter your Email"/>
                    <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>
                    By signing up, you'll stay in the loop with the latest updates and details regarding our online reservation platform for engineering faculty computer centers and seminar rooms. This will empower you to make well-informed choices when reserving spaces. Furthermore, as a registered user, you might gain access to special promotions and unique deals, allowing you to optimize your reservations while also maximizing your convenience and savings.
                    </p>
                    

                </div>
            </Col>
            <Col lg="6"></Col>
            
        </Row>
    </Container>
  </section>
}

export default Newsletter