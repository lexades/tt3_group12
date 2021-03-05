import React,{useState} from 'react';
import Axios from 'axios';

//import './Login.styles.css'

export default function BalanceTable(){

    const[username,setusername]=useState(''); //Group12
    const[password,setpassword]=useState(''); //Asu_MHFWvDbsXKE
    const[cashBalance,setCashBalance]=useState(''); 
    const[assetBalance,setAssetBalance]=useState(''); 


    var Data = {
        'accountKey':"e200e4e0-e45a-4923-9079-6ebd929f97db",
    };

    let Config = {
        headers: {
                'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
        }
    };

    const handleLogin = () => {
        Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', Data, Config)
            .then((response) => {
                console.log(response);
                if(!response.status===200) {
                    setCashBalance(response.data.cashBalance);
                    setAssetBalance(response.data.assetBalance);
                } 
            }
        );
    };

    return(
        <div className='login_box'>
            <table>
            <tbody>
                <tr>
                    <td colSpan='2'><img src='https://www.nicepng.com/png/full/267-2670427_1-dbs-group-holdings-ltd-dbs-bank-logo.png' alt='logo'></img></td>
                </tr>
                <tr>
                    <td>User</td>
                    <td><input type='text' onChange={(e)=>{setCashBalance(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='text' onChange={(e)=>{setAssetBalance(e.target.value)}}></input></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}