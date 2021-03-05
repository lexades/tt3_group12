import React,{useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Login.styles.css'

export default function Login(){

    const History=useHistory();

    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[loginStatus,setLoginStatus]=useState('');

    return(
        <div>
            <table>
            <tbody>
                <tr>
                    <td colSpan='2'><img src='https://www.nicepng.com/png/full/267-2670427_1-dbs-group-holdings-ltd-dbs-bank-logo.png' alt='logo'></img></td>
                </tr>
                <tr>
                    <td>User</td>
                    <td><input type='text' onChange={(e)=>{setusername(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='text' onChange={(e)=>{setpassword(e.target.value)}}></input></td>
                </tr>
                <tr><td colSpan='2'>
                    <button className='login_button'>Login</button>
                    <p>{loginStatus}</p>
                    <a href="#forgotpwd">Forget password?</a>
            </td></tr>
            </tbody>
            </table>
        </div>
    )
}