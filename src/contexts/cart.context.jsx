import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext({
    cartCount:0,
    show : false,
    
})


export const CartProvider = ({children}) =>{

    const [items,setItems] = useState([]);

    const [cartCount , setCartCount] = useState(0);
    
    const [total,setTotal] = useState(0);

    const [ show , setShow] = useState(false);

   

   // const showHandler = ()=> (
     //    setShow(!show)
    //)

    

    

    useEffect(()=>{
        const newCartCount = items.reduce((total,item)=>total+item.qty,0);
        setCartCount(newCartCount);
    },[items]
    )

    
   

    useEffect(()=>{
        const Total = items.reduce((total,item)=>total+(item.item.price*item.qty),0);
        setTotal(Total);

    },[items]

    );

    //const cartCount = () => items.length;
    //console.log(cartCount);
    
    //let [cartCount , setCartCount] = useState(items);
    //console.log(setCartCount);
    
    const addItemToCart = (item) => {
        const isAlreadyAdded = items.find((e) => e.item.name === item.name)
        if(isAlreadyAdded != null){
            const index = items.findIndex((e) => e.item === item)
            items[index].qty += 1;
            
           
            setItems([...items]);
            
        }else{
            const data = {item: item, qty: 1}
        
            setItems([...items, data]);

        }
        
    }
    const DecreamentItemFromCart = (item)=>{

        
        
           const index=items.findIndex((e)=>e.item===item);
            //var ind=items.indexOf(item);
           // items[ind].qty-=1;
            //setItems([...items]); 
            

            if(items[index].qty===1){
                items.splice(index,1);
                
                setItems([...items]);
            }
            
            items[index].qty-=1;
            setItems([...items]);
            

    }
    const removeItemFromCart = (item)=>{
      
      //  const element=items.find((e)=>e.item.name===item.name);
        //items.splice(index,1);

        //const ele = items.filter((e)=>e.item.name!==element.name);

         setItems(items.filter((cartItem)=>cartItem.item.id!==item.id));

         



      
        
} 

    //const cartTotalCount=cartCount;

    const getItems = ()=> items;

   // console.log(items[0].item.name);


    return (
    <CartContext.Provider value={{getItems, cartCount, addItemToCart, DecreamentItemFromCart,removeItemFromCart,total ,show, setShow}} >
        {children}
    </CartContext.Provider>
    )
    
}