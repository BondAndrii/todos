import React, { Component } from 'react'
import './TodoEditor.css'

class TodoEditor extends Component {
    state = {
        message: ''
    }
    // onClear() {
    //     this.setState({massage:""})
    // }
    handleChange = e => {
        this.setState({message: e.currentTarget.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        // this.onClear();
        this.props.onSubmit(this.state.message);
        this.setState({ message: "" });
    } 
    render() {
        return (
            <form className='TodoEditor'
            onSubmit={this.handleSubmit}>
                <textarea
                    className='TodoEditor__textarea'
                    value={this.state.message}
                    onChange={this.handleChange}>
                </textarea>
                <button type='submit' className='TodoEditor__button'>Додати вдосконалення</button>
            </form>
    )
    
        };
}

export default TodoEditor;