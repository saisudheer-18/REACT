import React from 'react';

class Demo extends React.Component {
  constructor(){
    super();
    this.state={
      name:"SAI SUDHEER"
    }
  }

  changeName(){
    this.setState({name:"SUDHEER"})
  }
  render(){
    return(
      <div>
        <h1>Welcome To The App {this.state.name}</h1>
        <button onClick={()=>{this.changeName()}}>Change Name</button>
      </div>
    )
  }
}
export default Demo;