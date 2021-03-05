import React,{useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Pricing.styles.css'



export default function Pricing(){

    const [assetSymbol,setassetSymbol]=useState('')
    const [price,setprice]=useState('')
    // [timeStamp,setimeStamp]=useState([])

    let Config = {
        headers: {
                'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
        }
    };


    const PricingList = () => {
        Axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical',{}, Config)
        .then((response) => {
            //convert timestamp epoch datatype
            //const utcSeconds = response.data[0].timestamp;
            // d.setUTCSeconds(utcSeconds);//set to readable timestamp
            // console.log(d);
            // var datee=d.toLocaleDateString();

                //if select = price 
                //show prices
                setassetSymbol(response.data[0].assetSymbol);
                setprice(response.data[0].price);
                //setimeStamp(response.data[0].timestamp);

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
                   
                    <td>Price</td>
                    
                    
                </tr>
                <tr>
                    
                    <td>{assetSymbol}</td>
                    
                    <td>{price}</td>
                    
                    
                </tr>
                <tr>
                <td colspan='3'>
                
                    <input type='number' placeholder='Price'></input>
                    <input type='date'></input>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

