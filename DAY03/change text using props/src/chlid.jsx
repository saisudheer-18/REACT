import React, { Component } from 'react'

export class Chlid extends Component {
  render() {
    return (
    <div>
        <p style={{color:this.props.count > 0 ? 'green' : 'red'}}>THIS IS THE PARENT COMPONENT DATA {this.props.count} {this.props.name} </p>
        
        
        </div>
    )
  }
}

export default Chlid