import React from 'react';
import TaskList from './TaskList.js';
import {Link} from 'react-router-dom'
import TasksPage from '../components/TasksPage'

const TasksTravels =()=>(
    <div className="container" id="taskstravels">
        <div className="row text-center" id="taskstravels-row">
            <div className="col-6">
                <Link to='/taskspage'><i className="fas fa-tasks fa-4x" id="tasks-link"></i></Link>
            </div>
            <div className="col-6">
                <Link to="/travelspage"><i className="fas fa-route fa-4x" id="travels-link"></i></Link>
            </div>
        </div>

        <div className="row text-center" id="taskstravelstext-row">
            <div className="col-6">
                <p className="sub-heading">Tasks</p>
            </div>
            <div className="col-6">
                <p className="sub-heading">Travels</p>
            </div>
        </div>
    </div>
)

export default TasksTravels;

/*

            <button href="/taskspage" className="btn-tasks"><i class="fas fa-tasks fa-4x"></i><br></br><p className="button-subheading">tasks</p></button>
            
            <button className="btn-travels"><i class="fas fa-route fa-4x"></i><br></br><p class="button-subheading">travels</p>

            </button>


*/