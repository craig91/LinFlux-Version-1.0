import React from 'react'

export default React.createClass({
  render: function (){
    return(
      <div className="content openSUSE">
        <img id src={require("./images/opensuse_banner.png")} alt="openSUSE Banner" />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3bN6PY75d-g" frameborder="0" allowfullscreen>
          
        </iframe>
      </div>

     

    )
  }
})

