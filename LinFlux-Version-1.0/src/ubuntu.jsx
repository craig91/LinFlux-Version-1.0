import React from 'react'

export default React.createClass({
	render: function (){
		return(
			<div className="content ubuntu">
        <img id src={require("./images/Ubuntu_banner.png")} alt="Ubuntu Banner" width="100%" height="300px"/>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/i_4Kh5kE3xA" frameborder="0" allowfullscreen>
          
        </iframe>

      </div>



		)
	}
})