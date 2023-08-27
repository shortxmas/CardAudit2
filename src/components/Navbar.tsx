import { BrowserRouter,Routes, Route,Link} from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { CreateAccount } from "../views/CreateAccount";


export function Navbar() 
{
  

  return (
    <>
      
    <BrowserRouter>
        <div className="navbar navbar-expand-lg navbar-light  bg-light">
            <div className="container">

                <a className="navbar-brand" style={{color:'#5f91bb',}}>
            
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <a className="nav-link">
                            <h2 style={{color:'#5f91bb'}}>
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
                    
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                    </Link>

                    <Link to="/createaccount" style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link">Create Account</a>
                        </li>
                    </Link>

                    </ul>
                </div>
                

                <span className="navbar-text" style={{color:'#5f91bb',display:'inline'}}>
                    <h6>
                    Manage your debts.
                    </h6>
                </span>
        
            
            </div>
        
        
        </div>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createaccount" element={<CreateAccount/>}/>
        </Routes>

    </BrowserRouter>
      
      


    </>
  )
}