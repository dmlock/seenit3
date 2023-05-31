import React, { useState } from 'react';
import './Register.css'
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Register() {
    const [{ registerError }, dispatch] = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const reportRegisterError = (errorCode) => {
        dispatch({
         type: "REGISTER_ERROR",
         errorCode: errorCode
       });
    };

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(
                    error => 
                    {
                        reportRegisterError(error.message);
                    }
                
            )
    }
 

    return (
        <div className='register'>
            
            <div className='register__container'>
                <h1>Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="register__error" >{registerError}</span>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={register} className='register__registerButton'>Register</button>
                </form>

                <p>
                    We will never share any of your data without asking for your specific permission. Please
                    see our Privacy Notice and Cookies Notice.
                </p>

             </div>
        </div>
    )
}

export default Register
