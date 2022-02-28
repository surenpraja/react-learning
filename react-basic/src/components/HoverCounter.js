import React, {Component} from "react";
import WithCounter from "./WithCounter"

class HoverCounter extends Component {
    render()
    {
        const {count, clickHandler} = this.props
        return(
            <div>
                <h2 onMouseOver={clickHandler}>Hover {count} times</h2>
            </div>)
    }
}
export default WithCounter(HoverCounter)