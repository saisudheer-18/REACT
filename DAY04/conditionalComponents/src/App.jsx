import React from 'react';
import Child from './Child';
import Home from './Home';
class Parent extends React.Component{
  state={
    login:false
  }
  changeInf=()=>{
    this.setState({login:true})
  }
  render(){
    return(
    <div>

      {/* <h1>THIS INFORMATION {this.state.login?"LOGGED IN":"NOT LOGGED IN"}</h1> */}
      <h1>This Is The Two Componenets{this.state.login?<Home/>:<Child/>}</h1>
      <button onClick={()=>{this.changeInf()}}>Change Information</button>
      {/* <Child>

        <p>CHILD COMPONENT</p>
      </Child> */}
    </div>
    )
  }

}
export default Parent;