import React,{useState} from 'react';
import Axios from 'axios';
//import './css.css';

//var dbsImage = require('./Homepage/dbslogo_withname.jpg');


export default function BalanceTable(){

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

    const BalanceData = () => {
        Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', Data, Config)
            .then((response) => {
                console.log(response);
                    setCashBalance(response.data.cashBalance);
                    setAssetBalance(response.data.assetBalance);
                        
            }
        );
    };

    BalanceData();

    return(
        
            <div id="wrapper">
                { <header>
                    <a href="https://www.dbs.com/default.page"><img src="" alt="Galaxys logo" width="180px" height="90px" style={{padding: '10px'}} /></a>
                    <nav>
                    <a href="login.html"><b>Login</b></a>
                    </nav>
                </header> }
                <table>
                <tbody>
                    <tr>
                        <td>Cash Balance</td>
                        <td><p>{cashBalance}</p></td>
                    </tr>
                    <tr>
                        <td>Asset Balance</td>
                        <td><p>{assetBalance}</p></td>
                    </tr>
                </tbody>
                </table>
                { <footer>
                    <right><p>Follow Us:@TechTrek3_Group12</p></right>
                    <right><p><b>© Copyright 2021 Group 12 - All rights Reserved.</b></p></right>

                </footer> }

            </div>
            
    )
}