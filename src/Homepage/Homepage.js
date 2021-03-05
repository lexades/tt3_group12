import React from 'react';

var pigImage = require('./Money-trap-1.jpg')
var dbsImage = require('./dbslogo_withname.jpg')
let main = {
  fontSize: 30,
  color: "#FFFFFF"
}
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
            <a href="https://www.dbs.com/default.page"><img src={dbsImage.default} alt="Galaxys logo" width="180px" height="90px" style={{padding: '10px'}} /></a>
            <nav>
              <a href="login.html"><b>Login</b></a>
            </nav>
          </header>
          <div className="content" >
            <div className="container" >
              <img src={pigImage.default} alt="Money" width="700px" height="500px" style={{padding: '30px 10px 10px 30px'}} />
              <p style ={main}><b>The easiest way to trade.</b></p><p style={white}>Buy and sell your TTK digital assets with just a click of a button.</p>
              <div>
                <button className="booknow"><a href="personaldetail.php" style={{textDecoration: 'none'}}><b>Click here to Learn More</b></a></button>
              </div>
              </div>
            </div>

          <footer>
            <right><p>Follow Us:@TechTrek3_Group12</p></right>
            <right><p><b>© Copyright 2021 Group 12 - All rights Reserved.</b></p></right>

          </footer>
        </div>
      </div>
    );
  }
};
