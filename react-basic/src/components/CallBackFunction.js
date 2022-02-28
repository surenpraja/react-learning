import React, { Component } from 'react';

class CallBackFunction extends Component {
    constructor()
    {
        super()
        this.state = {message: 'Hello'}
        // the bottom line of code is to demonstrate for third method approach
        this.evenHandler = this.evenHandler.bind(this)
    }
    // evenHandler()  
    // {
    //     this.setState ({message:'button triggered'})
    //     console.log(this)
    // }
    //this method is to demonstrate fourth  method only
    evenHandler = () =>
        {
            this.setState ({message:'button triggered'})
            console.log(this)
        }
  render() {
    return (
    <div>
        <div>{this.state.message}</div>
        {/* one method is to bind in the render method*/}
        {/* <button onClick = {this.evenHandler.bind(this)}>Click</button> */}
        {/* second method is by calling the event handler as a class object using arrow */}
        {/* <button onClick = {()=>this.evenHandler()}>Click</button> */}
        {/* third method is by binding in the constuructor */}
        <button onClick = {this.evenHandler}>Click</button>
    </div>
    )
  }
}

export default CallBackFunction;

