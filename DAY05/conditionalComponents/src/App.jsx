import React from 'react';
import Child from './Child';
import Home from './Home';
class Parent extends React.Component{
  state={
    login:false
  }

  changeLogin=()=>{
    this.setState({login:!this.state.login})
 
  }

  render(){
    return(
    <div>
      
      <h1>{this.state.login?<button onClick={()=>this.changeLogin()}>Login</button>:<button onClick={()=>this.changeLogin()}>Logout</button>}</h1>
      {/* <h1>This Is The Two Componenets{this.state.login?<Home/>:<Child/>}</h1>
      <button onClick={()=>{this.changeLogin()}}>Login</button>
      <button onClick={()=>{this.changeLogout()}}>Logout</button> */}
      {/* <Child>

        <p>CHILD COMPONENT</p>
      </Child> */}
    </div>
    )
  }

}
export default Parent;