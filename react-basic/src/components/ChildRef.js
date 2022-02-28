import React, { Component } from 'react';

export class ChildRef extends Component
{
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    focusMethod()
    {
        this.inputRef.current.focus()
        alert(this.inputRef.current.value)
    }
  render() {
    return(
        <div>
            <input type='text' ref={this.inputRef}/>
        </div>
        )
  }
}

export default ChildRef;

