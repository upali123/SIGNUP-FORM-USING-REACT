// import { useState } from "react"
import React, {useEffect, useState} from 'react'
import Validation from './Validation';
const SignupForm = ({submitForm}) => {

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setdataIsCorrect] = useState(false)



    const [values, setvalues] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange=(event) =>{
        setvalues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmitForm=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        setdataIsCorrect(true)
        
        Validation(values)
    }

    useEffect(()=>{
if(Object.keys(errors).length === 0 && dataIsCorrect){
    submitForm(true);
}

    },[errors])
    console.log({values,submitForm})
    return (
        <div className="container">
             <div className="app-wrapper">

<div >
    <h2 className="title">
      CREATE YOUR ACCOUNT
    </h2>
</div>
<form className="form-wrapper" >
    <div className="name">
        <label className="label">Full Name</label>
        <input className="input"
         type="text"
         name="name"
         onChange={handleChange}
             value={values.name}
         />
         {errors.fullname && <p className="error">{errors.fullname}</p>}
    </div>
    <div className="email">
        <label className="label">Email</label>
        <input className="input"
         type="email"
         name="email"
         onChange={handleChange}
             value={values.email}
         />
         {errors.email && <p className="error">{errors.email}</p>}
    </div>
    <div className="password">
        <label className="label">Password</label>
        <input className="input"
         type="password"
         name="password"
         onChange={handleChange}
             value={values.password}
         />
         {errors.password && <p className="error">{errors.password}</p>}
    </div>
    <div>
        <button className="submit" onClick={handleSubmitForm}>Signup</button>
    </div>
</form>
             </div>
        </div>
    )
}

export default SignupForm
