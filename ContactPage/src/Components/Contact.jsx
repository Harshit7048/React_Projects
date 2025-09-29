import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"

export default function Contact(){

    const [status,setStatus] = useState("login")






    return <div className="contact">
        
        <div className="status">
            <button className={
                status==="login"?"status-btn active-btn":"status-btn"
            }
            onClick={()=>setStatus("login")}
            >Login</button>
            <button className={
                status==="signUp"?"status-btn active-btn":"status-btn"
            }
            onClick={()=>setStatus("signUp")}
            >Signup</button>

            
        </div>
         <div>
                {status==="login"?<Login/>:<SignUp/>}
                 
            </div>
    </div>
}