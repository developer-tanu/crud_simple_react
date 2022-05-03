import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate,useParams } from "react-router-dom";

const Users = () => {
  let navigate=useNavigate;
  let {id}=useParams();
  // alert(id);
 const[user,setUser]=useState({
  name: "",
  username: "",
  email: "", 
 })

const{name,username,email}=user;

 const onInputChange=  e=>{
  setUser({...user,[e.target.name]:e.target.value})
 }
 useEffect(() => {
  loadUser();
}, []);


const loadUser = async () => {
  const result = await axios.get(`http://localhost:3003/users/${id}`);
  setUser(result.data);
};
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View A User</h2>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
               value={name}
              onChange={e=>onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e=>onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e=>onInputChange(e)}
            />
            <br></br>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Users;
