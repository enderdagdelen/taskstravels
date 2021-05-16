import {addTask, editTask, removeTask} from '../../actions/task'
import {taskData} from '../fixtures/tasks'


test('should removeTask', ()=>{
    const action = removeTask('123')
    expect(action).toEqual({
        type:'REMOVE_TASK',
        id:'123'
    })
})


test('should edit task',()=>{
    const result = editTask('123',{name:'Ender'})
    expect(result).toEqual({
        type:'EDIT_TASK',
        id:'123',
        updates:{name:'Ender'}
    })
})


test('should add task',()=>{
    const result = addTask(taskData[0])
    expect(result).toEqual({
        type:'ADD_TASK',
        task:{
            ...taskData[0],
            id:expect.any(String),
        }
    })
})