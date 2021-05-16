import { v4 as uuidv4} from 'uuid';


export const addTask = (
    {name='',
    project='',
    taskLocation='',
    withWhomToMeet='',
    date='',
    timeOfLeave='',
    timeOfReturn='',
    taskDuration=0,
    meansOfTransport='',
    advance=0,
    notes=''}={}) => ({
    type:'ADD_TASK',
    task:{
        id:uuidv4(),
        name,
        project,
        taskLocation,
        withWhomToMeet,
        date,
        timeOfLeave,
        timeOfReturn,
        taskDuration,
        meansOfTransport,
        advance,
        notes
    }
})


export const editTask = (id,updates) => ({
    type:'EDIT_TASK',
    id,
    updates
})

export const removeTask = (id) => ({
    type:'REMOVE_TASK',
    id
})