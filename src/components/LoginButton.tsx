import logo from '../assets/googleic.png'
import { auth,googleProvider } from '../back/firebase'
import { signInWithPopup } from 'firebase/auth'


export function LoginButton()
{

  const login =async () => {
    try{
      await signInWithPopup(auth,googleProvider)
    }
    catch(e)
    {
      console.error(e);
    }
    
  }

  return(

    <>
      <div>
        
        <button type="button" className="btn btn-light" style={{backgroundColor:'white'}}
        onClick={login}
        >
          <img src={logo} width="30" height="30" className="align-middle " alt=""></img>
          <text className='align-middle px-2 '>Login with Google</text>
        </button>
      </div>
    </>


  )
}