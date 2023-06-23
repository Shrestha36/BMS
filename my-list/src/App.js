import React, { useState, useEffect } from 'react';
const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(8);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setFormValid] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(parseInt(e.target.value));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSave = () => {
    // Perform save action here
    const formData = {
      name,
      age,
      email,
      password
    };
    alert(JSON.stringify(formData));
  };
  useEffect(() => {
    // Perform form validation
    const isNameValid = name.trim() !== '';
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = password.length >= 6;
    setFormValid(isNameValid && isEmailValid && isPasswordValid);
  }, [name, email, password]);
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <select value={age} onChange={handleAgeChange}>
          {Array.from({ length: 92 }, (_, i) => i + 8).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button disabled={!isFormValid} onClick={handleSave} style={{ backgroundColor: isFormValid ? 'blue' : 'gray' }}>
        Save
      </button>
    </div>
  );
};
export default Form;