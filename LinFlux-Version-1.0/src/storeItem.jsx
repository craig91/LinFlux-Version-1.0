import React from 'react'

export default React.createClass({
  render: function(){
    return(
      <div>
        {this.props.itemdata.image}

        {this.props.itemdata.description}
        
        
        
        {this.props.itemdata.price}

      </div>

    )
  }
})