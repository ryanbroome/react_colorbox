import React, { useState } from "react";

const NewBoxForm = (props) => {
  //Starter / Clear Form Values
  const INITIAL_STATE = {
    backgroundColor: "",
    height: "",
    width: "",
  };

  // create state for form data values
  const [formData, setFormData] = useState(INITIAL_STATE);

  // keep form values current to state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Box Form</h3>
      <label htmlFor='backgroundColor'>Color</label>
      <input
        id='backgroundColor'
        type='text'
        name='backgroundColor'
        placeholder='color'
        value={formData.backgroundColor}
        onChange={handleChange}></input>
      <br></br>
      <label htmlFor='height'>Height</label>
      <input
        id='height'
        type='text'
        name='height'
        placeholder='height in pixels'
        value={formData.height}
        onChange={handleChange}></input>
      <br></br>
      <label htmlFor='width'>Width</label>
      <input
        id='width'
        type='text'
        name='width'
        placeholder='width in pixels'
        value={formData.width}
        onChange={handleChange}></input>
      <br></br>
      <button>Submit</button>
    </form>
  );
};

export default NewBoxForm;
