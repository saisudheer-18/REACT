import React from 'react';

class Color extends React.Component{
  constructor(){
    super();
    this.state={
      color:""
    }
  }
  changePink(){
    this.setState({color:"PINK"})
  }
  changeBlue(){
    this.setState({color:"BLUE"})
  }


  render(){
    return(
      <div>
        <h1 style={{color: this.state.color}}>I AM SAI SUDHEER{this.state.color}</h1>
        <button onClick={()=>{this.changePink()}}>CHANGE TO PINK</button>
      <button onClick={()=>{this.changeBlue()}}>CHANGE TO BLUE</button>
      </div>
    )
  }

}
export default Color;