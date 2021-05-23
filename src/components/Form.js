import React, { useState } from "react";

function Form() {
 
  return (
    <div>
    <form onSubmit ={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    </form>
    
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
};

export default Form;
