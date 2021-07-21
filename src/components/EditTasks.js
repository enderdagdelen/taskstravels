import React from 'react';
import {connect} from 'react-redux';
import TaskForm from '../components/TaskForm';
import moment from 'moment'
import {editTask, removeTask} from '../actions/task'

const EditTask = (props) => {
    return (
        <div>
            Edit Tasks
            <br></br>
            id is {props.match.params.id}
            <br></br>
            <TaskForm 
                taskToEdit={props.task} 
                onSubmit = {(task)=>{
                    props.dispatch(editTask(props.match.params.id,task))
                }}
            />

            <div className="container" id="eraseframe">

            <form className="form-group mt-3 my-5">
            <label htmlFor="nametoerase" >To Remove The Record Type The Name Correctly</label>
            <div className="row">
                <div className="col">
                    <input className="form-control" id="nametoerase" defaultValue="This Field is Case Sensitive"/>
                </div>
                <div className="col">
                    <button className="btn col-12 btn-danger btn-lg my-1" id="erasebutton" type="button"
                    onClick={
                        
                        ()=>{

                            
                            if(document.getElementById('nametoerase').value === props.task.name){
                                props.dispatch(removeTask(props.match.params.id))
                                document.getElementById('nametoerase').value = "Record Removed - Redirecting To Tasks Page"

                                setTimeout(()=>{props.history.push('/taskspage')},2000)
                            }else{
                                document.getElementById('nametoerase').value = "Check The Name Please"
                            }

                        
                        
                    }}
                        >Remove The Record</button>
                </div>
            
            </div>
            
            

            </form>
            
        </div>
            
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