import React from 'react'
import jsonData from './data.json'

export default React.createClass({
	getInitialState() {
    return{
      searchResults: [],

    }
  },
  search: function(){
    var searchQuery = document.getElementById('text').value
    var results = jsonData.sitemap.reduce(function(previousValue, currentValue){
      if(currentValue.keywords.includes(searchQuery)){
        return previousValue.concat({
     	    route: currentValue.route,
     	    label: currentValue.label
        })
      } else {
        return previousValue
      }
   },[])
       
	},
	render: function(){
		return(
			<div>
				<input id="text" placeholder="search"></input>
				<button onClick={this.search}>search</button>
      
			
      </div>
      
      

		)
	}
})