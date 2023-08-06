import * as AuthApi from '../api/AuthRequest.js'

export const logIn = (loginData) => async(dispatch) => {
        dispatch({type: "AUTH_START"})
    try {
        const {data} = await AuthApi.logIn(loginData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "AUTH_FAILED"})
    }
} 

export const signUp = (loginData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})
try {
    const {data} = await AuthApi.signUp(loginData)
    dispatch({type: "AUTH_SUCCESS", data: data})
} catch (error) {
    console.log(error)
    dispatch({type: "AUTH_FAILED"})
}
} 