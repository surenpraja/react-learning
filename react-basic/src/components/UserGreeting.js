import React, {Component} from 'react'

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {isLogIn: true}
    }
    render()
    {
        // first method of conditional rendering using if/else
        // if (this.state.isLogIn)
        // {
        //     return(<div>Welcome Surendra</div>)
        // }
        // else
        // return(<div>Welcome Guest</div>)

        // second method of conditional rendering using variable
        // let statusCheck
        // if (this.state.isLogIn)
        // {
        //     statusCheck = (<div>Welcome Surendra</div>)
        // }
        // else
        //     statusCheck = (<div>Welcome Guest</div>)

        // return statusCheck

        // third method of conditional rendering using tentative method
        // return this.state.isLogIn ? (<div>Welcome Surendra</div>) : (<div>Welcome Guest</div>)

        // fourth method is short circuit method : this method will display information only when true
        return this.state.isLogIn && (<div>Welcome Surendra</div>)

    }
}
export default UserGreeting