
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