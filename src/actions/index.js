export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo,
});

export const doneTodo = (index) => ({
    type: 'DONE_TODO',
    index,
})

export const addCounter = (payload) => ({
    type: 'ADD_COUNTER',
    payload,
})

export const minusCounter = (payload) => ({
    type: 'MINUS_COUNTER',
    payload,
})

export const changeFilter = (filter) => ({
    type: 'CHANGE_FILTER',
    filter
})



