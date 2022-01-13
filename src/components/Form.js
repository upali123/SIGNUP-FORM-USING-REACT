import React,{useState} from 'react'
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSuccess';

 const Form = () => {
     const [formIsSubmitted, setformIsSubmitted] = useState(false)
     const submitForm  =()=>{
         setformIsSubmitted(true);
     }
    return (
        <div >
           {!formIsSubmitted?<SignupForm submitForm={submitForm}/>:<SignupSuccess/>}
        </div>
    )
}
export default Form;