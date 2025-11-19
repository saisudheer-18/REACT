import React from 'react';
import Child from './chlid';

class Parent extends React.Component{
  state={
    count:"1",
    name:"ReactJS"
  }
  render(){
    return(
      <div>

      <h1>This IS A PARENET COMPONENT</h1>
      <Child count={this.state.count} name={this.state.name}/>
      
      </div>
    
    )
  }

}
export default Parent