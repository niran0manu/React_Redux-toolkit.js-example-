import React  from 'react'
import { useDispatch } from 'react-redux';
import{login, logout} from './features/user';
import'./Login.css';

function Login() {
   
    const dispatch = useDispatch();

    return (
        <div className="buttons">
           
            <button className="login__button" onClick = {() => { dispatch(login({name:'Jane Doe',age:35, email:"jane.doe@mail.com"}));
        }}>
            Login
            </button>
            <button className="logout__button" onClick = {() => { dispatch(logout());
        }}>
            Logout
            </button>
        </div>
        
    )
}

export default Login


