// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component{
  // constructor(props){
  //   super()
  //   this.state = {
  //
  //   }
  // }
    getCord = (e) => {
      var cords = [e.clientX, e.clientY]
      console.log(cords)
      this.props.onReceiveCoordinates(cords)
    }

  render(){
    return(
      <button onClick={this.getCord}>Hi there!</button>
    )
  }
}
