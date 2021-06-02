import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize'// this prevents withStyles error but throws some warnings
//date picker css
import 'react-dates/lib/css/_datepicker.css'

moment.locale('tr')

class TravelForm extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            name:props.taskToEdit ? props.taskToEdit.name:'',
            project:props.taskToEdit ? props.taskToEdit.project:'',
            taskLocation:props.taskToEdit ? props.taskToEdit.taskLocation:'',
            withWhomToMeet:props.taskToEdit ? props.taskToEdit.withWhomToMeet:'-',

            
            date:props.taskToEdit ? moment(props.taskToEdit.date):moment(),
            timeOfLeave:props.taskToEdit ? moment(props.taskToEdit.timeOfLeave):moment().hour(8).minute(0).second(0).millisecond(0),
            timeOfReturn:props.taskToEdit ? moment(props.taskToEdit.timeOfReturn):moment().hour(8).minute(30).second(0).millisecond(0),
            taskDuration:props.taskToEdit ? props.taskToEdit.taskDuration:0.5,
            meansOfTransport:props.taskToEdit ? props.taskToEdit.meansOfTransport:'-',
            advance:props.taskToEdit ? props.taskToEdit.advance:'0',
            notes:props.taskToEdit ? props.taskToEdit.notes:'-',
            calenderFocused_date:false,  //singledatepicker requirement date
 
            hh_ToL:props.taskToEdit ? parseInt(moment(props.taskToEdit.timeOfLeave).format("HH:mm").toString().split(':',1)):8, // specific for this form to manually modify time of leave
            mm_ToL:props.taskToEdit ? parseInt(moment(props.taskToEdit.timeOfLeave).format("HH:mm").toString().slice(3,5)):0, // specific for this form to manually modify time of leave
            hh_ToR:props.taskToEdit ? parseInt(moment(props.taskToEdit.timeOfReturn).format("HH:mm").toString().split(':',1)):8, // specific for this form to manually modify time of return
            mm_ToR:props.taskToEdit ? parseInt(moment(props.taskToEdit.timeOfReturn).format("HH:mm").toString().slice(3,5)):30, // specific for this form to manually modify time of return
            
            message:'', //For bootstrap alert-not part of redux
            class:'', //For Bootstrap-not part of redux
            taskClass:'', //For Bootstrap-not part of redux

            
        }
        
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
                date:dateInput,
                timeOfLeave:moment(dateInput).hour(this.state.hh_ToL).minute(this.state.mm_ToL).second(0).millisecond(0),
                timeOfReturn:moment(dateInput).hour(this.state.hh_ToR).minute(this.state.mm_ToR).second(0).millisecond(0)
            }
        })
    }

    focus_onChange = ({focused}) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                calenderFocused_date:focused
            }
        })
    }
    //-----------------------------------time of leave
    ToL_HH_onChange = (e) => {
        const hh_ToL_Input = e.target.value;
        this.setState(()=>{
            return{
                hh_ToL:hh_ToL_Input,
                timeOfLeave: moment(this.state.date).hour(hh_ToL_Input).minute(this.state.mm_ToL).second(0).millisecond(0)
            }
        })
        setTimeout(()=>{
            this.CalculateTaskDuration()
        },250)

    }

    ToL_MM_onChange = (e) => {
        const mm_ToL_Input = e.target.value;
        this.setState(()=>{
            return{
                mm_ToL:mm_ToL_Input,
                timeOfLeave:moment(this.state.date).hour(this.state.hh_ToL).minute(mm_ToL_Input).second(0).millisecond(0)

            }
        })
        setTimeout(()=>{
            this.CalculateTaskDuration()
        },250)
    }

 
    //-----------------------------------time of return
    ToR_HH_onChange = (e) => {
        const hh_ToR_Input = e.target.value;
        this.setState(()=>{
            return{
                hh_ToR:hh_ToR_Input,
                timeOfReturn: moment(this.state.date).hour(hh_ToR_Input).minute(this.state.mm_ToR).second(0).millisecond(0)
            }
        })
        setTimeout(()=>{
            this.CalculateTaskDuration()
        },250)
    }

    ToR_MM_onChange = (e) => {
        const mm_ToR_Input = e.target.value;
        this.setState(()=>{
            return{
                mm_ToR:mm_ToR_Input,
                timeOfReturn:moment(this.state.date).hour(this.state.hh_ToR).minute(mm_ToR_Input).second(0).millisecond(0),
            }
        })

        setTimeout(()=>{
            this.CalculateTaskDuration()
        },250)
    }


    //-----------------------------------task duration
    CalculateTaskDuration = () => {
        let hhL = parseInt(this.state.hh_ToL);
        let mmL = parseInt(this.state.mm_ToL);
        let hhR = parseInt(this.state.hh_ToR);
        let mmR = parseInt(this.state.mm_ToR);

        if(moment(this.state.timeOfLeave).isSameOrAfter(this.state.timeOfReturn)){
            this.setState(()=>{
                return{
                    taskDuration:"time of leave can't be later then time of return"
                }
            })
        }else if(hhL === 12 && mmL=== 0 && hhR===13 && mmR===0 || hhL === 12 && mmL=== 0 && hhR===13 && mmR===30){
            this.setState(()=>{
                return{
                    taskDuration:0.5
                }
            })
        }else if(hhL === 12 && mmL=== 30 && hhR===13 && mmR===0 || hhL === 12 && mmL=== 30 && hhR===13 && mmR===30){
            this.setState(()=>{
                return{
                    taskDuration:0
                }
            })
        
        }else if(hhL <= 12 && hhR >= 13){
            let a = this.state.timeOfReturn;
            let b = this.state.timeOfLeave;
            const duration = a.diff(b,'minutes')/60

            this.setState(()=>{
                return{
                    taskDuration:duration -1
                }
            })
        
        }else{
            let a = this.state.timeOfReturn;
            let b = this.state.timeOfLeave;
            
            let duration = a.diff(b,'minutes')/60;
            
            setTimeout(()=>{
                this.setState(()=>{
                    return{
                        taskDuration:duration,
                        test:duration
                    }
                })
            },250)
            
        }


    }


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

    onSubmit =(e)=>{
        e.preventDefault()
        


        if(!this.state.name){
            this.setState(()=>{
                return{
                    message:'Please Provide Name',
                    class:'alert alert-danger'
                }
            })
        }else if(!this.state.project){
            this.setState(()=>{
                return{
                    message:'Please Provide Project',
                    class:'alert alert-danger'
                }
            })
        }else if(!this.state.project){
            this.setState(()=>{
                return{
                    message:'Please Provide Task Location',
                    class:'alert alert-danger'
                }
            })
        
        }else{

            if(typeof (this.state.taskDuration) !== 'number'){
                this.setState(()=>{
                    return{
                        message:'Please Check Time Of Leave And Return',
                        taskClass:'alert alert-danger'
                    }
                })
            }else{
                this.setState(()=>{
                    return{
                        message:'Submitted',
                        class:'alert alert-success',
                        taskClass:'alert alert-success'

    
                    }
                })
                this.props.onSubmit({
                    name:this.state.name,
                    project:this.state.project,
                    taskLocation:this.state.taskLocation,
                    withWhomToMeet:this.state.withWhomToMeet,
                    date:this.state.date.valueOf(),
                    timeOfLeave:this.state.timeOfLeave.valueOf(),
                    timeOfReturn:this.state.timeOfReturn.valueOf(),
                    taskDuration:this.state.taskDuration,
                    meansOfTransport:this.state.meansOfTransport,
                    advance:parseInt(this.state.advance),
                    notes:this.state.notes
                })

                
            }

            
        }

    }
        


    render(){
        return(
            <div className="container bg-light mt-5 pb-5 border" id="GunIciGorevFormu">
                <div id="h2Frame">
                    <h2 className="text-center p-4 "><i className="fas fa-pen-square fa-2x px-5" ></i><span id="taskformHeader">Bussiness Travel Form</span></h2>
                </div>
                { this.state.message !== '' && this.state.message==='Submitted'?<div className={this.state.class}>{this.state.message}</div> : <div className={this.state.class}>{this.state.message}</div> }
                <form onSubmit={this.onSubmit}>
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="name">Name</label>
                            <input type="text" className={this.state.class==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="name" value={this.state.name} onChange={this.name_onChange}/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="project">Project</label>
                            <input type="text" className={this.state.class==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="project" value={this.state.project} onChange = {this.project_onChange} />
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="project">Task Location</label>
                            <input type="text" className={this.state.class==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="taskLocation" value={this.state.taskLocation} onChange={this.taskLocation_onChange} />
                        </div>
                    </div>

                    <div className="row p-3">

                        <div className="col-sm-4">
                            <label htmlFor="date">Date</label>
                            <div className="datepicker">
                            <SingleDatePicker
                                date = {this.state.date}
                                onDateChange = {this.date_onChange}
                                focused ={this.state.calenderFocused_date}
                                onFocusChange = {this.focus_onChange}
                                numberOfMonths={1}
                                isOutsideRange={()=>false}
                            />
                            </div>
                            
                            
                        </div>


                        <div className="col-sm-4">

                            <label htmlFor="timeOfLeave" className="timelabels">Time Of Leave</label>
                            <div className="row">
                                <div className="col">
                                    <select className="form-select" value={this.state.hh_ToL} onChange={this.ToL_HH_onChange} >
                                        <optgroup>
                                            <option value="">Hour</option>
                                            <option value="0">00</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                            <option value="5">05</option>
                                            <option value="6">06</option>
                                            <option value="7">07</option>
                                            <option value="8">08</option>
                                            <option value="9">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-select" value={this.state.mm_ToL} onChange={this.ToL_MM_onChange} >
                                        <optgroup>
                                            <option value="0">00</option>
                                            <option value="30">30</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            
                        
                        </div>
                        <div className="col-sm-4">
                        <label htmlFor="timeOfReturn">Time Of Return</label>
                        <div className="row">
                            <div className="col">
                                <select className="form-select" value={this.state.hh_ToR} onChange={this.ToR_HH_onChange} >
                                    <optgroup>
                                        <option value="">Hour</option>
                                        <option value="0">00</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-select" value={this.state.mm_ToR} onChange={this.ToR_MM_onChange} >
                                    <optgroup>
                                        <option value="0">00</option>
                                        <option value="30">30</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                        
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="withWhomToMeet">Meeting With</label>
                            <input type="text" className="form-control" id="withWhomToMeet" value={this.state.withWhomToMeet} onChange={this.withWhomToMeet_onChange}/>
                        </div>

                        <div className="col-sm-4">
                            <label htmlFor="taskDuration">Task Duration</label>
                            <input type="text" className={this.state.taskClass==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="taskDuration" placeholder={this.state.taskDuration} disabled/>
                        </div>
                        <div className="col-sm-4">
                            <label htmlFor="meansOfTransport">Means Of Transport</label>
                            <select className="form-select" id="meansOfTransport" value={this.state.meansOfTransport} onChange = {this.meansOfTransport_onChange}>
                                <optgroup>
                                    <option value="">-select-</option>
                                    <option value="Airway">Airway</option>
                                    <option value="Chauffeured ">Chauffeured</option>
                                    <option value="Company Vehicle">Company Vehicle</option>
                                    <option value="On Foot">On Foot</option>
                                    <option value="Own Vehicle">Own Vehicle</option>
                                    <option value="Private Transfer">Private Transfer</option>
                                    <option value="Public Transport">Public Transport</option>
                                    <option value="Seaway">Seaway</option>
                                    <option value="Taxi">Taxi</option>
                                    <option value="Train">Train</option>

                                </optgroup>
                            </select>
                        </div>
                    
                    </div>


                  <div className="row p-3">
                    <div className="col-sm-4">
                        <label htmlFor="advance">Advance</label>
                        <input className="form-control" type="text" id="advance" value={this.state.advance} onChange={this.advance_onChange}/>
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


export default TravelForm


/*
<input type="text" className="form-control" id="date" value={this.state.date} onChange={this.date_onChange}/>
*/