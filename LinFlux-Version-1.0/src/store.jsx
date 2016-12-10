import React from 'react'
import StoreItem from './storeItem'
import data from './data.json'


export default React.createClass({
   render: function(){
       return(
         <div className="content store">
            <ul>
              {data.storeItems.map(function(element, index){
                return(
                  <li key={element.id}><StoreItem itemdata={element}></StoreItem></li>
                )
              })}

              
            </ul>
        </div>
       )
   }
})