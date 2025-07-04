import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./User.css";
import { Link } from 'react-router-dom'

const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("https://mern-todo-backend-6oaa.onrender.com/api/getall");
        setUsers(response.data);
    }

    fetchData();

  },[])

  const deleteUser = async(userId) =>{
      await axios.delete(`https://mern-todo-backend-6oaa.onrender.com/api/delete/${userId}`)
      .then((respones)=>{
        setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='userTable'>
        <Link to={"/add"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.password}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default User