import React from 'react'
import './Auth.css'
import Logo from '../../images/Logo.png'
import { Button, TextField } from '@mui/material'

const Auth = () => {

    // This is the SignUp Function
    function SignUp() {
        return(
            <div className='loginContainer'>
                <h3>SignUp</h3>

                <div className='textFieldContainer'>
                    <div className='lineUpTextBox'>
                        <TextField variant='filled' label='FirstName' className='textfield'/>
                        <TextField variant='filled' label='LastName' className='textfield'/>
                    </div>
                        <TextField variant='filled' label='UserName' className='textfield'/>
                    <div className='lineUpTextBox'>
                        <TextField variant='filled' label='Password' className='textfield' type='password'/>
                        <TextField variant='filled' label='Confirm Password' className='textfield' type='password'/>
                    </div>
                </div>

                <div className='signUpSuggestion'>
                    <span>
                        Already have an account ? Login
                    </span>
                    <Button className='loginButton'>SignUp</Button>
                </div>
            </div>
        )
    }

    // This is the login Function
    function Login() {
        return(
            <div className='loginContainer'>
                <h3>Login</h3>

                <div className='inputBoxes'>
                    <TextField variant='filled' label='Username' className='inputBox'/>
                    <TextField variant='filled' label='Password' className='inputBox' type='password'/>
                </div>

                <div className='signUpSuggestion'>
                    <span>
                        Don't have an account ? SignUp. 
                    </span>
                    <Button className='loginButton'>Login</Button>
                </div>
            </div>
        )
    }
return (
    <div className='Auth'>
        <Login/>
        {/* <SignUp/> */}
        <div className='names'>
            <img src={Logo} alt="Logo" />
            <div className='heading'>
                <h1>MemeSpot</h1>
                <h6>Welcome to the world of Memers !</h6>
            </div>
        </div>
    </div>
)
}

export default Auth
