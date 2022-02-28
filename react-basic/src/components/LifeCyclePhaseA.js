import React, {Component} from "react";
import LifeCyclePhaseB from "./LifeCyclePhaseB";

class LifeCyclePhaseA extends Component 
{
    constructor(props)
        {
            super(props)
            this.state = {name:'suren'}
            console.log('LifeCyclePhaseA constructor')
        }

    static getDerivedStateFromProps(props, state)
    {
        console.log('LifeCyclePhaseA getDerivedStateFromProps')
        return null
    }

    //static getDeriveStateFromProps
    componentDidMount()
    {
        console.log('LifeCyclePhaseA componentDidMount')
    }

    render()
    {
        console.log('LifeCyclePhaseA render')
        return(
            <div>
                <div>LifeCyclePhaseA</div>
                <LifeCyclePhaseB>LifeCyclePhaseB</LifeCyclePhaseB>
            </div>
        )
    }
}
export default LifeCyclePhaseA