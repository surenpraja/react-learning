import React from "react";

const WithCounter = OrigianlComponent =>
{
    class NewComponent extends React.Component
    {
        constructor()
        {
            super()
            this.state = { count: 0}
        }
        clickHandler = () =>
        {
            this.setState (prevState =>
                {
                    return{count: prevState.count + 1}
                }
            )
        }
        render()
        {
            return(
                <OrigianlComponent count={this.state.count} clickHandler={this.clickHandler}/>
                )
        }
    }
    return NewComponent
}
export default WithCounter