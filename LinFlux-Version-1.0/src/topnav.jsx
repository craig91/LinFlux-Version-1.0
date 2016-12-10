import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
	render: function(){
		return(     
		  <nav>
        <div className="inner-nav">
          <div className="logo">
            <img src={require("./images/LinFlux_Logo.png")} />
          </div>
        <div id="nav-list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/store">Store</Link></li>
            <li>Profiles</li>
          </ul>
       </div>
        </div>
      </nav>
    )
   }
})
          