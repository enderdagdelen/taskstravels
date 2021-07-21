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
            name:props.bussinessTravel ? props.bussinessTravel.name:'',
            project:props.bussinessTravel ? props.bussinessTravel.project:'',
            travelDestination:props.bussinessTravel ? props.bussinessTravel.travelDestination:'',           
            dateOfDeparture:props.bussinessTravel ? moment(props.bussinessTravel.dateOfDeparture):moment(),
            departureTime:props.bussinessTravel ? moment(props.bussinessTravel.departureTime):moment().hour(9).minute(0).second(0).millisecond(0),
            dateOfReturn:props.bussinessTravel ? moment(props.bussinessTravel.dateOfReturn):moment(),
            timeOfReturn:props.bussinessTravel ? moment(props.bussinessTravel.timeOfReturn):moment().hour(18).minute(0).second(0).millisecond(0),
            travelDuration:props.bussinessTravel ? props.bussinessTravel.travelDuration:0,
            accompaniedBy:props.bussinessTravel ? props.bussinessTravel.accompaniedBy:'',
            withWhomToMeet:props.bussinessTravel ? props.bussinessTravel.withWhomToMeet:'-',
            accomodationAddress:props.bussinessTravel ? props.bussinessTravel.accomodationAddress:'',
            lengthOfStay:props.bussinessTravel ? props.bussinessTravel.lengthOfStay:0,
            accomodationFee:props.bussinessTravel ? props.bussinessTravel.accomodationFee:'',
            meansOfTransport:props.bussinessTravel ? props.bussinessTravel.meansOfTransport:'-',
            advance:props.bussinessTravel ? props.bussinessTravel.advance.toString():0,
            notes:props.bussinessTravel ? props.bussinessTravel.notes:'-',

            calenderFocused_Departure:false,  //singledatepicker requirement date
            calenderFocused_Return:false,       //singledatepicker requirement date

            hh_ToL:9, // specific for this form to manually modify time of leave
            mm_ToL:0, // specific for this form to manually modify time of leave
            hh_ToR:18, // specific for this form to manually modify time of return
            mm_ToR:0, // specific for this form to manually modify time of return

            startWorkingAt_hour:9,
            startWorkingAt_min:0,
            quitWorkingAt_hour:18,
            quitWorkingAt_min:0,
            workingHours:9,
            weekEndHours:5,

            workOnWeekEnd_Passive:false, 
            workOnWeekEnd_Active:false,
            startWorkingAt_hour_wEnd:9,
            startWorkingAt_min_wEnd:0,
            quitWorkingAt_hour_wEnd:14,
            quitWorkingAt_min_wEnd:0,

            wholeDay_Holidays_2021_TR:[1,113,121,133,134,135,196,201,202,203,204,242,302],
            halfDay_Holidays_2021_TR:[132,200,301],// 176-25 haziran cuma, 177-26 haziran, 178-27 haziran ve 207 26 temmuz test amaçlı yazıldı. silinecek.

            wholeDay_Holidays_2022_TR:[1,113,121,122,123,124,139,190,191,192,193,196,242,302],
            halfDay_Holidays_2022_TR:[189,301],
            overTime_Hours:0,
            message:'', //For bootstrap alert-not part of redux
            class:'', //For Bootstrap-not part of redux
            travelClass:'', //For Bootstrap-not part of redux

            
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
        let OT1=0; // overtime if the task or travel starts before the working hours
        let travelHours_atDeparture=0; // hours which is spent for travel or task during workng hours. Like if you start working at 9 and leave office at 18 then you leave the office for travel bussiness at 12 so 3 hours for normal work and 6 hours for travel
        let dailyHours=0; // a variant used to calculate normal hours
        let OT2=0; // if the travel or task starts after the normal working our, those ours are considered as overtime too.
        let WOT=0;
        let HOT=0;
        let isHoliday;
        isHoliday = this.isHoliday(this.state.dateOfDeparture)

        //_____________________________________FIRST STEPs

        //If the bussiness travel starts on weekend




        //Check the days. If saturday then check if workOnWeekend is true or false. If true use weekend parametres. If false, record it as overtime. If the 
        //day is sunday record it as day or hour. İf its weekdays do the normal calculations. 

        let dayOfDeparture = String(this.state.dateOfDeparture._d).split(" ")[0]

        

        if(dayOfDeparture === "Sat"){
           
        //If saturday is a workday then weekend parametres(09:00 - 14:00) are used.
            if((this.state.workOnWeekEnd_Passive === true || this.state.workOnWeekEnd_Active === true) && isHoliday ==="Not Holiday"){
                OT1 = this.state.dateOfDeparture.hour(this.state.startWorkingAt_hour_wEnd).minute(this.state.startWorkingAt_min_wEnd).diff(this.state.departureTime,'minute')/60

                //  1- Weekend morning overtime calculation
                OT1 < 0 ? OT1 = 0 : OT1 = OT1

                //  2- Weekend normal hours calculation

                if(OT1 > 0){
                    travelHours_atDeparture = this.state.weekEndHours // if OT1, travel hours is aoutomatically equals to working hours

                }else if(OT1 === 0){
                    let hour;
                    hour = this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd).diff(this.state.departureTime,'minute')/60
                    
                    if(hour < 0){
                        travelHours_atDeparture = 0
                    }else{
                        travelHours_atDeparture = hour
                    }
                }

                //- Weekned evening overtime calculation
                if(this.state.departureTime.isSameOrAfter(this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd))){
                    OT2=(this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minute')+1)/60
                    
                    if(OT2 > 6){
                        OT2=6
                    }else if(this.state.hh_ToL === 24){
                        OT2=0
                    }else{
                        OT2 = OT2
                    }
                }

            
            }else if(this.state.workOnWeekEnd_Passive === false && this.state.workOnWeekEnd_Active === false && isHoliday==="Not Holiday"){ // If saturday is not a workday and not a holiday too

                WOT=this.weekend_OT_at_dateOfDeparture_Sat()

            }else if(this.state.workOnWeekEnd_Passive === true || this.state.workOnWeekEnd_Active === true && isHoliday === "Half Day Public Holiday"){

                let time;
                let time2;
                time = this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd).diff(this.state.departureTime,'minutes')/60

                if(this.state.departureTime.isBefore(this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd))){
                    HOT = 5
                    console.log("sdfad")
                }else if(this.state.departureTime.isSameOrAfter(this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd))){
                    let k;
                    k = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minute')+1)/60
                    console.log(k)
                    if(k < 0){
                        k = 0
                        WOT = 0
                    }else if(k === 0){
                        WOT = 0
                    }else if (k > 0){
                        k > 6 ? WOT = 6 : WOT = k
                        
                    }
                }



            }else if (this.state.workOnWeekEnd_Passive === false && this.state.workOnWeekEnd_Active === false && isHoliday==="Half Day Public Holiday"){
                    
                // 1.4 Buranın testini yapacağım
                if(this.state.hh_ToL < 14){
                    HOT = 5
                    WOT = 4
                }else if(this.state.hh_ToL >= 14 && this.state.hh_ToL < 18){
                    WOT = this.state.dateOfDeparture.hour(18).minute(0).diff(this.state.departureTime,'minutes')/60
                    HOT = 0
                }else if (this.state.hh_ToL >= 18 && this.state.hh_ToL < 24){
                    WOT = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime, 'minutes')+1)/60
                    HOT = 0
                }

                
            }else if(isHoliday === "One Day Public Holiday"){
                HOT = 9
            }
            
        }else if (dayOfDeparture === "Sun"){
            
            let x = this.weekend_OT_at_dateOfDeparture_Sun(isHoliday)
            HOT = x[0]
            WOT = x[1]

        }else{

            let hours = this.calc_Hours_atDateOfDeparture(isHoliday);
            OT1=hours[0]//morning overtime 
            travelHours_atDeparture = hours[1]//normal hours
            OT2=hours[2]//evening overtime
            HOT=hours[3]//if the day is on holiday, hours are counted as holiday hours
        }


        // _______________________________________________________The sum of travel hours in the date of departure
        firstStep = {
                        "travelHours":travelHours_atDeparture,
                        "morningovertime":OT1,
                        "eveningOverime":OT2,
                        "weekendOvertime":WOT,
                        "holidayOvertime":HOT,

                        }
        
        //                console.log("firstStep:",firstStep);




        //________________________________________________________Second Step

        /* Second step is the number of days between the dateOfDeparture and dateOfReturn.
        */      
        
        //Variables;
        let hotArr=[]  //array of holiday overtimes for each day when employee is on bussiness trip
        let wotArr=[]  //array of weekend overtimes for each day when employee is on bussiness trip
        let awayArr=[] //array of hours for each day when employee is on bussiness trip

        let awayHOT   //sum of holiday overtimes hours for each day when employee is on bussiness trip
        let awayWOT   //sum of weekend overtimes hours for each day when employee is on bussiness trip
        let awayHours //sum of hours for each day when employee is on bussiness trip

        //let numberOfAwayDays = this.state.dateOfReturn.hour(12).diff(this.state.dateOfDeparture.hour(12),'day')
        let numberOfAwayDays = this.state.dateOfReturn.dayOfYear() - this.state.dateOfDeparture.dayOfYear();
 
        let loggedHoursByDays=[]; // log of overtimes and normal wroking hours for each day

        for (let index = 1; index < (numberOfAwayDays); index++) { //index will never exceed or equel to numberOfAwayDays so only the awaydays will be calculated here
            
            let nameOFTheDay=String(moment(this.state.dateOfDeparture.valueOf()).add(index,'days')._d).split(" ")[0]

            let isHoliday = this.isHoliday(moment(this.state.dateOfDeparture.valueOf()).add(index,'days'))

            let arr = this.secondStep(nameOFTheDay,isHoliday)

            loggedHoursByDays.push(arr)
        }


        loggedHoursByDays.forEach(loggedHour=>{
            hotArr.push(loggedHour[0])
            wotArr.push(loggedHour[1])
            awayArr.push(loggedHour[2])

        })


        awayHOT = hotArr.reduce(function(a,b){
            return a+b
        },0)

        awayWOT = wotArr.reduce(function(a,b){
            return a+b
        },0)

        awayHours = awayArr.reduce(function(a,b){
            return a+b
        },0)





        

        //________________________________________________________Third Step

        // thirdStep calculates the hours and if necessary overtimes at the day of the return to the company. if the employee arrives at the company at the time of the start of the working hours than its considered that the employee has arrived the day before but prefered to start workin next day. So we do not calculate overtime in the morning. 


        // variables;
        let returnHOT = 0; // if the return occurs at a holiday, overtime is kept as returnHOT
        let returnWOT = 0; // if the return occurs at weekend, overtime is kept as returnWOT
        let returnOT = 0; // if the return occurs after working hours, overtime is kept as returnOT
        let returnHours = 0; // if the return occurs at normal workin hours, overtime is kept as returnHours
        let dayOfReturn = String(this.state.dateOfReturn._d).split(" ")[0]


        if(this.isHoliday(this.state.dateOfReturn) === "One Day Public Holiday"){

            returnHOT = 9

        }else if(this.isHoliday(this.state.dateOfReturn) === "Half Day Public Holiday"){
           
            returnHOT = 5

            if(dayOfReturn === "Sat" && this.state.timeOfReturn.isAfter(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd).second(0).millisecond(0))){     

                let k = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd).second(0).millisecond(0),'minute')/60

                k > 10 ? returnWOT = 10 : returnWOT = k

            }else if(dayOfReturn === "Sun" && this.state.workOnWeekEnd_Active === false && this.state.workOnWeekEnd_Passive === false && this.state.timeOfReturn.isAfter(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour_wEnd).minute(this.state.quitWorkingAt_min_wEnd).second(0).millisecond(0))){

                let k = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0),'minute')/60

                k > 10 ? returnWOT = 10 : returnWOT = k

            }else if(dayOfReturn === "Sun" && this.state.workOnWeekEnd_Active === true && this.state.workOnWeekEnd_Passive === true){

                let k = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0),'minute')/60

                if(k >= 0 && k <=4){

                    returnWOT = 4

                }else if(k > 4){

                    k > 10 ? returnWOT = 10 : returnWOT = k

                }else if(k < 0){
                    returnWOT = 4
                }
            }else{ // for a weekday

                let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0),'minute')/60
                let k;
                l > 10 ? k = 10 : k = l


                if(k >= 0 && k <= 4){
                    returnHours = k
                }else if(k > 4){
                    returnHours = 4 
                    returnOT = k-4
                }


            }

        }else if(dayOfReturn === "Sat"){

            if(this.state.workOnWeekEnd_Active === true && this.state.workOnWeekEnd_Passive === true){

                if(this.state.timeOfReturn.isBefore(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0))){

                    let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(9).minute(0).second(0).millisecond(0),'minute')/60
                    l < 0 ? returnWOT = 0 : returnWOT = l

                }else if(this.state.timeOfReturn.isSameOrAfter(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0))){

                    returnHours = 5
                    let k = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(14).minute(0).second(0).millisecond(0),'minute')/60
                    k > 10 ? returnWOT = 10 : returnWOT = k

                }

            }else if(this.state.workOnWeekEnd_Active === false && this.state.workOnWeekEnd_Passive === false){

                let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(9).minute(0).second(0).millisecond(0),'minute')/60
                if(l < 0){
                    returnWOT = 0
                }else if(l > 15){
                    returnWOT = 15
                }else{
                    returnWOT = l
                }
            }

        }else if(dayOfReturn === "Sun"){
            
            if(this.state.workOnWeekEnd_Active === true && this.state.workOnWeekEnd_Passive === true){

                returnWOT = 9

            }else if(this.state.workOnWeekEnd_Active === false && this.state.workOnWeekEnd_Passive === false){
                let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(9).minute(0).second(0).millisecond(0),'minute')/60
                if(l < 0){
                    returnWOT = 0
                }else if(l > 15){
                    returnWOT = 15
                }else{
                    returnWOT = l
                }
            }

        }else if(dayOfReturn === "Mon" || dayOfReturn === "Tue" || dayOfReturn === "Wed" || dayOfReturn === "Thu" || dayOfReturn === "Fri" ){

            if(this.state.timeOfReturn.isSameOrBefore(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min))){
                let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(9).minute(0).second(0).millisecond(0),'minute')/60
                if(l < 0){
                    returnHours = 0
                }else if(l > 9){
                    returnHours = 9
                }else{
                    returnHours = l
                }
            }else if(this.state.timeOfReturn.isSameOrAfter(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min))){
                returnHours = 9
                let l = this.state.timeOfReturn.diff(this.state.dateOfReturn.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min).second(0).millisecond(0),'minute')/60
                if(l < 0){
                    returnOT = 0
                }else if(l > 6){
                    returnOT = 6
                }else{
                    returnOT = l
                }
            }

        }


        let bussinessTravelHours = travelHours_atDeparture + awayHours + returnHours
        let bussinessTravelOT = OT1 + OT2 + returnOT
        let bussinessTravelWOT = WOT + awayWOT + returnWOT
        let bussinessTravelHOT = HOT + awayHOT + returnHOT

        /*
        console.log("bussinessTravelHours:"+bussinessTravelHours);
        console.log("bussinessTravelOT:"+bussinessTravelOT);
        console.log("bussinessTravelWOT:"+bussinessTravelWOT);
        console.log("bussinessTravelHOT:"+bussinessTravelHOT);
        */


        this.setTravelDuration(bussinessTravelHours + bussinessTravelOT + bussinessTravelWOT + bussinessTravelHOT)

    }

    setTravelDuration = (duration) => { // part of travelDuration Calculations
        setTimeout(()=>{
            this.setState(()=>{
                return{
                    travelDuration:duration
                }
            })
        },250)
    }


    isHoliday = (date) => { // part of travelDuration Calculations
        let isHoliday;

            if(date.year() === 2021){
                if(this.state.halfDay_Holidays_2021_TR.includes(date.dayOfYear())){
                    isHoliday = "Half Day Public Holiday"
                    
                } else if(this.state.wholeDay_Holidays_2021_TR.includes(date.dayOfYear())){
                    isHoliday="One Day Public Holiday"
                }else{
                    isHoliday ="Not Holiday"
                }
        
                return isHoliday

            }else if(date.year() === 2022){

                if(this.state.halfDay_Holidays_2022_TR.includes(date.dayOfYear())){
                    isHoliday = "Half Day Public Holiday"
                    
                } else if(this.state.wholeDay_Holidays_2022_TR.includes(date.dayOfYear())){
                    isHoliday="One Day Public Holiday"
                }else{
                    isHoliday ="Not Holiday"
                }
        
                return isHoliday

            }
        }

        

 //_________________________________________________________________________________________________________TRAVEL DURATION FIRSTSTEP
    //OT1-OT2-travelHours

    calc_Hours_atDateOfDeparture = (isHoliday) => { // part of travelDuration Calculations
        let morningOvertime=0, normalHours=0, eveningOvertime=0,holidayovertime=0
        if(isHoliday === "Half Day Public Holiday"){

            if(this.state.hh_ToL < 14){

                holidayovertime = 5
                normalHours = 4
            
            }else if(this.state.hh_ToL >= 14 && this.state.hh_ToL < this.state.quitWorkingAt_hour){
                
                normalHours = this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min).diff(this.state.departureTime,'minute')/60
            
            }else if(this.state.hh_ToL >= this.state.quitWorkingAt_hour ){

                if(this.state.hh_ToL === 24){
                    eveningOvertime = 0
                }else{
                    eveningOvertime = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minute')+1) /60
                }   
            
            }

        }else if(isHoliday === "One Day Public Holiday"){
  
            holidayovertime = 9

        }else if(isHoliday === "Not Holiday"){

            if(this.state.hh_ToL < this.state.startWorkingAt_hour){
                
                morningOvertime = this.state.dateOfDeparture.hour(this.state.startWorkingAt_hour).minute(this.state.startWorkingAt_min).diff(this.state.departureTime, 'minute')/60
                normalHours = 9

            }else if(this.state.hh_ToL === this.state.startWorkingAt_hour && this.state.mm_ToL === this.state.startWorkingAt_min){
             
                normalHours = 9
            
            }else if(this.state.hh_ToL === this.state.startWorkingAt_hour  && this.state.mm_ToL !== this.state.startWorkingAt_min){

                normalHours = this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min).diff(this.state.departureTime,'minute')/60

            }else if(this.state.hh_ToL > this.state.startWorkingAt_hour && this.state.hh_ToL < this.state.quitWorkingAt_hour){

                normalHours = this.state.dateOfDeparture.hour(this.state.quitWorkingAt_hour).minute(this.state.quitWorkingAt_min).diff(this.state.departureTime,'minute')/60

            }else if(this.state.hh_ToL >= this.state.quitWorkingAt_hour){


                if(this.state.hh_ToL === 24){
                    eveningOvertime = 0
                }else{
                    eveningOvertime = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minute')+1)/60
                }

            }

        }

        return [morningOvertime,normalHours,eveningOvertime,holidayovertime]

    }



// IF the travel takes place in weekends


    weekend_OT_at_dateOfDeparture_Sat = () => { // part of travelDuration Calculations
    //let day = String(this.state.dateOfDeparture._d).split(" ")[0]
        let WOT_atDeparture;
        
        if(this.state.hh_ToL >= 18){
            WOT_atDeparture = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime, 'minute')+1)/60
        } else if (this.state.hh_ToL < 18){
            WOT_atDeparture = this.state.dateOfDeparture.hour(18).minute(0).diff(this.state.departureTime,'minute')/60
        }else{
            WOT_atDeparture=0
        }

        return WOT_atDeparture;
    }

    weekend_OT_at_dateOfDeparture_Sun = (isHoliday) => { // part of travelDuration Calculations

        let H_OT=0;
        let W_OT=0;

        if(this.state.workOnWeekEnd_Active === true && isHoliday === "Not Holiday"){
            W_OT = 9

        }else if (this.state.workOnWeekEnd_Active === true && isHoliday === "Half Day Public Holiday"){
            H_OT = 5
            W_OT = 4

        }else if (this.state.workOnWeekEnd_Active === true && isHoliday === "One Day Public Holiday"){
            H_OT = 9

        }else if (this.state.workOnWeekEnd_Active === false && isHoliday === "Not Holiday"){

            if(this.state.hh_ToL < 18){
                W_OT = this.state.dateOfDeparture.hour(18).minute(0).diff(this.state.departureTime, 'minutes')/60
            }else if (this.state.hh_ToL >= 18){
                let k;
                k = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minutes')+1)/60
                if(k < 0 || Number.isInteger(k)){
                    W_OT = 0
                }else if(k>6){
                    W_OT = 6
                }else if(k < 0.5){
                    W_OT = 0
                }else{
                    W_OT = k
                }
            }

        }else if (this.state.workOnWeekEnd_Active === false && isHoliday === "Half Day Public Holiday"){

            if(this.state.hh_ToL < 14){
                H_OT = 5
                W_OT = 4
            }else if (this.state.hh_ToL >= 14 && this.state.hh_ToL < 18){
                W_OT = this.state.dateOfDeparture.hour(18).minute(0).diff(this.state.departureTime, 'minutes')/60
            }else if (this.state.hh_ToL >= 18 && this.state.hh_ToL < 24){
                
                W_OT = (this.state.dateOfDeparture.endOf('day').diff(this.state.departureTime,'minutes')+1)/60
                
            }

        }else if(this.state.workOnWeekEnd_Active === false && isHoliday === "One Day Public Holiday"){
            H_OT = 9
        }
        
        return [H_OT, W_OT] 
    }

    
    // ______________________________________________________________________________________________________________TRAVEL DURATION SECONDSTEP
    
    secondStep = (day, isHoliday) => { // part of travelDuration Calculations

        let holidayOvertime = 0
        let weekendOvertime = 0
        let travelHour = 0

        if(isHoliday === "One Day Public Holiday"){
            holidayOvertime = 9
        }else if(isHoliday === "Half Day Public Holiday"){
            holidayOvertime = 5
            if(day === "Sat" || day === "Sun"){
                weekendOvertime = 4
            }else{
                travelHour = 4
            }
        }else if(day === "Sat"){
            if(this.state.workOnWeekEnd_Active === true && this.state.workOnWeekEnd_Passive === true){
                travelHour=5
                weekendOvertime = 4

            }else if(this.state.workOnWeekEnd_Active === false && this.state.workOnWeekEnd_Passive === false){
                weekendOvertime = 9
            }
        }else if(day === "Sun"){
            weekendOvertime = 9
        }else{
            travelHour = 9
        }

        return [holidayOvertime,weekendOvertime, travelHour]


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
        e.preventDefault()// this is needed to prevent the full page refresh
        


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
        }else if(!this.state.travelDestination){
            this.setState(()=>{
                return{
                    message:'Please Provide Travel Destination',
                    class:'alert alert-danger'
                }
            })
        
        }else{

            if(typeof (this.state.travelDuration) !== 'number'){
                this.setState(()=>{
                    return{
                        message:'Please Check Time Of Leave And Return',
                        travelClass:'alert alert-danger'
                    }
                })
            }else{
                this.setState(()=>{
                    return{
                        message:'Submitted',
                        class:'alert alert-success',
                        travelClass:'alert alert-success'

    
                    }
                })
                this.props.onSubmit({
                    name:this.state.name,
                    project:this.state.project,
                    travelDestination:this.state.travelDestination,
                    dateOfDeparture:this.state.dateOfDeparture.valueOf(),
                    departureTime:this.state.departureTime.valueOf(),
                    dateOfReturn:this.state.dateOfReturn.valueOf(),
                    timeOfReturn:this.state.timeOfReturn.valueOf(),
                    travelDuration:this.state.travelDuration,
                    accompaniedBy:this.state.accompaniedBy,
                    withWhomToMeet:this.state.withWhomToMeet,
                    accomodationAddress:this.state.accomodationAddress,
                    lengthOfStay:this.state.lengthOfStay,
                    accomodationFee:this.state.accomodationFee,
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
                            <label htmlFor="date">Travel Duration (Hours)</label>
                            <input type="text" className="form-control" placeholder={this.state.travelDuration}/>
                        </div>
                        
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-4">
                            <label htmlFor="taskDuration">Accompanied By</label>
                            <input type="text" className="form-control" id="accompaniedBy" placeholder={this.state.accompaniedBy} onChange={this.accompaniedBy_onChange}/>
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