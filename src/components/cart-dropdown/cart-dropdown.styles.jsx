import styled from "styled-components";


export const CartDropdownContainer = styled.div`

position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;



`

export const EmptyMessage = styled.span`

font-size: 18px;
margin: 50px auto;


`

export const CartItems = styled.div`


height: 240px;
display: flex;
flex-direction: column;
position:relative;
overflow-y: scroll;

padding:20px;

`

export const Container = styled.div`

display:flex;
flex-direction: row;
padding:2px;



`
export const Image = styled(Container)`

height: 70px;
width: 70px;
//position:absolute;
position: relative;`

export const Footer =styled(Container)`

display: flex;
flex-direction: column;
//position: absolute;
//left:130px;
padding-left:20px;
font-size: 12px;

`


// .cart-dropdown-container {
//     position: absolute;
//     width: 240px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
    
  
//    .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: 240px;
//       display: flex;
//       flex-direction: column;
//       position:relative;
//       overflow-y: scroll;
      
//      padding:20px;

//     }
//     .container{
//       display:flex;
//       flex-direction: row;
//     }
//     img{
//       height: 70px;
//       width: 70px;
//       //position:absolute;
//       position: relative;
//     }
//     .footer{
//       display: flex;
//       flex-direction: column;
//       //position: absolute;
//       //left:130px;
//       padding-left:20px;
//       font-size: 12px;
//     }
    
//     button {   
//       margin:auto; 
//     }
//   }