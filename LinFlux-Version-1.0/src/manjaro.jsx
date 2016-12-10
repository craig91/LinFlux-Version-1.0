import React from 'react'

export default React.createClass({
  render: function (){
    return(
    <div className="content manjaro">
      <img id src={require("./images/manjaro_banner.png")} alt="Manjaro Banner"  />
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DrPIz0D2GLs" frameborder="0" allowfullscreen>
      </iframe>
    </div> 
      
      )
  }
})



