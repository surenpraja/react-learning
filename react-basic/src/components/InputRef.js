import React, {Component} from "react";

class InputRef extends Component 
{
    constructor()
    {
        super()
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) =>
        {
            this.cbRef = element
        }
    }
    componentDidMount()
    {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef)
        {
            this.cbRef.focus()
        }

    }
    clickEventHandler = () =>
    {
        // alert(`${this.inputRef.current.value}`)
        alert(this.cbRef.value)
    }
    render()
    {
        return(
            <div>
                {/* <input type="text" ref={this.inputRef} /> */}
                <input type="text" ref={this.setCbRef}/>
                <button onClick = {this.clickEventHandler}>Click</button>
            </div>
        )
    }
}
export default InputRef