import React, { Component } from 'react';
import ChildRef from './ChildRef';

class ParentRef extends Component
{
    constructor(props)
    {
      super(props)
      this.compRef = React.createRef()
    }
    clickFocusOnChild = () =>
    {
        this.compRef.current.focusMethod()
    }
  render() {
    return(
        <div>
            <ChildRef ref = {this.compRef}/>
            <button onClick={this.clickFocusOnChild}>Click</button>
        </div>
    )
  }
}

export default ParentRef;
