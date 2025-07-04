import React, { useState } from "react";
import "./AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";
const AddUser = () => {
const navigate = useNavigate()

  const Users = {
    fname: "",
    lname: "",
    email: "",
    address: "",
    password: "",
  };
  const [user, setUser] = useState(Users);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

  };


const submitForm = async(e)=>{
  e.preventDefault()
await axios.post("https://mern-todo-backend-6oaa.onrender.com/api/create", user)
.then((res) =>{
 toast.success("User Created Successfully",{position:"top-right"})
 navigate("/")

}).catch(error=>console.log(error))

}


  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3> Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            onChange={inputHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email Address"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={inputHandler}
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Address"
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            onChange={inputHandler}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
