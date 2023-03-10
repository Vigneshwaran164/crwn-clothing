
import { useState , useContext} from "react";
 

import { signInWithGooglePopup,
           createUserDocumentFromAuth,
           signInAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

 import './sign-in-form.styles.scss';


const defaultFormFields = {

    email:'',
    password:'',
    
}

const SignInForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;

   // const { setCurrentUser } = useContext(UserContext);

    //console.log(formFields);
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
        
    }
    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
       
     
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try{

            const {user} = await signInAuthUserWithEmailAndPassword( email , password);
            //setCurrentUser(user);
           
            //console.log('hit0');
            
            resetFormFields();

            
        }
        
        catch(error){

            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password with email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(error);
            }
            // if(error.code=="auth/wrong-password"){
            //     alert('incorrect password for email');
            // }
            // else if(error.code=='auth/user-not-found'){
            //     alert("incorrect email");

            // }
           
        }


    };

    const handleChange = (event) => {
        const {name,value} = event.target ;
        setFormFields ({...formFields,[name]:value});
        
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>

            <span>Sign in with Your Email and Password</span>
            <form onSubmit={handleSubmit}>
               
               
                <FormInput 
                label='Email'
                type="email" 
                
                onChange={handleChange}
                name='email'
                value={email}
                />

                
                <FormInput 
                 label='Password'
                 type="password"
                 
                 onChange={handleChange}
                 name='password'
                 value={password}
                 />
                
                <div className="buttons-container">
                   <Button type='submit'>SIGN IN </Button>
                   <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
                
            
            </form>
        </div>
    )

}
export default SignInForm;