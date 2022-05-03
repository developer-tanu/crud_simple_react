import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
const Home = () => {
  const[users,setUsers]=useState([]);

  useEffect(()=>{
    loadUsers()
  },[])


const loadUsers=async()=>{
  const result= await axios.get("http://localhost:3003/users");
  setUsers(result.data);
}
const deleteUser = async id => {
  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUsers();
};

  return (
    <div>

      <h1>Users</h1>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                 <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                   <button
                    className="btn btn-danger"
                    onClick={()=>deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
  
</Table>

    </div>
  )
}

export default Home