import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({ name: "", lname: "", email: "" });
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (value.name && value.lname && value.email) {
      setMessage(
        `My name is ${value.name} ${value.lname} with emailId ${value.email}`
      );
    } else {
      setMessage("No data available");
    }
  };

  const clearData = () => {
    setValue({ name: "", lname: "", email: "" });
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleClick}>
        <label>First Name: </label>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lname"
          value={value.lname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Email ID: </label>
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Gender: </label>
        <input type="radio" name="gender" value="male" />
        Male
        <input type="radio" name="gender" value="female" />
        Female
        <br />
        <br />
        <label>Cars: </label>
        <select>
          <option>Volvo</option>
          <option>BMW</option>
          <option>Audi</option>
          <option>Mercedes</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <button type="button" onClick={clearData}>
          Clear
        </button>
      </form>
      <br />
      <h1>{message}</h1>
    </div>
  );
};

export default Form;
