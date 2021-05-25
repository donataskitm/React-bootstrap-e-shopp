import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Products from './Products';
import Cart from './Cart';


const Main = () => {
    const [item, setItem] = useState([]);

    //prekes pridejimas i krepseli
    const addToCart = (product) =>{
        //console.log(product);
        let newCart = [...item];
        let arYra = newCart.find((preke)=> product.name===preke.name);
        if (arYra && arYra.kiekis < product.countInStock){
            arYra.kiekis++;
        } else if (arYra===undefined){
            arYra = {...product, kiekis: 1}
            newCart.push(arYra);
    } else {
        alert('Prekes sandelyje nera');
    }
    setItem(newCart);
}
    //metodas krepselio isvalymui
    const clearCart =() =>{
        setItem([]);
 }    
//prekes trynimas
const deleteProduct = (product) =>{
    console.log(product);
    setItem(item.filter((p) => p !== product));
}

//kiekio mazinimas
const decreaseQuantity = (product) => {
    console.log("kiekio mazinimas"+product);
    let newCart = [...item];
    let arYra = newCart.find((preke)=> product.name===preke.name);
    if (arYra.kiekis>1){
        arYra.kiekis--;
        setItem(newCart.splice(arYra));
    }
    else{
        setItem(item.filter((p) => p !== arYra));
    }
    
}

//kiekio didinimas
const increaseQuantity = (product) => {
    console.log("kiekio didinimas"+product);
    let newCart = [...item];
    let arYra = newCart.find((preke)=> product.name===preke.name);
    if (arYra && arYra.kiekis<product.countInStock){
        arYra.kiekis++;
    }
    else{
        alert('Prekes sandelyje nera');
    }
    setItem(newCart);
}

 return (
        <Router>
        <Navbar bg="light" variant="light" className = "sticky-top">
            <Link to="/"><Navbar.Brand >e-Shop</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/">Products</Link></Nav.Link>
                    <Nav.Link ><Link to="/cart">Cart</Link></Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/cart">
                   <Cart item={item} clearCart ={clearCart} deleteProduct={deleteProduct} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity}/>
                </Route>
                <Route path="/">
                    <Products addToCart={addToCart} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Main;