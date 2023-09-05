import { auth } from "../back/firebase"
import { useState } from "react"

export function Home()
{
   
    console.log(auth.currentUser?.email)
    const [test,test2] = useState('')
    
    

    return(


        <>
            <div style={{backgroundColor:test}}>
                home
                <br></br>
                <input onChange={e=>test2(e.target.value)}></input>
                <br></br>
                {test}
            </div>
        
        </>
    )
}