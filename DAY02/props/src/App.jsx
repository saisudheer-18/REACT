import React from 'react';
import Child from './child.jsx';

class Parent extends React.Component{
  constructor(){
    super();
    this.state={
      name:"JAVA"
    }
  }
  changeName=()=>{
    this.setState({name:"REACT"})
  }
  render(){
    return(
      <div>
        <h1>Default : {this.state.name}</h1>
        <button onClick={()=>{this.changeName()}}>Change</button>
        <Child name={this.state.name}/>
      </div>
    )
  }
}
export default Parent