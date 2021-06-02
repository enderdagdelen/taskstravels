import React from 'react'
import { Link } from 'react-router-dom'
import TaskList from './TaskList'
import TaskFilterComponent from '../components/TaskFilter';

const TasksPage = () => (

    <div className="taskspage_container mt-5">
        <h1 className="text-center ">TASKS PAGE</h1> 

            <Link to='/' id="home"><i className="fas fa-home fa-2x"></i>_Home Page</Link>
     
    
        <TaskFilterComponent />
        <TaskList/>
    </div>

)






export default TasksPage