import React from 'react'
import { connect } from 'react-redux'
import {TaskListItem,TaskListItem_1024,TaskListItem_768,TaskListItem_414} from './TaskListItem';
import {TaskRows,TaskRows1024,TaskRows768,TaskRows414} from './TaskRows';
import {useHistory} from 'react-router-dom';
import getVisibleTasks from '../selectors/taskSelector';


window.addEventListener('resize',()=>{
    history.go(0)
})

const rowAdjustment = () => {
    if (window.innerWidth <= 414) {
                                
        return <TaskRows414/>
        
    } else if(window.innerWidth <= 768){
        return <TaskRows768 />

            
    }else if(window.innerWidth <= 1024){
       
        return <TaskRows1024 />
        
        
    }else {
         return <TaskRows />
        
    }
}

const TaskList = (props) => (

    <div id="taskList">
        <h1>Task List Component</h1>
        The Number of Tasks: {props.tasks.length}
        <br></br>
        <hr/>

            <table className="table">
                <thead>
                    
                    {rowAdjustment()}
                                  
                </thead>

                <tbody>

                    {props.tasks.map((task)=>{
                        if (window.innerWidth <= 414) {
                            return <TaskListItem_414 key={task.id}  {...task}/>
                        } else if(window.innerWidth <= 768){
                            return <TaskListItem_768 key={task.id}  {...task}/>
                        }else if(window.innerWidth <= 1024){
                            return <TaskListItem_1024 key={task.id}  {...task}/>
                        }else {
                            return <TaskListItem key={task.id}  {...task}/>
                        }
                        
                    })}
                        
                </tbody>
            </table>
           
        
    </div>
)


 

const mapStateToProps = (state) => {
    return{
        tasks:getVisibleTasks(state.tasks,state.taskFilters)
    }
}

export default connect(mapStateToProps)(TaskList)

