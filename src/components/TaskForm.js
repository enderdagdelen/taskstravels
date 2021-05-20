import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize'// this prevents withStyles error but throws some warnings
//date picker css
import 'react-dates/lib/css/_datepicker.css'

moment.locale('tr')
class TaskForm extends React.Component{
   /*
    constructor(props){
        super(props)
        
    }
*/
    state={
        name:'',
        project:'',
        taskLocation:'',
        withWhomToMeet:'',
        date:moment(),
        timeOfLeave:'',
        timeOfReturn:'',
        taskDuration:'',
        meansOfTransport:'',
        advance:'',
        notes:'',
        calenderFocused:false  //singledatepicker requirement
    }
    //-----------------------------------name
    name_onChange=(e)=>{
        const nameInput = e.target.value;
        this.setState(()=>{
            return{
                name:nameInput
            }
        })
    }

    //----------------------------------project
    project_onChange = (e) =>{
        const projectInput = e.target.value
        this.setState(()=>{
            return{
                project:projectInput
            }
        })
    }

    //-----------------------------------taskLocation
    taskLocation_onChange = (e) =>{
        const taskLocationInput = e.target.value
        this.setState(()=>{
            return{
                taskLocation:taskLocationInput
            }
        })
    }

    //-----------------------------------with whom to meet
    withWhomToMeet_onChange = (e) => {
        const withWhomToMeetInput = e.target.value;
        this.setState(()=>{
            return{
                withWhomToMeet:withWhomToMeetInput
            }
        })
    }

    //-----------------------------------date
    date_onChange = (dateInput) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                date:dateInput
            }
        })
    }

    focus_onChange = ({focused}) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                calenderFocused:focused
            }
        })
    }
    //-----------------------------------time of leave
    //-----------------------------------time of return
    //-----------------------------------task duration



    //-----------------------------------means of transport 
    meansOfTransport_onChange = (e) => {
        const meansOfTransportInput = e.target.value
        this.setState(()=>{
            return{
                meansOfTransport:meansOfTransportInput
            }
        })
    }

    //-----------------------------------advance
    advance_onChange = (e) => {
        const advanceInput = e.target.value
        if(!advanceInput || advanceInput.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    advance:advanceInput
                }
            })
        }
    }

    //-----------------------------------notes
    notes_onChange = (e) => {
        const notesInput = e.target.value
        this.setState(()=>{
            return{
                notes:notesInput
            }
        })
        
    }




    render(){
        return(
            <div className="container bg-light mt-5 pb-5 border" id="GunIciGorevFormu">
                <div id="h2Frame">
                    <h2 className="text-center p-4 "><i className="fas fa-pen-square fa-2x px-5" ></i>Daily Task Form</h2>
                </div>
                <form>
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.name_onChange}/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="project">Project</label>
                            <input type="text" className="form-control" id="project" value={this.state.project} onChange = {this.project_onChange} />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="project">Task Location</label>
                            <input type="text" className="form-control" id="taskLocation" value={this.state.taskLocation} onChange={this.taskLocation_onChange} />
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="withWhomToMeet">Meeting With</label>
                            <input type="text" className="form-control" id="withWhomToMeet" value={this.state.withWhomToMeet} onChange={this.withWhomToMeet_onChange}/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="date">Date</label>
                            <SingleDatePicker 
                                date = {this.state.date}
                                onDateChange = {this.date_onChange}
                                focused ={this.state.calenderFocused}
                                onFocusChange = {this.focus_onChange}
                            />
                            
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="timeOfLeave">Time Of Leave</label>
                            <input type="text" className="form-control" id="timeOfLeave"/>
                        </div>
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="timeOfReturn">Time Of Return</label>
                            <input type="text" className="form-control" id="timeOfReturn"/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="taskDuration">Task Duration</label>
                            <input type="text" className="form-control" id="taskDuration"/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="meansOfTransport">Means Of Transport</label>
                            <select className="form-select" id="meansOfTransport" value={this.state.meansOfTransport} onChange = {this.meansOfTransport_onChange}>
                                <option value="">-select-</option>
                                <option value="Airway">Airway</option>
                                <option value="Company Vehicle">Company Vehicle</option>
                                <option value="On Foot">On Foot</option>
                                <option value="Own Vehicle">Own Vehicle</option>
                                <option value="Private Transfer">Private Transfer</option>
                                <option value="Public Transport">Public Transport</option>
                                <option value="Seaway">Seaway</option>
                                <option value="Taxi">Taxi</option>
                                <option value="Train">Train</option>
                            </select>
                        </div>
                    
                    </div>


                  <div className="row p-3">
                    <div className="col-sm-4">
                        <label htmlFor="advance">Advance</label>
                        <input className="form-control" type="number" id="advance" value={this.state.advance} onChange={this.advance_onChange}/>
                    </div>
                    <div className="col-sm-8">
                        <label htmlFor="notes">Notes</label>
                        <textarea className="form-control" placeholder="Briefly Explain The Reasons And Result Of Your Task." row="4" id="notes" value={this.state.notes} onChange={this.notes_onChange}></textarea>
                    </div>
                  </div>

                  <div className="row p-3">
                    <div className="col">
                        <button className="btn col-12 btn-primary " type="submit" id="submit">Submit</button>
                    </div>
                  </div>

                </form>
            </div>
            
        )
    }
    
}


export default TaskForm


/*
<input type="text" className="form-control" id="date" value={this.state.date} onChange={this.date_onChange}/>
*/