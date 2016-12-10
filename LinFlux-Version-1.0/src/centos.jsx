import React from 'react'

export default React.createClass({
  render: function (){
    return (
      <div className="content centOS">
        <img id src={require("./images/centos_banner.png")} alt="Ubuntu Banner" width="100%" height="302px"/>

             <iframe width="560" height="315" src="https://www.youtube.com/embed/PfL86GXuc3U" frameborder="0" allowfullscreen>
             </iframe>
      </div>
    )
  }
})