import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss"

const CheckoutItem = ({product}) => {

    const cartContext = useContext(CartContext);

    const {addItemToCart,DecreamentItemFromCart,removeItemFromCart} = cartContext

    const {name,imageUrl,price} = product.item;
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>DecreamentItemFromCart(product.item)}>
                    &#10094;
                </div>
                <div className="value">{product.qty}</div>
                <div className="arrow" onClick={()=>addItemToCart(product.item)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItemFromCart(product.item)}>&#10005;</div>


        </div>

    )
}

export default CheckoutItem;