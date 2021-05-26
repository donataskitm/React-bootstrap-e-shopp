import React from 'react'
import {Table} from 'react-bootstrap';
const Cart = ({item, clearCart, deleteProduct, decreaseQuantity, increaseQuantity}) => {
  
    const getTotal = () => {
        return item.reduce((sum, {price, kiekis }) => sum + price*kiekis, 0).toFixed(2);
        }

    return (
        <div>
            <h2>Shopping cart</h2>
            <Table striped bordered hover>
                { item.length > 0 &&
                <thead>
                    <tr style={{ textAlign: "center" }}>
                    <th >#</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                }
                <tbody>
                   {
                       item && item.map((preke, index)=>(
                        <tr key={index}>
                            <td style={{ textAlign: "center" }}>{index+1}</td>
                            <td style={{ textAlign: "center" }}><img className="img-thumbnail " width="90" src={preke.imageUrl}/></td>
                            <td>{preke.name}</td>
                            <td className="d-flex justify-content-center "><button className="btn btn-secondary mr-2" onClick={()=>decreaseQuantity(preke)}>-</button>{preke.kiekis}<button  className="btn btn-secondary ml-2" onClick={()=>increaseQuantity(preke)}>+</button></td>
                            <td style={{ textAlign: "center" }}>{preke.price} eur</td>
                            <td style={{ textAlign: "center" }}><button className="btn btn-danger text-justify" onClick={()=>deleteProduct(preke)}>Delete</button></td>
                        </tr>
                         ))
                   }
                   {item.length > 0 &&
                   <tr>
                   <td colSpan="4">Bendra suma: {getTotal()} $</td>
                   <td><button onClick={clearCart} className="btn btn-success">Buy</button></td>
                   <td><button className="btn btn-danger" onClick={clearCart} onClick={()=>clearCart()} >Delete cart</button></td>
                   </tr>
                 }


                </tbody>
            </Table>
        </div>
    )
}

export default Cart;