import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:8000"})

export const logIn = async(formData) => {
    const resp1 = await API.post('/auth/login', formData)
    console.log(resp1)
    return resp1
}
export const signUp =  async (formData) => {
    console.log(formData) 
    const resp2 = await API.post('/auth/register', formData)
    console.log(resp2)
    return resp2
}