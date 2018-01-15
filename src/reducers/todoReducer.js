export default function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    description: action.todo,
                    done: false,
                },
                
            ]
        case 'DONE_TODO':
            return state.map((todo, index) => {
                console.log("teste");
                if(index === action.index){
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo
            })
        default:
            return state
    }
}