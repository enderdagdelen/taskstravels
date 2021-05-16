import React from 'react'
import { Link } from 'react-router-dom'
import TaskList from './TaskList'

const TasksPage = () => (

    <div className="container mt-5">
        <h1 className="text-center ">TASKS PAGE</h1> 
        <Link to='/'><i className="fas fa-home fa-2x"></i>_Home Page</Link>   
        <TaskList/>
    </div>

)






export default TasksPage