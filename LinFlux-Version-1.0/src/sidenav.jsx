import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render: function (){
		return(
	    <div id="side_bar">
          <ul id="lin-list">
            <li>Distros</li>
            <li><Link to="/ubuntu"><img src={require("./images/ubuntu-logo.png")} alt="Ubuntu" height="20px" width="20px"/>Ubuntu</Link></li>
            <li><Link to="/manjaro"><img src={require("./images/manjaro_logo.png")} alt="manjaro" height="20px" width="20px" />Manjaro</Link></li>
            <li><Link to="/opensuse"><img src={require("./images/openSUSE.png")} alt="openSUSE" height="20px" width="20px" />OpenSUSE</Link></li>
            <li><Link to="/centos"><img src={require("./images/centOS.png")} alt="CentOS" height="20px" width="20px" />CentOS</Link></li>
            <li><Link to="/xubuntu"><img src={require("./images/xubuntu_logo.png")} alt="Xubuntu" height="20px" width="20px" />Xubuntu</Link></li>
            <li><Link to="/kalilinux"><img src={require("./images/kali-logo.png")} alt="Kali Linux" height="20px" width="20px" />Kali Linux</Link></li>
            <li><Link to="/ubuntustudio"><img src={require("./images/Studio-logo.png")} alt="Ubutntu-Studio" height="20px" width="20px" />Ubuntu Studio</Link></li>
           </ul>
        </div>
       )
	}
})