import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../images/Logo.png'
import { Button, TextField } from '@mui/material'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)

return (
    <div className='Auth'>
        <div className='loginContainer'>
                <h3>{isSignUp ? "SignUp" : "Login"}</h3>

                <div>
                    <div className='textFieldContainer'>
                        {isSignUp &&
                        
                        <div className='lineUpTextBox'>
                            <TextField variant='filled' label='FirstName' className='textfield'/>
                            <TextField variant='filled' label='LastName' className='textfield'/>
                        </div>
                        }
                            <TextField variant='filled' label='UserName' className='textfield'/>
                        <div className='lineUpTextBox'>
                            <TextField variant='filled' label='Password' className='textfield' type='password'/>

                            {isSignUp &&
                            <TextField variant='filled' label='Confirm Password' className='textfield' type='password'/>
                            }
                        </div>
                    </div>

                    <div className='signUpSuggestion'>
                        <span onClick={()=>{setIsSignUp((prev)=>!prev)}} style={{cursor: 'pointer'}}>
                            {isSignUp ? "Already have an account ? Login" : "Don't have an account ? SignUp"}
                        </span>
                        <Button className='loginButton'>{isSignUp ? "SignUp" : "Login"}</Button>
                    </div>
                </div>

            </div>

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
