import React from 'react';

var pigImage = require('./Money-trap-1.jpg')
var dbsImage = require('./dbslogo_withname.jpg')
let white = {
  color: "#FFFFFF"
}

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
              <a href="login.html"><b>Login</b></a>
              <div className="dropdown">
                <div className="dropdown-content">
                  <a href="cash.html"><b>Cash Balance</b></a>
                  <a href="assets.html"><b>Assets</b></a>
                </div>
              </div>
            </nav>
          </header>
          <div className="content" >
            <div className="container" style={{border:'50px'}}>
              <img src={pigImage.default} alt="Money" width="600px" height={384} style={{padding: '100px 10px 10px 30px'}} />
              <div style={{paddingLeft: '45px'}}>
                <button className="booknow"><a href="personaldetail.php" style={{textDecoration: 'none'}}><b>Click here to Learn More</b></a></button>
              </div></div>
            <div className="container" style={{border-bottom:'200px'}}>
              <p style ={white}>The easiest way to trade.</p><p style={white}>Buy and sell your TTK digital assets with just a click of a button.</p><table>
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
