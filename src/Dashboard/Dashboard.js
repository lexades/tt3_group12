import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"


import './Dashboard.styles.css'
import Pricing from '../Pricing/Pricing'

function Dashboard(){

   
    return(
        <div className='dashbox'>
            <h1 className='welcome'>Welcome back, John</h1>
            <marquee>Have a pleasant day with DBS!</marquee>
            <Router> 
            <div>
                <table>
                    <tr>
                        <td><Link to="/balance"><button>Balance</button></Link></td>
                        <td><Link to="/transaction"><button>Transfer</button></Link></td>
                        <td><Link to="/market"><button>Market</button></Link></td>
                    </tr>
                </table>
            </div>
                <Switch>
                    <Route path={"/market"} exact component={Pricing} />
                </Switch>
            </Router>
            
        </div>
    )
}

export default Dashboard

