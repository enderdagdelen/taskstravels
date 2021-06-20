import React from 'react';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize'// this prevents withStyles error but throws some warnings
//date picker css
import 'react-dates/lib/css/_datepicker.css'

moment.locale('tr')

class TravelForm extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            name:'',
            project:'',
            travelDestination:'',           
            dateOfDeparture:moment(),
            departureTime:moment().hour(9).minute(0).second(0).millisecond(0),
            dateOfReturn:moment(),
            timeOfReturn:moment().hour(18).minute(0).second(0).millisecond(0),
            travelDuration:0.5,
            accompaniedBy:'',
            withWhomToMeet:'-',
            accomodationAddress:'',
            lengthOfStay:'',
            accomodationFee:'',
            meansOfTransport:'-',
            advance:'',
            notes:'-',

            calenderFocused_Departure:false,  //singledatepicker requirement date
            calenderFocused_Return:false,       //singledatepicker requirement date

            hh_ToL:9, // specific for this form to manually modify time of leave
            mm_ToL:0, // specific for this form to manually modify time of leave
            hh_ToR:18, // specific for this form to manually modify time of return
            mm_ToR:0, // specific for this form to manually modify time of return

            startWorkingAt_hour:9,//moment().hour(8).minute(30).second(0).millisecond(0),
            startWorkingAt_min:0,
            quitWorkingAt_hour:18,
            quitWorkingAt_min:0,
            workingHours:9,
            overTime_Hours:0,
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
    travelDestination_onChange = (e) =>{
        const travelDestinationInput = e.target.value
        this.setState(()=>{
            return{
                travelDestination:travelDestinationInput
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

    //-----------------------------------date of departure

    date_onChange = (dateInput) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                dateOfDeparture:dateInput,
                departureTime:moment(dateInput).hour(this.state.hh_ToL).minute(this.state.mm_ToL).second(0).millisecond(0),
                
            }
        })
        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)
    }


    focus_onChange = ({focused}) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                calenderFocused_Departure:focused
            }
        })
    }


    //-----------------------------------date of return
    date_onChange_R = (dateInput_R) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                dateOfReturn:dateInput_R,
                timeOfReturn:moment(dateInput_R).hour(this.state.hh_ToR).minute(this.state.mm_ToR).second(0).millisecond(0)
            }
        })
        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)
    }


    focus_onChange_R = ({focused}) => {//singledatepicker requirement
        this.setState(()=>{
            return{
                calenderFocused_Return:focused
            }
        })
    }




    //-----------------------------------time of leave
    ToL_HH_onChange = (e) => {
        const hh_ToL_Input = parseInt(e.target.value);
        this.setState(()=>{
            return{
                hh_ToL:hh_ToL_Input,
                departureTime: moment(this.state.dateOfDeparture).hour(hh_ToL_Input).minute(this.state.mm_ToL).second(0).millisecond(0)
            }
        })

        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)

    }

    ToL_MM_onChange = (e) => {
        const mm_ToL_Input = parseInt(e.target.value);
        this.setState(()=>{
            return{
                mm_ToL:mm_ToL_Input,
                departureTime:moment(this.state.dateOfDeparture).hour(this.state.hh_ToL).minute(mm_ToL_Input).second(0).millisecond(0)

            }
        })
        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)
    }

 
    //-----------------------------------time of return
    ToR_HH_onChange = (e) => {
        const hh_ToR_Input = parseInt(e.target.value);
        this.setState(()=>{
            return{
                hh_ToR:hh_ToR_Input,
                timeOfReturn: moment(this.state.dateOfReturn).hour(hh_ToR_Input).minute(this.state.mm_ToR).second(0).millisecond(0)
            }
        })
        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)
    }

    ToR_MM_onChange = (e) => {
        const mm_ToR_Input = parseInt(e.target.value);
        this.setState(()=>{
            return{
                mm_ToR:mm_ToR_Input,
                timeOfReturn:moment(this.state.dateOfReturn).hour(this.state.hh_ToR).minute(mm_ToR_Input).second(0).millisecond(0),
            }
        })

        setTimeout(()=>{
            this.CalculateTravelDuration()
        },250)
    }


    //-----------------------------------task duration
    CalculateTravelDuration = () => {

        let leave = this.state.dateOfDeparture
        let back = this.state.dateOfReturn

        //number of hours worked in the day employee leaves the office

        let firstStep; // time duration during the day when employee leaves the country
        let overTime1; // overtime if the task or travel starts before the working hours
        let normalHours; // hours which is spent for travel or task during workng hours. Like if you start working at 9 and leave office at 18 then you leave the office for travel bussiness at 12 so 3 hours for normal work and 6 hours for travel
        let dailyHours; // a variant used to calculate normal hours
        let overTime2; // if the travel or task starts after the normal working our, those ours are considered as overtime too.

        //_____________________________________FIRST STEPs

        //calculate overtime if travel starts before the time employees start working
        if(this.state.startWorkingAt_hour === this.state.hh_ToL && this.state.startWorkingAt_min > this.state.mm_ToL){
            overTime1 = 0.5 //Math.abs((this.state.startWorkingAt_min - this.state.mm_ToL) / 60)
        
        }else if(this.state.startWorkingAt_hour === this.state.hh_ToL && this.state.startWorkingAt_min <= this.state.mm_ToL){
            overTime1 = 0;
        
        }else if(this.state.startWorkingAt_hour > this.state.hh_ToL && this.state.startWorkingAt_min > this.state.mm_ToL){
            overTime1 = this.state.startWorkingAt_hour - this.state.hh_ToL + ((this.state.startWorkingAt_min - this.state.mm_ToL) / 60)

        }else if (this.state.startWorkingAt_hour > this.state.hh_ToL && this.state.startWorkingAt_min === this.state.mm_ToL){
            overTime1 = this.state.startWorkingAt_hour - this.state.hh_ToL

        }else if (this.state.startWorkingAt_hour > this.state.hh_ToL && this.state.startWorkingAt_min < this.state.mm_ToL){
            overTime1 = this.state.startWorkingAt_hour - this.state.hh_ToL + ((this.state.startWorkingAt_min - this.state.mm_ToL) / 60)
        }else{
            overTime1 = 0;
        }

        //Calculate the travel time which intersects with normal working hour if employee leaves the firm during working hours
        dailyHours =  this.state.departureTime.diff(this.state.dateOfDeparture.hour(this.state.startWorkingAt_hour).minute(this.state.startWorkingAt_min).second(0).millisecond(0),'minute')

        if (this.state.hh_ToL === this.state.startWorkingAt_hour && this.state.mm_ToL === this.state.startWorkingAt_min){
            normalHours = 9
        }else{
            normalHours = dailyHours > 0 ? (dailyHours/60 >= 9 ? 0 : 9 - (dailyHours/60)) : 0;

        }


        //Gerekli açıklamalar notlar içinde vardır.


        //calculate time if travel or task starts after normal working hours.


        if(this.state.hh_ToL >= this.state.quitWorkingAt_hour){
            let ot = (this.state.dateOfDeparture.hour(23).minute(59).diff(this.state.departureTime,'minutes') + 1 ) / 60 
            overTime2 = ot < 0 ? 0 : ot
        }else{
            overTime2 = 0
        }
        // _______________________________________________________The sum of travel hours in the date of departure
        let firstStep_NormalHours = normalHours 
       

        let firstStep_OT = overTime2 + overTime1 // this value will be used to calculate overall overtime of the bussiness trip



        /* 
        NEREDE KALDIM

        Şimdiye kadar travelDuration için ilk 3 adımı hesapladım. Şimdi ise travelDuration'ı tanımlamak geldi. Yani toplanarak travelDuration oluşturulacak. 

        Ancak farklı bir bakış açısı da yakaladım. Bunlar; 
        1- Eğer görev hafta sonları ise o günü komple mesai yazmak
        2- Görev için gidiş veya dönüş tarihi haftasonu ise bütün saatleri mesai yazmak. 
            yani eğer kişi pazar akşam saat 4'de yola çıkıyorsa geri kalan bütün saatler mesai yazılacak gibi.
            Bunla ilgili internettten araştırma yapacağım. Ona göre travelDuration oluşturacağım.
        */
        let day = String(this.state.dateOfDeparture._d).split(" ")[0]
        if(day === "Sun" || day ==="Sat"){
            console.log("Hafta Sonu");
        }
        


        //________________________________________________________Second Step
        /* Second step is the number of days between the dateOfDeparture and dateOfReturn. Extra hours and overtime hours are being calculated 
        in the first and third steps and added to second step later. And those 3 steps constitutes the travelDuration.
        */
        const secondStep_NormalHours = back.hour(0).minute(0).diff(leave.hour(23).minute(59), 'day');
        const secondStep_OT = 0 
        

        
        //________________________________________________________Third Step

        const duration3 = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(this.state.startWorkingAt_hour).minute(this.state.startWorkingAt_min).second(0).millisecond(0),'minute')


        //  if timeOfReturn is before the time of working hour
        let overTime3 = 0;
        let hours = 0;
        let overTime4 = 0;
        overTime3
        if(duration3 <= 0){
            overTime3 = duration3/60 * -1
        } else if (duration3/60 > 0 && duration3/60 < 9){
            hours = duration3/60
        } else if (duration3/60 >= 9){
            hours = 9
            overTime4 = duration3/60 - 9
        }


        console.log("o3= " + overTime3);
        console.log("hours= " + hours);
        console.log("o4= " + overTime4);


        const thirdStep_NormalHours = hours
        const thirdStep_OT = overTime3 + overTime4

        //  if time of return occurs during the working hours

        //  if time of return occurs after the working hours 





        const duration = 0;
/*      console.log("1: "+normalHours);
        console.log("2: "+secondStep);
        console.log("3: "+thirdStep); */

        //console.log(duration);







        if(duration <= 4){
            this.setTravelDuration(0.5)
        }else if(duration >= 4 && duration <= 9){
            this.setTravelDuration(1)
        }else if (duration > 23.5 ){
            this.setTravelDuration(duration/24)
        }


    }

    setTravelDuration = (duration) => {
        setTimeout(()=>{
            this.setState(()=>{
                return{
                    travelDuration:duration
                }
            })
        },250)
    }

    //-----------------------------------accompaniedBy
    accompaniedBy_onChange = (e) =>{
        const accompaniedByInput = e.target.value

        this.setState(()=>{
            return{
                accompaniedBy:accompaniedByInput
            }
        })
    }

    //-----------------------------------accompaniedBy
    accomodationAddress_onChange = (e) =>{
        const accomodationAddressInput = e.target.value

        this.setState(()=>{
            return{
                accomodationAddress:accomodationAddressInput
            }
        })
    }

    //-----------------------------------length of stay
    lengthOfStay_onChange = (e) => {
        const lengthOfStayInput = e.target.value
        if(!lengthOfStayInput || lengthOfStayInput.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    lengthOfStay:lengthOfStayInput
                }
            })
        }
    
    }

    //-----------------------------------accomodation Fee
    accomodationFee_onChange = (e) => {

        const fee = e.target.value
        if(!fee || fee.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    accomodationFee:fee
                }
            })
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
                            <label htmlFor="project">Travel Destination</label>
                            <input type="text" className={this.state.class==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="travelDestination" value={this.state.travelDestination} onChange={this.travelDestination_onChange} />
                        </div>
                    </div>

                    <div className="row p-3">

                        <div className="col-sm-2">
                            <label htmlFor="date">Date Of Departure</label>
                            <div className="datepicker">
                            <SingleDatePicker 
                                date={this.state.dateOfDeparture}
                                onDateChange={this.date_onChange}
                                focused={this.state.calenderFocused_Departure}
                                onFocusChange={this.focus_onChange}
                                numberOfMonths={1}
                                isOutsideRange={()=>false}
                            />
                            </div>
                            

                        </div>
     

                        <div className="col-sm-2">

                            <label htmlFor="timeOfLeave" className="timelabels">Time Of Leave</label>
                            <div className="row">
                                <div className="col-sm-6">
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
                                <div className="col-sm-6">
                                    <select className="form-select" value={this.state.mm_ToL} onChange={this.ToL_MM_onChange} >
                                        <optgroup>
                                            <option value="0">00</option>
                                            <option value="30">30</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <label htmlFor="date">Date Of Return</label>
                            <div className="datepicker">
                                <SingleDatePicker 
                                    date={this.state.dateOfReturn}
                                    onDateChange={this.date_onChange_R}
                                    focused={this.state.calenderFocused_Return}
                                    onFocusChange={this.focus_onChange_R}
                                    numberOfMonths={1}
                                    isOutsideRange={()=>false}
                                />
                            </div>
                            

                        </div>

                        <div className="col-sm-2">
                        <label htmlFor="timeOfReturn">Time Of Return</label>
                        <div className="row">
                            <div className="col-sm-6">
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

                            <div className="col-sm-6">
                                <select className="form-select" value={this.state.mm_ToR} onChange={this.ToR_MM_onChange} >
                                    <optgroup>
                                        <option value="0">00</option>
                                        <option value="30">30</option>
                                    </optgroup>
                                </select>
                            </div>



                            </div>
                        </div>

                        <div className="col-sm-4">
                            <label htmlFor="date">Travel Duration (Days)</label>
                            <input type="text" className="form-control" placeholder={this.state.travelDuration}/>
                        </div>
                        
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="taskDuration">Accompanied By</label>
                            <input type="text" className={this.state.taskClass==='alert alert-danger'? "form-control bg-danger":"form-control bg-white"} id="accompaniedBy" placeholder={this.state.accompaniedBy} onChange={this.accompaniedBy_onChange}/>
                        </div> 

                        <div className="col-sm-4">
                            <label htmlFor="withWhomToMeet">Meeting With</label>
                            <input type="text" className="form-control" id="withWhomToMeet" value={this.state.withWhomToMeet} onChange={this.withWhomToMeet_onChange}/>
                        </div>


                        <div className="col-sm-4">
                            <label htmlFor="accomodationAddress">Accomodation Address</label>
                            <input type="text" className="form-control" id="accomodationAddress" value={this.state.accomodationAddress} onChange={this.accomodationAddress_onChange}/>

                        </div>
                    
                    </div>
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="lengthOfStay">Length Of Stay</label>
                            <input type="text" className="form-control" id="lengthOfStay" value={this.state.lengthOfStay} onChange={this.lengthOfStay_onChange}/>
                        </div>

                        <div className="col-sm-4">
                            <label htmlFor="accomodationFee">Accomodaton Fee</label>
                            <input type="text" className= "form-control" id="accomodationFee" value={this.state.accomodationFee} onChange={this.accomodationFee_onChange}/>
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