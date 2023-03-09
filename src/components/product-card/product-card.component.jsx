import './product-card.styles.scss';

import Button,{BUTTON_TYPE_CLASSES}from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';



const ProductCard = ({product}) =>{
    const {imageUrl,name,price} = product; 
    const cartContext = useContext(CartContext)
  

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>    
            </div>
            <Button onClick={() => cartContext.addItemToCart(product)} buttonType={BUTTON_TYPE_CLASSES.inverted} CartContext={name}>Add to Cart</Button>
            
        </div>
    )

}

export default ProductCard;