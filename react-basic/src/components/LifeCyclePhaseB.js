import React, {Component} from "react";

class LifeCyclePhaseB extends Component 
{
    constructor(props)
        {
            super(props)
            this.state = {name:'suren'}
            console.log('LifeCyclePhaseB constructor')
        }

    static getDerivedStateFromProps(props, state)
    {
        console.log('LifeCyclePhaseB getDerivedStateFromProps')
        return null
    }

    //static getDeriveStateFromProps
    componentDidMount()
    {
        console.log('LifeCyclePhaseB componentDidMount')
    }

    render()
    {
        console.log('LifeCyclePhaseB render')
        return(
            <div>LifeCyclePhaseB</div>
        )
    }
}
export default LifeCyclePhaseB