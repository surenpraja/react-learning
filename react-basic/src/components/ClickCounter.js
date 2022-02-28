import React, {Component} from "react";
import WithCounter from "./WithCounter"

class ClickCounter extends Component {
    render()
    {
        const {count, clickHandler} = this.props
        return(
                <button onClick={clickHandler}>Click {count} Times</button>
            )
    }
}
export default WithCounter(ClickCounter)