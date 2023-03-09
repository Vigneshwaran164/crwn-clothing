
import styled from "styled-components" ; 

export const BackgroundImage = styled.div`

    width:100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    background-image : ${({imageUrl})=> `url(${imageUrl})`};

`

export const Body = styled.div`
    height:100px;
    padding:0 25px;
    align-items: center;
    border:solid black 1px;
    text-align: center;
    width:100px;
    display:grid;
    display:flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    background-color:white;
    opacity: 0.7;
    
    h2{
        color: #4a4a4a;;
        font-weight: bold;
        text-transform : uppercase;

    }
    p{
        font-weight: lighter;
    }

  

`

export const DirectoryItemContainer = styled.div`

    border:1px solid black;
    flex:1 1 auto;
    display: flex;
    height: 240px;
    align-items: center;
    justify-content: center;
    min-width:30%;
    margin:0 7.5px 15px;
    overflow: hidden;


    &:hover{
        cursor:pointer;
    
        & ${BackgroundImage}{
            transform:scale(1.1);
            transition:transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
        & ${Body}{
         
            opacity: 0.9;
        } 
       }
    &.first-child{
        margin-right: 7.5px;
    }
    &.last-child{
        margin-left: 7.5px;
    }

`

// .directory-item-container{
//     border:1px solid black;
//     flex:1 1 auto;
//     display: flex;
//     height: 240px;
//     align-items: center;
//     justify-content: center;
//     min-width:30%;
//     margin:0 7.5px 15px;
//     overflow: hidden;
 
    
//     &:hover{
//      cursor:pointer;
 
//      & .background-image{
//          transform:scale(1.1);
//          transition:transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//      }
//      &.body{
      
//          opacity: 0.9;
//      } 
//     }
//     &.large{
//      height: 380px;
//     }
//     &.first-child{
//      margin-right: 7.5px;
//     }
//     &.last-child{
//      margin-left: 7.5px;
//     }
//     .background-image{
//      width:100%;
//      height: 100%;
//      background-size: cover;
//      background-position: center;
//     }
//     .body{
//      height:100px;
//      padding:0 25px;
//      align-items: center;
//      border:solid black 1px;
//      text-align: center;
//      width:100px;
//      display:grid;
//      display:flex;
//      flex-direction: column;
//      justify-content: center;
//      position: absolute;
//      background-color:white;
//      opacity: 0.7;
     
//      h2{
//          color: #4a4a4a;;
//          font-weight: bold;
 
//      }
//      p{
//          font-weight: lighter;
//      }
//  }
    
     
     
//  }