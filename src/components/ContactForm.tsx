import "../styles/styles.css"

export function ContactForm()
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
                          <div className="py-1">
                            <h4 style={{color:primaryColor}}>
                                Contact
                            </h4>
                          
                            <text style={{fontSize:'13px',lineHeight:'.1'}}> Want to contact the creator or have suggestions to improve the site?</text>
                          </div>
                          
                          <form action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com" method="get">
                              <div>
                                  <div id="name" className="py-1">
                                      <div>
                                        <text>
                                            Name
                                        </text>
                                      </div>

                                      <div className="input-group">
                                          <input type="text" className="form-control" name="Name" required></input>

                                      </div>
                                  </div>
                                  
                                  <div id="email" className="py-1">
                                      <div>
                                        <text>
                                            Email
                                        </text>
                                      </div>
                                      <div className="input-group">
                                          <input type="email" className="form-control" name="Email" required></input>

                                      </div>
                                  </div>
                                  
                                  <div id="message" className="py-1">
                                      <div>
                                        <text>Message</text>

                                      </div>
                                      <div className="input-group">
                                          <input type="text" className="form-control" name = "Message" required></input>

                                      </div>
                                  </div>
                                  
                                
                                  <div className="py-2"> 
                                    <button type="submit" className="btn-light btn " style={{backgroundColor:primaryColor,color:'white'}}>Submit</button>

                                  </div>

                                  
                              </div>
                              <input type='hidden' name="fromwebsite" value="Cardaudit"></input>
                              <input type='hidden' name="redirect" value = "https://collegegradetool.com"></input>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}