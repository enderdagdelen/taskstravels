import taskReducer from '../../reducers/taskReducer'
import {addTask, editTask, removeTask} from '../../actions/task'
import {taskData} from '../fixtures/tasks'


test('should return empty array',()=>{
    const result = taskReducer(undefined, {
        type:'@@INIT'
    })
    expect(result).toEqual([])
})

test('should remove an item by id',()=>{
    const action = {
        type:'REMOVE_TASK',
        id:taskData[0].id
    }
    const result = taskReducer(taskData, action)

    expect(result).toEqual([taskData[1],taskData[2]])
})

test('should edit an item by id',()=>{
    const action = {
        type:'EDIT_TASK',
        id:taskData[0].id,
        updates:{name:'George Foreman'}
    }
    const result = taskReducer(taskData, action)

    expect(result[0].name).toEqual('George Foreman')
})

test('should add an item by id',()=>{
    const task = {
        name:'Henry the VIII'
    }
    const action = {
        type:'ADD_TASK',
        task
        
    }
    const result = taskReducer(taskData, action)

    expect(result.length).toEqual(4)
    expect(result).toEqual([...taskData, task])
})