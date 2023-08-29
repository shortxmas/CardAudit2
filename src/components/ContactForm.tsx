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
                        <div className="p-5" >
                          <h4 style={{color:primaryColor}}>
                              Contact
                          </h4>
                          <p> Want to contact the creator or have suggestions to improve the site?</p>
                          
                          <form>
                              <div>
                                  <div id="name">
                                      <p>Name</p>
                                      <div className="input-group">
                                          <input type="text" className="form-control" required></input>

                                      </div>
                                  </div>
                                  <br></br>
                                  <div id="email">
                                      <p>Email</p>
                                      <div className="input-group">
                                          <input type="email" className="form-control" required></input>

                                      </div>
                                  </div>
                                  <br></br>
                                  <div id="message">
                                      <p>Message</p>
                                      <div className="input-group">
                                          <input type="text" className="form-control" required></input>

                                      </div>
                                  </div>
                                  <br></br>

                                  <button type="button" className="btn-light btn " style={{backgroundColor:primaryColor,color:'white'}}>Submit</button>

                                  
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}