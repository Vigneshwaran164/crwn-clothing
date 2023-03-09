import {CartIconConatiner,ShoppingIcon,ItemCount} from './cart-icon.styles.jsx';

//import { ReactComponent as ShopIcon  } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () =>{
    const cartContext = useContext(CartContext);

    const {show,setShow,cartCount} = cartContext;

    const toggleIsCartOpen = ()=>setShow(!show);
    
    return(
        <CartIconConatiner onClick={toggleIsCartOpen}>
             <ShoppingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
            
        </CartIconConatiner>

    )
}

export default CartIcon;