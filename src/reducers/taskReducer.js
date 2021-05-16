

const taskReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ]

        case 'EDIT_TASK':
            return state.map((task) => {
                if(task.id === action.id){
                    return {
                        ...task,
                        ...action.updates
                    }
                }else{
                    return task
                }
            })
            
        case 'REMOVE_TASK':
            return state.filter(({id}) => {
                return id !== action.id
            })
        
        
        default:
           return state;
    }
}

export default taskReducer