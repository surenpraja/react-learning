import React, {Component} from "react";

class MessagePrac extends Component{
    constructor(){
        super();
        this.state = {message: 'Hello from Practice message'}
    }
    changeMessage(){
        this.setState({message:'Button Click event triggered'})
    }

    render() {
        return(
                <div>
                    <h1>{this.state.message}</h1>
                    <button onClick = {()=>this.changeMessage()}>Subscribe</button>
                </div>
            )
    }

}

export default MessagePrac;