// const authReducer = (state = {authData: null, loading: false, error: false}, action) => {
//     switch(action.type){
//         case "AUTH_START":
//             return{
//                 ...state, 
//                 loading: true,
//                 error: false
//             }
//         case "AUTH_SUCCESS":
//             // localStorage.setItem("profile", JSON.stringify({...action?.data}))
//             return{
//                 ...state, 
//                 authData: action.payload
//             }
//         case "AUTH_FAIL":
//             return{
//                 ...state, 
//                 loading: false, 
//                 error: true
//             }
//         default: 
//             return state
//     }
// }


// export default authReducer

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {authData: null, loading: false, error: false},
    reducers: {
        authStart: state => {
            state.loading = true
            state.error = false
        },
        authSuccess: (state,action) => {
            state.loading = false
            state.authData = action.payload
        },
        authFail: state => {
            state.loading = false
            state.error = true
        },
    }
})

export const {authStart, authSuccess, authFail} = authSlice.actions
export default authSlice.reducer;