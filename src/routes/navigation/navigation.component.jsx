import {Outlet,Link} from 'react-router-dom';
import { Fragment , useContext } from 'react';
import{ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {NavigationContainer , NavLink , NavLinks , LogoContainer } from './navigation.styles.jsx';
import { useState } from 'react';

import { CartContext } from '../../contexts/cart.context';


const Navigation =  () => {
    const {currentUser , setCurrentUser } = useContext(UserContext);
    //console.log(currentUser);

    const {show} = useContext(CartContext);
    
    // const {showHandler} = useContext(CartContext);
    // const [show, setShow] = useState(showHandler);

    // const onClickHandler = ()=>{

    //     setShow(!show)
        
    // }



   // const onClickHandler = () => {
     //   setShow(!show)
    //}

    

   


    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to = '/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
            
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ):(
                    <NavLink to='/auth'>
                       SIGN IN
                    </NavLink> 
                    )
                }
                <CartIcon/>

                
            </NavLinks>   
           {show && <CartDropDown/>}
        
        
        </NavigationContainer> 
        <Outlet/>
      </Fragment> 
    ) ;
  };
  export default Navigation;