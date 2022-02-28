import React, {Component} from "react";

class Form extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: '',
            comments:'',
            topic:''
        }
        //this.state.username = this.state.username.bind()
    }
    handlerTextOnChange = (event) =>
    {
        this.setState({
            username: event.target.value
        })
    }
    handlerComments = event =>
    {
        this.setState({
            comments: event.target.value
        })
    }
    handlerSelect = event =>
    {
        this.setState({
            topic:  event.target.value
        })
    }
    handlerSubmitForm = event =>
    {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault(this.state)
    }
    render()
    {
        return(
            <form onSubmit = {this.handlerSubmitForm}>
                <div>
                    <label>Username</label>
                    <input
                    type='text'
                    value = {this.state.username }
                    onChange = {this.handlerTextOnChange}/>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comments} onChange={this.handlerComments}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange = {this.handlerSelect}>
                    <option value = 'react'>React</option>
                    <option value = 'angular'>Angular</option>
                        <option value = 'vue'>Vue</option>
                    </select>
                    <option></option>
                </div>
                <button type='submit'>Submit</button>
            </form>
            )
    }
}
export default Form;