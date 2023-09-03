import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import { Home } from "../views/Home";
import { Contact } from "../views/Contact";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";



  

export function Navbar() 
{
    
    let primaryColor = '#5C8374';
    let secondaryColor= '#93B1A6';

    

    
    

  return (
    <>
      
    <BrowserRouter>
        <div className="navbar navbar-expand-lg navbar-light  bg-light" style={{padding:'20px'}}>
            <div className="container">

                <a className="navbar-brand">
            
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <a className="nav-link">
                            <h2 style={{color:primaryColor}}>
                                cardaudit.co
                            </h2>
                        </a>
                    </Link>
                    

                </a>

                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    <ul className="navbar-nav navbar-right nav-routes">
                    
                    

                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </Link>

                    </ul>
                </div>
                

                <span className="navbar-brand" style={{color:secondaryColor,display:'inline'}}>
                    <div>
                        <LoginButton/>
                    </div>
                </span>
        
            
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