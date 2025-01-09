import React, { useState } from "react";

function SimpleForm() {
  //using useState
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Handle input changes and update the state
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value, 
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form Data Submitted:", formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form Starts */}
      <div>
        <label>
        {/* Name Field */}
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange} 
          />
        </label>
      </div>

      {/*  Email Field */}
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange} // Call handleInputChange on each change
          />
        </label>
      </div>


      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
