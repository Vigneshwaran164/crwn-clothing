import styled,{css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';





const ShrinkLabelStyles = css`

    top:-14px;
    font-size:16px;
    color:black;


` 
export const FormInputLabel = styled.label`

    color: ${subColor};
    pointer-events: none;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    left:5px;
    top:10px;
    transition:300ms ease all;

    ${({shrink})=>shrink && ShrinkLabelStyles}
                
    
`
export const Input = styled.input`

    border: none;
    border-radius: 0;
    color: ${mainColor};
    font-size:18px;
    background: none;
    background-color: white;
    border-bottom:1px solid ${subColor};
    padding:10px 10px 10px 5px;
    width: 100%;
    margin:25px 0;
    display: block;
    outline: none;

    &.focus{
        outline:none;
    }

    &:focus~ ${FormInputLabel}{
        ${ShrinkLabelStyles};
    
    }

`

export const Group = styled.div`


   margin:45px 0;
   position:relative;

   input[type ='password']{
   letter-spacing: 0.3em;
}
`
// @mixin shrinkLabel {
//     top:-14px;
//     font-size:16px;
//     color:black;


    
// }
// .group{
//    margin:45px 0;
//    position:relative;
// }
   

// .form-input-label{
//     color: grey;
    
// }
// .form-input{
//     border: none;
//     border-radius: 0;
//     color:black;
//     font-size:18px;
//     background: none;
//     background-color: white;
//     border-bottom:1px solid grey;
//     padding:10px 10px 10px 5px;
//     width: 100%;
//     margin:25px 0;
//     display: block;
//     outline: none;
    
//    &:focus~ .form-input-label{
//     @include shrinkLabel();
//    }
    
// }
// input[type ='password']{
//     letter-spacing: 0.3em;
// }
// .form-input-label{
//     pointer-events: none;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     left:5px;
//     top:10px;
//     transition:300ms ease all;
    
//     &.shrink{
//         @include shrinkLabel();
//     }
    
// }