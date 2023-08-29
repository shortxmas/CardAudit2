import "../styles/styles.css"

export function LoginForm()
{
    let primaryColor = '#5C8374';
    // let secondaryColor = '#93B1A6';
    let boxColor = '#f8f9fa'


    return(


        <>

            <div className="container p-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 boxShadow" style={{backgroundColor:boxColor,borderRadius: '15px',boxShadow:'100px'}}>
                        <div className="p-lg-5 p-4" >
                          <h4 style={{color:primaryColor}}>
                              Login
                          </h4>
                          <br></br>
                          <form>
                              <div>
                                  <div id="email">
                                      <p>Email</p>
                                      <div className="input-group">
                                          <input type="email" className="form-control" required></input>

                                      </div>
                                  </div>
                                  <br></br>
                                  <div id="password">
                                      <p>Password</p>
                                      <div className="input-group">
                                          <input type="text" className="form-control" required></input>

                                      </div>
                                  </div>
                                  <br></br>

                                  <button type="submit" className="btn-light btn " style={{backgroundColor:primaryColor,color:'white'}}>Submit</button>

                                  
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}