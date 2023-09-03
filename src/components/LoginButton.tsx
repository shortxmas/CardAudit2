import logo from '../assets/googleic.png'
import { auth,googleProvider } from '../back/firebase'
import { signInWithPopup,signOut } from 'firebase/auth'
import {useState} from 'react'


export function LoginButton()
{
  

 
  const [loginStyle,changeLoginStyle] = useState('')
  const [logoutStyle,changeLogoutStyle] = useState('none')
  
  auth.onAuthStateChanged(user=>{
    if(user){
      changeLoginStyle(()=>'none')
      changeLogoutStyle(()=>'')
    }
    else{

      changeLoginStyle(()=>'')
      changeLogoutStyle(()=>'none')
    }

  })
 
  


  
  const login =async () => {
    try{
      await signInWithPopup(auth,googleProvider) 
    }
    catch(e)
    {
      console.error(e);
    }
    
  }

  const logout = async () =>{
    try{
      await signOut(auth)
    }
    catch(e){
      console.error(e);
    }

  }

  return(

    <>
      <div>
        
        <button type="button" className="btn btn-light" style={{backgroundColor:'white',display:loginStyle}}
        onClick={login} 
        >
          <img src={logo} width="30" height="30" className="align-middle " alt=""></img>
          <text className='align-middle px-2 '>Login with Google</text>
        </button>

        <button type="button" className="btn btn-light" onClick={logout} style={{backgroundColor:'white',display:logoutStyle}}>Logout</button>
        
      </div>

      
      
    </>


  )
}