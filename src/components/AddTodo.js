import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const style = {
    containerBar: {
        marginTop: '20px'
    }
}

class AddTodo extends Component {
    state = {
        currentTodo: '',
    };
    handleType = (e) => {
        this.setState({currentTodo: e.target.value})
    };
    addTodo = () => {
        this.props.dispatch(addTodo(this.state.currentTodo));
        this.setState({currentTodo: ''});
    }
    render() {
        return (
            <div className="columns" style={style.containerBar}>
                <div className="column is-6 is-offset-3">
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input 
                                onChange={this.handleType}
                                value={this.state.currentTodo}
                                className="input" 
                                type="text" 
                                placeholder="Type todo description"/>
                        </div>
                        <div className="control">
                            <a onClick={this.addTodo} className="button is-info">
                                AddTodo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const AddTodos = connect()(AddTodo);

export default AddTodos;