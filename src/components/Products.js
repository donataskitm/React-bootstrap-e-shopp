import React from 'react'
import data from '../data/Data';

//style
import {Card, Button} from 'react-bootstrap';
const Products = ({addToCart}) => {
    return (
        <div className="d-flex flex-wrap flex-row ">
            {data.map((preke, index)=>(
                         <Card className="col-4 " key = {index} style={{ width: '18rem' }}>
                         <Card.Img variant="top" height="300" src={preke.imageUrl}  className="m-auto pb-4 pt-4 img-responsive  justify-content-center" />
                             <Card.Body>
                                 <Card.Title>{preke.name}</Card.Title>
                                 <Card.Text><b>Description:</b> {preke.description}
                                 </Card.Text>
                                 <Card.Text>
                                 <b>Price:</b> {preke.price} eur
                                 </Card.Text>
                                 <Button variant="primary" className= "btn btn-lg ml-auto" onClick={()=>addToCart(preke)}>Buy</Button>
                             </Card.Body>
                     </Card>
            ))}
        </div>
    )
}

export default Products;