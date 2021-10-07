import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserWithEmail } from '../actions/authActions';


const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;

        dispatch(registerUserWithEmail(email,password));
    };



    return (
        <div>
            <h1 style={{textAlign:'center'}}>REGISTRATION PAGE</h1>
            <form onSubmit={handleSubmit} className='form'>
               <div className="name">
                  <label htmlFor="name">Email</label><br/>
                  <input type="email" name="email" placeholder="User Name"/>
               </div>
               <div className="email">
                  <label htmlFor="name">Password</label><br/>
                  <input type="password" name="password" placeholder="Password"/>
               </div>
               <button type="submit">Register Contact User</button>
            </form><br/>
        </div>
    );
}

export default Register;

