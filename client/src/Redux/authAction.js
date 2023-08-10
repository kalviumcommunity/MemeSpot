import * as types from './authRequest'
import { authStart, authSuccess, authFail } from './authReducer'

export const logIn = (formData) => async(dispatch) => {

    dispatch(authStart())
    try {
        const {data} = await types.logIn(formData)
        dispatch(authSuccess(data))
    } catch (error) {
        console.log(error)
        dispatch(authFail()) 
    }
}
export const signUp = ( formData , dispatch ) => async() => {

    dispatch(authStart())
    try {
        types.signUp(formData).then((dta)=> {dispatch(authSuccess(dta.data))});
        
    } catch (error) {
        console.log(error)
        dispatch(authFail())
    }
}