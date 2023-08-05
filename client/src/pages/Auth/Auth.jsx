import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../images/Logo.png'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logIn } from '../../actions/AuthAction'
import { signUp } from '../../api/AuthRequest'

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstName: "", 
        lastName: "", 
        password: "", 
        confirmPassword: "", 
        userName: ""})
    const [confirmPassword, setConfirmPassword] = useState(true)

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(isSignUp){
            data.password === data.confirmPassword ? dispatch(signUp(data)) : setConfirmPassword(false)
        } else {
            dispatch(logIn(data))
        }
    }

    const resetForm = (e) => {
        setConfirmPassword(true)
        setData({
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            userName: ""
        })
    }

return (
    <div className='Auth'>
        <div className='loginContainer'>
                <h3>{isSignUp ? "SignUp" : "Login"}</h3>

                <div>
                    <div className='textFieldContainer'>
                        {isSignUp &&
                        
                        <div className='lineUpTextBox'>
                            <TextField variant='filled' label='FirstName' name='firstName' value={data.firstName} className='textfield' onChange={handleChange}/>
                            <TextField variant='filled' label='LastName' name='lastName' value={data.lastName} className='textfield' onChange={handleChange}/>
                        </div>
                        }
                            <TextField variant='filled' label='UserName' name='userName' value={data.userName} className='textfield' onChange={handleChange}/>
                        <div className='lineUpTextBox'>
                            <TextField variant='filled' label='Password' name='password' value={data.password} className='textfield' type='password' onChange={handleChange}/>

                            {isSignUp &&
                            <TextField variant='filled' label='Confirm Password' name='confirmPassword' value={data.confirmPassword} className='textfield' type='password' onChange={handleChange}/>
                            }
                        </div>
                        <span style={{display: confirmPassword ? "none" : "block", color: "red", fontSize: '12px', alignSelf: 'flex-end'}}>
                            *Confirm Password is not same
                        </span>
                    </div>

                    <div className='signUpSuggestion'>
                        <span onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}} style={{cursor: 'pointer'}}>
                            {isSignUp ? "Already have an account ? Login" : "Don't have an account ? SignUp"}
                        </span>
                        <Button className='loginButton' onClick={handleSubmit}>{isSignUp ? "SignUp" : "Login"}</Button>
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
