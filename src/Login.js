import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error)=> 
        alert(error.message));

    }
 return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPMt40wUbuAcuxgqbe3iio1MDxOP4ysTGlA&usqp=CAU
                " alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
