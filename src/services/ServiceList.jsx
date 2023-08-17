import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"


const servicesData =[
{
    
    title: "Our Vision ",
    desc:"Professional Engineers with a sound technical foundation to be foremost in interpersonal and managerial skills for a challenging tomorrow."
},
{
   
    title: "Our Mission ",
    desc:"Through broad liberal education to train Engineering undergraduates for careers of leadership, especially in Engineering, with those attitudes, abilities, and skills that would give them mastery over a challenging professional world with a clear understanding of the impact of their work on society and the environment.",
},
]

const ServiceList = () => {
  return   <>
  {
    servicesData.map((item,index)=> 
    <Col lg='4' key={index}>
        <ServiceCard item={item}/>
    </Col>)
  }
  
  </> 
  }

export default ServiceList