import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import {CartDropdownContainer,CartItems,Container,Image,Footer, EmptyMessage}from './cart-dropdown.styles.jsx';

import Checkout from '../../routes/checkout/checkout.component';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';


const CartDropDown = () => {
    const cartContext = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = ()=>{
        navigate('/checkout');
    }

  

    

    return(
      
        <CartDropdownContainer> 
       
        <CartItems>

        
        {
         cartContext.getItems().length?
        (cartContext.getItems().map((product) =>
        
        <Container>
        <Image>
            <img  src={product.item.imageUrl} alt={product.item.name}/>
            </Image>
            <Footer>
            
               <span className='name'> {product.item.name}</span>
                <span className='price'>{product.qty} * ${product.item.price}  </span>  
            </Footer>
                </Container>
            
        )):(
            <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )
        
        
        } 
        
        </CartItems>
        
       
        <Button onClick={goToCheckOutHandler}>Go To CheckOut</Button>
        
        </CartDropdownContainer>

    )
}
export default CartDropDown