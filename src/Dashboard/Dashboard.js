import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"

import './Dashboard.styles.css'

function Dashboard(){
    return(
        <div className='dashbox'>
            <h1 className='welcome'>Welcome back, user.name!</h1>
            <marquee>Have a pleasant day with DBS!</marquee>
            <div>
                <table>
                    <tr>
                        <td><button>Balance</button></td>
                        <td><button>Transaction</button></td>
                        <td><button>Market</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard