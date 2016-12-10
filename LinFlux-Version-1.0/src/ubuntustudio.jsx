import React from 'react'

export default React.createClass({
  render: function (){
    return (
      <div className="content ubuntuStudio">
        <img src={require("./images/ubuntu_studio_banner.png")} alt="Ubuntu Banner" width="100%" height="300px"/>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/7OU3Wtf_cIY" frameborder="0" allowfullscreen>
          
        </iframe>

      </div>
    )
  }
})