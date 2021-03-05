import React,{useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Login.styles.css'

export default function Pricing(){

    let Config = {
        headers: {
                'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
        }
    };

    const PricingList = () => {
        Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', [], Config)
        .then((response) => {
            console.log(response);
            }
        );
    };

    return(
        <div>
            <table>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

