export default function counter(state = 0, action){
    switch(action.type){
        case 'ADD_COUNTER':
            return state + action.payload                

        case 'MINUS_COUNTER':
            return state - action.payload                
        default:
            return state
    }
}