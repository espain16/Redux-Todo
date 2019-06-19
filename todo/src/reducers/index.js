//payload refers to the actual data in a redux action object 

const initialState = {
    todos: [
        {
            id: 1,
            todo: 'Eat more pizza',
            completed: false
        }
    ]
}

export default(state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
         const newTodo= {
             id: state.todos[state.todos.length - 1].id + 1,
             todo: action.payload,
             completed: false

         };   
            return{
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }   
} 



