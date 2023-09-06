import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import { Home } from "../views/Home";
import { Contact } from "../views/Contact";
import { LoginButton } from "./LoginButton";
import { auth } from "../back/firebase";
import { useState } from "react";






  

export function Navbar() 
{
    
    let primaryColor = '#5C8374';


    
    const [accountText,changeAccountText] = useState('Account')
    

    auth.onAuthStateChanged(user=>{

     if(user?.email!=null)
     {
        changeAccountText(user.email)
        
     }
     else{
        changeAccountText('Account')
     }





    })


    

    
    

  return (
    <>
      
    <BrowserRouter>
        <div className="navbar navbar-expand-lg navbar-light p-4 bg-light" >
            <div className="container ">

                <Link to="/" style={{ textDecoration: 'none' }}> 
                    <a className="navbar-brand navbar-nav" style={{color:primaryColor}}>
                       <text className="h2">cardaudit.co</text>
                    
                    </a>
                </Link>
                

                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    
                    <ul className="navbar-nav nav-routes">
                        
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                        </Link>

                    </ul>

                    <ul className="navbar-nav nav-routes">
                    
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </Link>

                    </ul>

                    

                </div>

                <ul className="navbar-nav navbar-right nav-routes">
                        <div className="dropdown">
                            <a
                                className="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{backgroundColor:'#137a63'}}
                            >
                             {accountText} 
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>
                                        <LoginButton/>
                                    </a>
                                </li>
                                
                            </ul>

                        </div>

                    </ul>
                

                
        
            
            </div>
        
        
        </div>

        <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/contact" element={<Contact/>}/>
            

            
        </Routes>

    </BrowserRouter>
      
      


    </>
  )
}