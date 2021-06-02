import React from 'react';
import TaskForm from './TaskForm'
import {connect} from 'react-redux';
import {addTask} from '../actions/task';


const AddTask = (props) => (
    <div>
        Add Task Component
        <TaskForm 
            onSubmit ={(task)=>{
                props.dispatch(addTask(task))
                setTimeout(()=>{props.history.push('/taskspage')},750)
            }}
        />
        
    </div> 
)

export default connect()(AddTask);