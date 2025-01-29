// signupvalidation.js

const Validation = (values) => {
    let errors = {};
  
    // Validate email
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    // Validate mobile number
    if (!values.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = 'Mobile number is invalid';
    }
  
    // Validate pincode
    if (!values.pincode) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(values.pincode)) {
      errors.pincode = 'Pincode is invalid';
    }
  
    return errors;
  };
  
  export default Validation;
  