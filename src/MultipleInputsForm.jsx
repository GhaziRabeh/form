import React, { useState } from 'react';

function MultipleInputsForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    favoriteColor: '',
    gender: '',
    agreed: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Form with Multiple Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Favorite Color:
          <select name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
            <option value="">Select a color</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
          Other
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Favorite Color: {submittedData.favoriteColor}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Agreed to terms and conditions: {submittedData.agreed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default MultipleInputsForm;
