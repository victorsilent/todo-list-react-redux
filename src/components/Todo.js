import React from 'react';

const Todo = ({ description, done, onClick }) => {
    const style = {
        checkbox: {
            marginRight: '10px',
        },
        label: {
            color: done ? 'green' : 'red',
            textDecoration: done ? 'line-through' :''
        }
    }
    return (
        <label className="checkbox" style={style.label}>
            <input type="checkbox" value={done} onClick={onClick} style={style.checkbox}/>
            {description}
        </label>
    );
};

export default Todo;