import React from 'react';
import {connect} from 'react-redux';
import TaskForm from '../components/TaskForm';
import moment from 'moment'

const EditTask = (props) => {
    return (
        <div>
            Edit Tasks
            <br></br>
            id is {props.match.params.id}
            <br></br>
            <TaskForm 
                taskToEdit={props.task}
            />
            


        </div>
    )
}


const mapStateToProps = (state,props) =>{
    return{
        task:state.tasks.find((task)=>task.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditTask)

/*


            {props.tasks.map((task) =>{
                if(task.id === props.match.params.id){
                    console.log(task);
                }
            })}


*/