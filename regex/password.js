
  const isStrongPassword=(password)=> {
    // Define the regular expression pattern
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?/\\]).{8,}$/;
  
    // Test the password against the pattern
    return pattern.test(password);
  }
export default isStrongPassword