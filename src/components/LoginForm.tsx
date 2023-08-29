export function LoginForm()
{
    let primaryColor = '#5C8374';


    return(


        <>

            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 ">
                        <h4 style={{color:primaryColor}}>
                            Login
                        </h4>
                        <br></br>
                        <form>
                            <div>
                                <div id="username">
                                    <p>Username</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" required></input>

                                    </div>
                                </div>
                                <div id="password">
                                    <p>Password</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" required></input>

                                    </div>
                                </div>
                                <br></br>

                                <button type="button" className="btn btn-light" style={{color:primaryColor}}>Submit</button>

                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}