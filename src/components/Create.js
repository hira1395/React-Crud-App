import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../redux/UserReducer';
import { useNavigate } from 'react-router-dom';
 

const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state) => state.users);
    console.log(users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id:users[users.length - 1].id+1,name,email}))
        navigate('/')
 
    }

  return (
    <div className='d-flex vh-50 justify-content-center align-item-center mt-5'>
            <div className='w-90 border bg-secondary text-white p-5'>
                <h3 className='text_color'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter name' onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter email' onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <br/>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Create
