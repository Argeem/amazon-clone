import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault()

        //firebase login
    }

    const register = e =>{
        e.preventDefault()

        //firebase register
    }

    return(
        <div className='login'>
            <Link to='/'>
                <img
                    className='login-logo'
                    src='https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png'
                    alt='login' 
                />
            </Link>
            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email} 
                        onChange={
                            e => setEmail(e.target.value)
                        }
                    />

                    <h5>Password</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange={
                            e => setPassword(e.target.value)
                        } 
                    />

                    <button
                        type='submit' 
                        className='login-signInBtn'
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON Coditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-based Ads Notice.
                </p>

                <button
                    onClick={register} 
                    className='login-registerBtn'
                >Create your Amazon account</button>
            </div>
        </div>
    );
}

export default Login