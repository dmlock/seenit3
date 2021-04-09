import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{ loginError }, dispatch] = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const reportLoginError = (errorCode) => {
        dispatch({
         type: "LOGIN_ERROR",
         errorCode: errorCode
       });
    };

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(
                error => 
                {
                    reportLoginError(error.message);
                }
            
        )
}


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
                        reportLoginError(error.message);
                    }
                
            )
    }
 

    return (
        <div className='login'>
            
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="login__error" >{loginError}</span>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    We will never share any of your data without asking for your specific permission. Please
                    see our Privacy Notice and Cookies Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create an Account</button>
            </div>
        </div>
    )
}

export default Login
