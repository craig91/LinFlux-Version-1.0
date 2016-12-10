import React from 'react'

export default React.createClass({
  render: function (){
    return(
      <div className="content xubuntu">
        <img id src={require("./images/xubuntu_banner.png")} alt="Xubuntu Banner" width="100%" height="300px"/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dv26_2bjyhY" frameborder="0" allowfullscreen>
          
        </iframe>
      </div>

     

    )
  }
})