import React,{useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';



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

            console.log(response.data[0].timestamp);
            }
        );
    };

    PricingList();


    return(
        <div>
            <table>
            <tbody>
                <tr>
                    <td>hello</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

