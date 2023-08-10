import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:8000"})

export const logIn = async(formData) => {
    const resp2 = await API.post('/auth/login', formData)
    console.log(resp2)
    return resp2

}
export const signUp =  async (formData) => {
    console.log(formData); 
    const resp2 = await API.post('/auth/register', formData)
    console.log(resp2)
    return resp2
    


    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // };
    // let dta1 = await fetch("http://localhost:8000/auth/register", requestOptions)
    //     .then(response => response.json())
    //     .then(data => {console.log(data);  return data} );
    // console.log(dta1);
    //     return dta1;


    }