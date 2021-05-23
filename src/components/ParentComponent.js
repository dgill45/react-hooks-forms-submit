import React, {useState} from "react";
import Form from "./Form.js"

function ParentComponent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }
  
    function handleSubmit(event){
      if(firstName){
      event.preventDefault();
      const formData = {firstName: firstName, lastName: lastName};
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }else{
      setErrors(["First name is required!"]);
    }
    const listOfSubmissions = submittedData.map((data, index) => {
      return (
        <div key = {index}>{data.firstName} {data.lastName}</div>
      );
    });
  
}