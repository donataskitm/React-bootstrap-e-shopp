import React from 'react'
import {Carousel} from 'react-bootstrap';
import data from '../data/Data';

const Shop = () => {
    return (
<div >
       
<Carousel>
     {data.map((preke, index)=>(
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={preke.imageUrl} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{preke.name}</h3>
      <p>{preke.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
   ))}
</Carousel>
   
    </div>

    )
}

export default Shop;