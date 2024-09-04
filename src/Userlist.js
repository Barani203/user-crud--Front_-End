import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
function Userlist() {
    const[UserList,setUserList]=useState([])
    useEffect(() => {
  
     fetchUsers();
     
    }, [])

    let fetchUsers = async () =>{
        
            let userData = await axios.get("http://localhost:3000/to-do");
            console.log(userData.data)
            setUserList(userData.data)

    }

    let handledelete = async (id) =>{
       try {
        let result = window.confirm("Are you sure do you want to delete ?")
        if(result){
            await axios.delete(`http://localhost:3000/user/${id}`)
        alert ("user deleted")
        fetchUsers();
        }
       } catch (error) {
        console.log(error)
       }
    }
    
  return (
    <>
     <div className='row'>
        <div className='col-lg-6'>
        <h3>Userlist</h3>
        </div>
     <div className='col-lg-6 mt-1 mb-1 text-end'>
        <Link to={'/createuser'}><button className='btn btn-primary'>Createuser</button></Link>
     </div>
     </div>
    <table class="table table-striped table-hover">
    <tbody>
    {
        UserList.map((user)=>{
            return<tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
           <Link to={`/edituser/${user.id}`}><button className='btn btn-sm btn-primary mr-2'>Edit</button></Link>
           <button onClick={()=>handledelete(user.id)} className='btn btn-sm ml-3 btn-danger'>delete</button>
          </tr>
        } )
    }

  </tbody>
  </table>
    </>
  )
}

export default Userlist