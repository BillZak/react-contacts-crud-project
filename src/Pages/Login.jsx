import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { loginWIthEmail } from '../actions/authActions';

function Login(props) {
    const dispatch = useDispatch();
    const { replace } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;

        dispatch(loginWIthEmail(email,password,replace));
    }


    return (
    
        <div>
            <h1 style={{textAlign:'center'}}>LOGIN ACCOUNT</h1>
            <form onSubmit={handleSubmit} className='form'>
               <div className="name">
                  <label htmlFor="name">Email</label><br/>
                  <input type="email" name="email" placeholder="User Name"/>
               </div>
               <div className="email">
                  <label htmlFor="name">Password</label><br/>
                  <input type="password" name="password" placeholder="Password"/>
               </div>
               <button type="submit">Login Account</button>
            </form>
            <Link to="/register">Don't have an account? Sign up</Link>
        </div>
        
    );
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Login);

