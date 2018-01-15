import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { doneTodo } from '../actions';

import './todo.css';

const Todos = ({ todos, doneTodo }) =>{
    return (
        <div className="container">
            <AddTodo/>
            <div className="columns">
                <div className="column is-6 is-offset-3">
                    <ul>
                    <ReactCSSTransitionGroup 
                        transitionName="example" 
                        transitionEnterTimeout={700} 
                        transitionLeaveTimeout={700}
                        >
                        {todos && todos.map((todo, index) => (
                            <li key={index}>
                                <Todo
                                    description={todo.description} 
                                    done={todo.done}
                                    onClick={() => doneTodo(index)}
                                    />
                            </li>
                        ))}
                    </ReactCSSTransitionGroup>
                    </ul>
                </div>
            </div>

        </div>
    );
}

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_DONE':
            return todos.filter((todo) => (todo.done === true))
        case 'SHOW_ALL':
            return todos;
        default:
            return todos;
    }
}
const mapStatetoProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doneTodo: id => {
            dispatch(doneTodo(id))
        }
    }
}
const ConnectedTodos = connect(mapStatetoProps, mapDispatchToProps)(Todos);

export default ConnectedTodos;