

const Validation = (values) => {
    let errors={};

    if(!values.fullname){
        errors.fullname = " name is required"
    }
    if(!values.email){
        errors.email = " email is required"
    }else if(!/\$+@\$+\.\$+/.test(values.email)){
        errors.email="email is  invalid"

    }
    if(!values.password){
        errors.password = " password is required"
    }else if(values.password.length<5){
        errors.password="must be more than five "
      
    }
    return errors;
}

export default Validation
