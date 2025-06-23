import React from 'react'
import "../addUser/AddUser.css"
import { Link } from 'react-router-dom'
const EditUser = () => {
  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3> Update User</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' id='fname' name='fname'autoComplete='off' placeholder='First Name'></input>
        </div>
        <div className='inputGroup'>
            <label htmlFor='lname'>First Name</label>
            <input type='text' id='lname' name='lname'autoComplete='off' placeholder='Last Name'></input>
        </div>
        <div className='inputGroup'>
            <label htmlFor='email'>First Name</label>
            <input type='text' id='email' name='email'autoComplete='off' placeholder='Email Address'></input>
        </div>
        <div className='inputGroup'>
            <label htmlFor='address'>First Name</label>
            <input type='text' id='address' name='address'autoComplete='off' placeholder='Address'></input>
        </div>
       
         <div className='inputGroup'>

           <button type='submit'>Update User</button>
        </div>

      </form>
    </div>
  )
}

export default EditUser
