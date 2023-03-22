import { createContext , useState, useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener  } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser :()=>null,

});

 export const USER_ACTION_TYPES ={
     SET_CURRENT_USER : 'SET_CURRENT_USER', 
 }

const userReducer = ( state , action)=>{
    console.log("dispatch");
    console.log(action);
    const { type , payload } = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return{
                currentUser : payload ,
            }

        default:
            throw new Error(`uhandles type ${type} in userReducer`)

    }
}
const INITIAL_STATE = {

    currentUser : null,

}




export const UserProvider = ({children}) => {
    

    const [state , dispatch] = useReducer(userReducer,INITIAL_STATE);
    const {currentUser} = state;
    console.log(currentUser);
    
    const setCurrentUser = (user)=>{
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER , payload : user })
    };
    const value = {currentUser,setCurrentUser};
    
  //const [currentUser , setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe =  onAuthStateChangedListener((user)=> {
            if(user){
                createUserDocumentFromAuth(user);
            }
        //console.log(user);
        setCurrentUser(user);
    });
        return unsubscribe;
    },
    [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
} 