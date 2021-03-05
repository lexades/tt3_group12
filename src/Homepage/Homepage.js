import React from 'react';

var pigImage = require('./pig.jpg')
var dbsImage = require('./dbslogo_withname.jpg')


export class Homepage extends React.Component {
  render() {
    return (
      <div>
        <title>TechTrek 3 Group 12</title>
        <meta charSet="“utf-8”" />
        <link rel="stylesheet" href="css.css" />
        <style dangerouslySetInnerHTML={{__html: "\ndiv.container {\n      display:inline-block;\n    }\n\t" }} />
        <div id="wrapper">
          <header>
            <a href="login.html"><img src={dbsImage.default} alt="Galaxys logo" width="180px" height="90px" style={{padding: '10px'}} /></a>
            <nav>
              <a href="balance.html"><b>Balance</b></a>
              <a href="transaction.html"><b>Transaction</b></a>
              <a href="market.html"><b>Market</b></a>
              <a href="login.html"><b>Login</b></a>
              <div className="dropdown">
                <button className="dropbtn"><a href="index.html"><b>Movies↡</b></a></button>
                <div className="dropdown-content">
                  <a href="cash.html"><b>Cash Balance</b></a>
                  <a href="assets.html"><b>Assets</b></a>
                </div>
              </div>
            </nav>
          </header>
          <div>
            <h1><center>DashBoard</center></h1>
          </div>
          <div className="content">
            <div className="container">
              <img src={pigImage.default} alt="Money" width="500px" height={384} style={{padding: '10px 10px 10px 30px'}} />
              <div style={{paddingLeft: '45px'}}>
                <button className="booknow"><a href="personaldetail.php" style={{textDecoration: 'none'}}><b>Click here to Learn More</b></a></button>
              </div></div>
            <div className="container">
              <p>Navigate money with confidence</p><p>NAV Planner helps you track, protect, and grow your money on your terms.</p><table>
              </table>
            </div></div>
          <footer>
            <right><p>Follow Us:@TechTrek3_Group12</p></right>
            <right><p><b>© Copyright 2021 Group 12 - All rights Reserved.</b></p></right>

          </footer>
        </div>
      </div>
    );
  }
};