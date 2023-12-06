import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initialState = []


export default (state=initialState, action) => {

    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            const newState = state.filter((todo)=> todo.id !==action.payload)
            return newState
        case UPDATE_TODO:
            const updatedState = state.map(todo=> {
                if(todo.id==action.payload.todoId){
                    todo.title = action.payload.todo.title  
                }

                return todo;
            })
                console.log(updatedState)
                return updatedState
        default:
            return state
    }

}