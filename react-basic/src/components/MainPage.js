import React, {Component} from "react";
import SubPage from "./SubPage";

class MainPage extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {pageType: 'Main'}
        this.mainPart  = this.mainPart.bind(this)
    }
    mainPart(subSection)
    {
        this.setState(
               alert(`Hello ${this.state.pageType} ${subSection} `)
        )
    }
    render()
    {
        return (
                <div>
                    <SubPage mainHandler = {this.mainPart}/>
                    {/* <SubPage/> */}
                </div>
        )
    }
}

export default MainPage