import React, { Component } from "react";

class Ref extends Component
{
    constructor()
    {
        super()
        this.inputRef = React.createRef()
    }
    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickhandler = () =>
    {
       alert(`${this.inputRef.current.value}`)
    }
    render()
    {
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickhandler}>Click</button>
            </div>)
    }
}
export default Ref