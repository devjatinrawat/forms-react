

import React , {useState} from 'react'
import axios from "axios";

const FormWithApi = () => {
  const [formData , setFormData] = useState({
    name : "",
    email : "",
    message : "",
  });
  const [isSubmitted , setIsSubmitted ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API Call
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

        if(response.status === 201){
            alert("Form Submitted Successfully");
            setIsSubmitted(true);
            //close the form
        }
    } catch (error) {
        alert("Error  While Submitting the form Pls try again");
        console.log(error);

    }
  }
  //close the form 
  if(isSubmitted){
    return <p>Thank you for your response! </p>
  }

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({
        ...formData , 
        [name]  : value,
    });
  };

  
return (
    <div>
    <h1>React Form Example</h1>
    <form onSubmit={handleSubmit}>
      {/* Input for Name */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Input for Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Input for Message */}
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default FormWithApi
