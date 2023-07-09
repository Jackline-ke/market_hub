import React from "react";
import loginImg from "client/src/assests/login.jpg"

export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <img src={loginImg} alt=""></img>
            </div>

            <div>
                <form>
                    <h2>SIGN IN</h2>
                    <div>
                        <label>User Name</label>
                    </div>
                </form>
           
            </div>
        </div>

        
    )
}

