import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

    state = {
        action: ""
    }

    addTodo = () => {
        const task = { action: this.state.action }

        if (task.action && task.action.length > 0) {
            axios.post('/api/todos', task)
            .then(res => {
                if (res.data){
                    this.props.getTodos();
                    this.setState({action: ""});
                }
            })
            .catch(err => console.log(err))
        } else {
            console.log("Input field required")
        }
    }

    handleChange  = (e) => {
        this.setState({
            action: e.target.value
        })
    }

    render() {
        let { action }= this.state;
        return (
            <div>
                <input type="text" value={action} onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}


export default Input;