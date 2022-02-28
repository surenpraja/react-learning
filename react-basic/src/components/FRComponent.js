import React, { Component } from 'react';
import FRInput from './FRInput';


class FRComponent extends Component
{
    constructor()
    {
        super()
        this.inputRef = React.createRef()
    }
    clickHandler = () =>
    {
        this.inputRef.current.focus()
    }
  render() {
    return(
        <div>
            <FRInput ref={this.inputRef}/>
            <button onClick = {this.clickHandler}>Foucs child element</button>
        </div>
    )
  }
}

export default FRComponent;
