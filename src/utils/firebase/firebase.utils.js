import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
} from 'firebase/auth' ;
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAp0zWZie5du3kBySissqkZ9TDZcZSQv1A",
    authDomain: "crwn-clothing-db-45772.firebaseapp.com",
    projectId: "crwn-clothing-db-45772",
    storageBucket: "crwn-clothing-db-45772.appspot.com",
    messagingSenderId: "1002875311768",
    appId: "1:1002875311768:web:b8124f9fe83f3f23f922ed"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();

  export const signInWithGooglePopup = () =>  signInWithPopup(auth,googleProvider);
  
  export const signInWithGoogleRedirect = ( ) => signInWithRedirect(auth,googleProvider);
  
  export const db=getFirestore();

  export const addCollectionAndDocuments = async (collectionKey , objectToAdd )=>{

    const collectionRef = collection(db , collectionKey);

    const batch = writeBatch(db);


    objectToAdd.forEach((object)=>{
      const docRef = doc(collectionRef , object.title.toLowerCase());

      batch.set(docRef , object);
    })
    console.log("done")
    await batch.commit();

  }

  export const getCategoriesAndDocuments = async ()=>{

    const collectionRef = collection(db,'collections');

    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);

    const categoryMap = querySnapShot.docs.reduce((acc , docSnapShot)=>{
      const {title,items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      
      return acc;
    },{} )

    return categoryMap;

 
  }


  export const createUserDocumentFromAuth = async(userAuth,additionalInformation = {displayName:''}) =>{
     const userDocRef=doc(db,'users',userAuth.uid);
     
     const userSnapShot = await getDoc(userDocRef);
     if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation, 
            });

        }
        catch(error){
            console.log("error creating the user",error.message);
        }


     }
     return userDocRef;
    

  

  };
  export const createAuthUserWithEmailAndPassword = async (email , password) => {

    if(!email || !password) return;


    
    
    return await createUserWithEmailAndPassword(auth , email , password)

  }

  export const signInAuthUserWithEmailAndPassword = async (email , password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword( auth , email , password);
  };

  export const signOutUser = async () =>{
    return await signOut(auth);
  }

  export const onAuthStateChangedListener = (callback) => {
     onAuthStateChanged(auth, callback);
  }