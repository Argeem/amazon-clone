import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const signIn = e =>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            navigate('/')
        })
        .catch((error)=>{
            alert(error.message)
        })

        //firebase login
    }

    const register = e =>{
        e.preventDefault()

        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            //success create
            console.log(auth)
            if(auth)
                navigate('/')
        })
        .catch((error)=>{
            //fail to create
            alert(error.message)
        })
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