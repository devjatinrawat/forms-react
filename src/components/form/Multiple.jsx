import React, { useState } from "react";

function Multiple() {
  // creating useState
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  //  Handle changes in input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));
  };

  //  Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Submitted Form Data:", formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange} 
            required
          />
        </label>
      </div>

     
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

     
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

     
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
      </div>

     
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>
      </div>

     
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Multiple;
