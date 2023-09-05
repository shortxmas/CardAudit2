import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import { Home } from "../views/Home";
import { Contact } from "../views/Contact";
import { LoginButton } from "./LoginButton";




  

export function Navbar() 
{
    
    let primaryColor = '#5C8374';


    

    
    

  return (
    <>
      
    <BrowserRouter>
        <div className="navbar navbar-expand-lg navbar-light p-3 bg-light" >
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

                <ul className="navbar-nav navbar-right nav-routes">
                        <div className="dropdown">
                            <a
                                className="btn btn-secondary dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                             Account   
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