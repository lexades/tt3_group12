import React,{useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Pricing.styles.css'



export default function Pricing(){

    const [assetSymbol,setassetSymbol]=useState('')
    const [price,setprice]=useState('')
    const [timeStamp,setimeStamp]=useState('')

    let Config = {
        headers: {
                'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
        }
    };


    const PricingList = () => {
        Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical',{}, Config)
        .then((response) => {
            //convert timestamp epoch datatype
            var utcSeconds = response.data[0].timestamp;
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(utcSeconds);//set to readable timestamp
            console.log(d);
            var datee=d.toLocaleDateString()

                //if select = price 
                //show prices
                setassetSymbol(response.data[0].assetSymbol);
                setprice(response.data[0].price);
                setimeStamp(datee);

            }
        );
    };

    PricingList();


    return(
        <div>
            <table className='pricetable'>
            <tbody>
                <tr>
                    <td>Asset Symbol</td>
                    <td>{assetSymbol}</td>
                    <td>Price</td>
                    <td>{price}</td>
                    <td>TimeStamp</td>
                    <td>{timeStamp}</td>
                </tr>
                <tr>
                <td>
                    <input type='number' placeholder='Price'></input>
                    <input type='date'></input>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

