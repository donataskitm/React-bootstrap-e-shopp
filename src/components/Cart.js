import React from 'react'
import {Table} from 'react-bootstrap';
const Cart = ({item, clearCart, deleteProduct, decreaseQuantity, increaseQuantity}) => {
    return (
        <div>
            <h2>Shopping cart</h2>
            <Table striped bordered hover>
                { item.length > 0 &&
                <thead>
                    <tr>
                    <th>#</th>
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
                            <td>{index+1}</td>
                            <td><img className="img-thumbnail" width="90" src={preke.imageUrl}/></td>
                            <td>{preke.name}</td>
                            <td className="d-flex "><button onClick={()=>decreaseQuantity()}>-</button>{preke.kiekis}<button onClick={()=>increaseQuantity(preke.kiekis)}>+</button></td>
                            <td>{preke.price} eur</td>
                            <td>Delete</td>
                            
                        </tr>
                       ))
                   }
                   <tr>
                   <td colSpan="4">Total cost: </td>
                   <td><button onClick={clearCart}className="btn btn-success">Buy</button></td>
                   <td><button  onClick={clearCart} onClick = {()=>deleteProduct(preke)} className="btn btn-danger">Delete</button></td>
                   </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;