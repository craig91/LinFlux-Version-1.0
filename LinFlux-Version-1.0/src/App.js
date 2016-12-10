import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Ubuntu from './ubuntu'
import Manjaro from './manjaro'
import OpenSUSE from './opensuse'
import CentOS from './centos'
import Xubuntu from './xubuntu'
import KaliLinux from './kaliLinux'
import UbuntuStudio from './ubuntustudio'
// import Search from './search.jsx'
import TopNav from './topnav.jsx'
import SideNav from './sidenav.jsx'
import Home from './home.jsx'
import Store from './store'




var App = React.createClass({
	render : function(){
		return(
			<div>
			<TopNav />
			
			<div id="container">
			  <SideNav />
			  {this.props.children}
			</div>
		    </div>
        )
	}
})



ReactDOM.render((
  <Router history={hashHistory}>
   <Route path="/" component={App}>
    <IndexRoute component={Home} />
      <Route path="ubuntu" component={Ubuntu} />
      <Route path="manjaro" component={Manjaro} />
      <Route path="opensuse" component={OpenSUSE} />
      <Route path="centos" component={CentOS} />
      <Route path="xubuntu" component={Xubuntu} />
      <Route path="kaliLinux" component={KaliLinux} />
      <Route path="ubuntustudio" component={UbuntuStudio} />
      <Route path="store" component={Store} />
      
      </Route>
  </Router>
   ),
  document.getElementById('root')
);
