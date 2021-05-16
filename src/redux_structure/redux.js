import {createStore, combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';



//******************************************** TASK ACTION GENERATORS AND REDUCER
const addTask = (
    {name='',
    project='',
    taskLocation='',
    withWhomToMeet='',
    date='',
    timeOfLeave='',
    timeOfReturn='',
    taskDuration='',
    meansOfTransport='',
    advance='',
    notes=''}={}) => ({
    type:'ADD_TASK',
    task:{
        id:uuidv4(),
        name,
        project,
        taskLocation,
        withWhomToMeet,
        date,
        timeOfLeave,
        timeOfReturn,
        taskDuration,
        meansOfTransport,
        advance,
        notes
    }
})


const editTask = (id,updates) => ({
    type:'EDIT_TASK',
    id,
    updates
})

const removeTask = (id) => ({
    type:'REMOVE_TASK',
    id
})

const taskReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ]

        case 'EDIT_TASK':
            return state.map((task) => {
                if(task.id === action.id){
                    return {
                        ...task,
                        ...action.updates
                    }
                }else{
                    return task
                }
            })
            
        case 'REMOVE_TASK':
            return state.filter(({id}) => {
                return id !== action.id
            })
        
        
        default:
           return state;
    }
}





//******************************************** TRAVEL ACTION GENERATORS AND REDUCER

const addTravel = ({
    name='',
    project='',
    travelDestination='',
    dateOfDeparture='',
    departureTime='',
    dateOfReturn='',
    timeOdReturn='',
    travelDuration='',
    accompaniedBy='',
    withWhomToMeet='',
    accomodationAddress='',
    lengthOfStay='',
    accomadationFee='',
    meansOfTransport='',
    advance='',
    notes=''

}={}) => ({
    type:'ADD_TRAVEL',
    travel:{
        id:uuidv4(),
        name,
        project,
        travelDestination,
        dateOfDeparture,
        departureTime,
        dateOfReturn,
        timeOdReturn,
        travelDuration,
        accompaniedBy,
        withWhomToMeet,
        accomodationAddress,
        lengthOfStay,
        accomadationFee,
        meansOfTransport,
        advance,
        notes
    }
})

const removeTravel = (id) => ({
    type:'REMOVE_TRAVEL',
    id
})


const editTravel = (id,updates) => ({
    type:'EDIT_TRAVEL',
    id,
    updates
})

const travelReducer = (state=[],action) => {
    switch (action.type) {
        case 'ADD_TRAVEL':
            return[
                ...state,
                action.travel
            ]
        
        case 'REMOVE_TRAVEL':
            return state.filter(travel => travel.id !==action.id)
            
        case 'EDIT_TRAVEL':
            return state.map((travel)=>{
                if(travel.id === action.id){
                    return{
                        ...travel,
                        ...action.updates
                    }
                }else{
                    return travel
                }
            })

        default:
            return state;
    }
}



//******************************************** FILTERS ACTION GENERATORS AND REDUCER


// TASKS 
const setTaskSearchText = (txt) => ({
    type:'SET_SEARCH_TEXT_',
    txt
})


const setTaskSortByName = () =>({
    type:'SET_SORTBY_NAME_',
})

const setTaskSortByProject = () =>({
    type:'SET_SORTBY_PROJECT_',
})



const setTaskSortByDate = () =>({
    type:'SET_SORTBY_STARTDATE_',
    
})

const setTaskSortByAdvance = () =>({
    type:'SET_SORTBY_ADVANCE_',
})



const setTaskStartDate = (startDate) => ({
    type:'SET_STARTDATE_',
    startDate
})

const setTaskEndDate = (endDate) => ({
    type:'SET_ENDDATE_',
    endDate
})


const setTaskOrderByDec = () => ({
    type:'ORDER_BY_DEC_'
})


const setTaskOrderByInc = () => ({
    type:'ORDER_BY_INC_'
})


const taskFilterReducerDummyData ={
    searchText:'',
    sortBy:'date',//name,project,traveldestination,startDate,advance,lengthOfStay
    orderBy:'dec',
    startDate:undefined,
    endDate:undefined,
}

const taskFilterReducer = (state=taskFilterReducerDummyData,action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT_':
            return{
                ...state,
                searchText:action.txt
            }
        
        case 'SET_SORTBY_NAME_':
            return{
                ...state,
                sortBy:'name'
            }
                    
        case 'SET_SORTBY_PROJECT_':  
            return{
                ...state,
                sortBy:'project'
            }      

        case 'SET_SORTBY_STARTDATE_':   
            return{
                ...state,
                sortBy:'date'
            }     
        case 'SET_SORTBY_ADVANCE_': 
            return{
                ...state,
                sortBy:'advance'
            }       
    
        
        case 'SET_STARTDATE_':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_ENDDATE_':
            return{
                ...state,
                endDate:action.endDate
            }
    
        case 'ORDER_BY_DEC_':
            return {
                ...state,
                orderBy:'dec'
            }
        
        case 'ORDER_BY_INC_':
            return{
                ...state,
                orderBy:'inc'
            }
    
        default:
            return state
    }
}



// TRAVEL FILTERS
const setTravelSearchText = (txt) => ({
    type:'SET_SEARCH_TEXT_',
    txt
})


const setTravelSortByName = () =>({
    type:'SET_SORTBY_NAME',
})

const setTravelSortByProject = () =>({
    type:'SET_SORTBY_PROJECT',
})

const setTravelSortByDestination = () =>({
    type:'SET_SORTBY_DESTINATION',
})

const setTravelSortByDate = () =>({
    type:'SET_SORTBY_STARTDATE',
    
})

const setTravelSortByAdvance = () =>({
    type:'SET_SORTBY_ADVANCE',
})

const setTravelSortByLengthOfStay = () =>({
    type:'SET_SORTBY_LENGTHOFSTAY',
})

const setTravelStartDate = (startDate) => ({
    type:'SET_STARTDATE',
    startDate
})

const setTravelEndDate = (endDate) => ({
    type:'SET_ENDDATE',
    endDate
})


const setTravelOrderByDec = () => ({
    type:'ORDER_BY_DEC'
})


const setTravelOrderByInc = () => ({
    type:'ORDER_BY_INC'
})


const travelFilterReducerDummyData ={
    searchText:'',
    sortBy:'date',//name,project,traveldestination,startDate,advance,lengthOfStay
    orderBy:'dec',
    startDate:undefined,
    endDate:undefined,
}

const travelFilterReducer = (state=travelFilterReducerDummyData,action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT_':
            return{
                ...state,
                searchText:action.txt
            }
        
        case 'SET_SORTBY_NAME':
            return{
                ...state,
                sortBy:'name'
            }
                    
        case 'SET_SORTBY_PROJECT':  
            return{
                ...state,
                sortBy:'project'
            }      
        case 'SET_SORTBY_DESTINATION': 
            return{
                ...state,
                sortBy:'destination'
            }       
        case 'SET_SORTBY_DATE':   
            return{
                ...state,
                sortBy:'date'
            }     
        case 'SET_SORTBY_ADVANCE': 
            return{
                ...state,
                sortBy:'advance'
            }       
        case 'SET_SORTBY_LENGTHOFSTAY':
            return{
                ...state,
                sortBy:'lengthofstay'
            }
        
        case 'SET_STARTDATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_ENDDATE':
            return{
                ...state,
                endDate:action.endDate
            }
    
        case 'ORDER_BY_DEC':
            return {
                ...state,
                orderBy:'dec'
            }
        
        case 'ORDER_BY_INC':
            return{
                ...state,
                orderBy:'inc'
            }
    
        default:
            return state
    }
}

// ******************************************** TASK TABLE ROWS **********

const addPersonToMeetRow_Task = () => ({
    type:'ADD_PERSONTOMEET_ROW'
})

const addTimeOfReturnRow_Task = () => ({
    type:'ADD_TIMEOFRETURN_ROW_'
})

const addTimeOfLeaveRow_Task = () => ({
    type:'ADD_TIMEOFLEAVE_ROW'
})

const addTaskDurationRow_Task = () => ({
    type:'ADD_TASKDURATION_ROW'
})

const addMeansOfTransportRow_Task = () => ({
    type:'ADD_MEANSOFTRANSPORT_ROW_'
})

const addAdvanceRow_Task = () => ({
    type:'ADD_ADVANCE_ROW_'
})

const taskRowReducer = (state=["name","project","taskLocation","date","notes"],action) => {
    switch (action.type) {
        case 'ADD_PERSONTOMEET_ROW':
    
            return[
                ...state,
                "personToMeet"
            ]
        case 'ADD_TIMEOFLEAVE_ROW':
            return[
                ...state,
                "timeOfLeave"
            ]

        case 'ADD_TIMEOFRETURN_':
            return[
                ...state,
                "timeOfReturn"
            ]
        case 'ADD_TASKDURATION_ROW':
            return[
                ...state,
                "taskDuration"
            ]
        case 'ADD_MEANSOFTRANSPORT_ROW_':
            return[
                ...state,
                "meansOfTransport"
            ]
        case 'ADD_ADVANCE_ROW_':
            return[
                ...state,
                "advance"
            ]
        default:
            return state;
    }
}



//*********************************************TRAVEL TABLE ROW ACTION GENERATORS AND REDUCER

const addDepartureTimeRow_Travel = () => ({
    type:'ADD_DEPARTURETIME_ROW'
})

const addDateOfReturnRow_Travel = () => ({
    type:'ADD_DATEOFRETURN_ROW'
})

const addTimeOfReturnRow_Travel = () => ({
    type:'ADD_TIMEOFRETURN_ROW'
})

const addTravelDurationRow_Travel = () => ({
    type:'ADD_TRAVELDURATION_ROW'
}) 

const addAccompaniedByRow_Travel = () => ({
    type:'ADD_ACCOMPANIEDBY_ROW'
}) 

const addWithWhomToMeetRow_Travel = () => ({
    type:'ADD_WITHWHOMTOMEET_ROW'
}) 

const addAccomodationAdressRow_Travel = () => ({
    type:'ADD_ACCOMODATIONADRESS_ROW'
}) 

const addLengthOfStayRow_Travel = () => ({
    type:'ADD_LENGTHOFSTAY_ROW'
}) 

const addAccomodationFeeRow_Travel = () => ({
    type:'ADD_ACCOMODATIONFEE_ROW'
}) 

const addMeansOfTransportRow_Travel = () => ({
    type:'ADD_MEANSOFTRANSPORT_ROW'
}) 

const addAdvanceRow_Travel = () => ({
    type:'ADD_ADVANCE_ROW'
}) 


const travelRowReducer = (state=["name","project","travelDestination","dateOfDeparture","notes"],action) => {
    switch (action.type) {
        case 'ADD_DEPARTURETIME_ROW':
            return [
                ...state,
                "departureTime"
            ]
        case 'ADD_DATEOFRETURN_ROW':
            return[
                ...state,
                "dateOfReturn"
            ]

        case 'ADD_TIMEOFRETURN_ROW':
            return[
                ...state,
                "timeOfReturn"
            ]
        case 'ADD_TRAVELDURATION_ROW':
            return[
                ...state,
                "travelDuration"
            ]
        case 'ADD_ACCOMPANIEDBY_ROW':
            return[
                ...state,
                "accompaniedBy"
            ]
        case 'ADD_WITHWHOMTOMEET_ROW':
            return[
                ...state,
                "withWhomToMeet"
            ]
        case 'ADD_ACCOMODATIONADRESS_ROW':
            return[
                ...state,
                "accomodationAdress"
            ]
        case 'ADD_LENGTHOFSTAY_ROW':
            return [
                ...state,
                "lengthOfStay"
            ]
        case 'ADD_ACCOMODATIONFEE_ROW':
            return [
                ...state,
                "accomodationFee"
            ]
        case 'ADD_MEANSOFTRANSPORT_ROW':
            return [
                ...state,
                "meansOfTransport"
            ]
        case 'ADD_ADVANCE_ROW':
            return[
                ...state,
                "advance"
            ]
        default:

        return state;    
    }
}



// ******************************************** GETVISIBLESTATE FUNCTIONS **********

const getVisibleTasks = (tasks, {searchText,sortBy,startDate,endDate,orderBy}) => {
    return tasks.filter((task)=>{
        const startDateMatch = startDate ? moment(task.date).isSameOrAfter(startDate) : true;
        const endDateMatch = endDate ? moment(task.date).isSameOrBefore(endDate):true;
        const textMatch = 
        task.name.toLowerCase().includes(searchText.toLowerCase()) 
        || task.project.toLowerCase().includes(searchText.toLowerCase())
        || task.taskLocation.toLowerCase().includes(searchText.toLowerCase())
        || task.notes.toLowerCase().includes(searchText.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
  
            if(orderBy === 'inc'){
                return a.date > b.date ? 1 : -1; // k-b
            }
            return a.date < b.date ? 1 : -1; // b-k
            
        }else if(sortBy === 'name'){

            if(orderBy === 'inc'){
                return a.name > b.name ? 1 : -1;
            }
            return a.name < b.name ? 1 : -1;

        }else if (sortBy === 'project'){

            if(orderBy === 'inc'){
                return a.project > b.project ? 1 : -1;
            }
            return a.project < b.project ? 1 : -1;

        }else if(sortBy === 'advance'){

            if(orderBy === 'inc'){
                return a.advance > b.advance ? 1 : -1;
            }
            return a.advance < b.advance ? 1 : -1;

        }

        return 0
        
    })

    
}// for tasks sortBy criterias=name,project,date,advance


const getVisibleTravels = (travels, {searchText, sortBy, startDate, endDate, orderBy}) => {
    return travels.filter((travel)=>{
        const startDateMatch = startDate ? moment(travel.dateOfDeparture).isSameOrAfter(startDate) : true;
        const endDateMatch = endDate ? moment(travel.dateOfDeparture).isSameOrBefore(endDate):true;
        const textMatch_ = 
        travel.name.toLowerCase().includes(searchText.toLowerCase()) 
        || travel.project.toLowerCase().includes(searchText.toLowerCase())
        || travel.travelDestination.toLowerCase().includes(searchText.toLowerCase())
        || travel.accomodationAddress.toLowerCase().includes(searchText.toLowerCase())
        || travel.notes.toLowerCase().includes(searchText.toLowerCase());

        
        return startDateMatch && endDateMatch && textMatch_; 

    }).sort((a,b)=>{
        if(sortBy === 'date'){
            if(orderBy === 'inc'){
                return a.dateOfDeparture > b.dateOfDeparture ? 1 : -1;
            }
            return a.dateOfDeparture < b.dateOfDeparture ? 1 : -1;
        }else if(sortBy === 'project'){
            if(orderBy === 'inc'){
                return a.project > b.project ? 1 : -1;
            }
            return a.project < b.project ? 1 : -1;

        }else if (sortBy === 'name'){
            if(orderBy === 'inc'){
                return a.name > b.name ? 1 : -1;
            }
            return a.name < b.name ? 1 : -1;

        }else if(sortBy === 'destination'){
            if(orderBy === 'inc'){
                return a.travelDestination > b.travelDestination ? 1 : -1;
            }
            return a.travelDestination < b.travelDestination ? 1 : -1;

        }else if(sortBy === 'lengthofstay'){
            if(orderBy === 'inc'){
                return a.lengthOfStay > b.lengthOfStay ? 1 : -1;
            }
            return a.lengthOfStay < b.lengthOfStay ? 1 : -1;

        }else if(sortBy === 'advance'){
            if(orderBy === 'inc'){
                return a.advance > b.advance ? 1 : -1;
            }
            return a.advance < b.advance ? 1 : -1;

        }
    })
}// for tasks sortBy criterias=name,project,dateOfDeparture,advance,travelDestination,lengthofstay

// ******************************************** STORE ******************************

const store = createStore(combineReducers(
    {
        tasks:taskReducer,
        travels:travelReducer,
        taskFilters:taskFilterReducer,
        travelFilters:travelFilterReducer,
        taskRows:taskRowReducer,
        travelRows:travelRowReducer
    },
),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




// ******************************************** SUBSCRIPTION ***********************


store.subscribe(()=>{
    const state = store.getState();
    const visibleTasks = getVisibleTasks(state.tasks, state.taskFilters)
    console.log(visibleTasks);
})  

store.subscribe(()=>{
    const state = store.getState();
    const visibleTravels = getVisibleTravels(state.travels, state.travelFilters)
    console.log(visibleTravels)
})
 

// TASK DISPATCHES

/*
const taskOne = store.dispatch(addTask({
    name:'Rio Ferdinand',
    project:'New Insurance Policy',
    taskLocation:'Insurance Co.',
    withWhomToMeet:'Ms. Jen White',
    date:moment(1609502400000),//1st 01 2021
    timeOfLeave:moment().format('HH:mm'),
    timeOfReturn:moment().format('HH:mm'),
    taskDuration:2,
    meansOfTransport:'Company Car',
    advance:300,
    notes:'To Negotiate Insurance Fees'
}))

const taskTwo = store.dispatch(addTask({
    name:'Walter White',
    project:'Renting And Driving',
    taskLocation:'Car Rental Company',
    withWhomToMeet:'Mr. Jack Zoloff',
    date:moment(1612180800000),//1st 02 2021
    timeOfLeave:moment().format('HH:mm'),
    timeOfReturn:moment().format('HH:mm'),
    taskDuration:3,
    meansOfTransport:'Taxi',
    advance:200,
    notes:'To Deliver Keys of the old cars'
}))

const taskThree = store.dispatch(addTask({
    name:'Samuel Jackson',
    project:'Data Center',
    taskLocation:'MediaMarkt',
    withWhomToMeet:'',
    date:moment(1614600000000),//1st 03 2021
    timeOfLeave:moment().format('HH:mm'),
    timeOfReturn:moment().format('HH:mm'),
    taskDuration:4,
    meansOfTransport:'Company Car',
    advance:3000,
    notes:'To Purchase New Hard Drives'
}))

*/
//store.dispatch(editTask(taskTwo.task.id,{name:'Michael', notes:'Successfull Meeting'}))
//store.dispatch(removeTask(taskThree.task.id))



// ----------------------------------------------TRAVEL DISPATCHES

const travelOne = store.dispatch(addTravel({
    name:'Lebron James',
    project:'Heaven Village Dam Project',
    travelDestination:'Las Palmas',
    dateOfDeparture:moment(1617278400000),//01 04 2021
    departureTime:moment().format('HH:mm'),
    dateOfReturn:moment().format('Do MM YYYY'),
    timeOdReturn:moment().format('HH:mm'),
    travelDuration:3,
    accompaniedBy:'Alone',
    withWhomToMeet:'Structural Engineer Mr. Henry Kewell',
    accomodationAddress:'LAs Palmas Hotel',
    lengthOfStay:'2',
    accomodationFee:175,
    meansOfTransport:'AirWays',
    advance:2000,
    notes:'To Check The Formulation'
}))

const travelTwo = store.dispatch(addTravel({
    name:'Jenny Lopez',
    project:'Sales Education',
    travelDestination:'Istanbul',
    dateOfDeparture:moment(1619870400000),//01 05 2021
    departureTime:moment().format('HH:mm'),
    dateOfReturn:moment().format('Do MM YYYY'),
    timeOdReturn:moment().format('HH:mm'),
    travelDuration:6,
    accompaniedBy:'With Sales Team',
    withWhomToMeet:'Sales Conference',
    accomodationAddress:'Grand Istanbul',
    lengthOfStay:'5',
    accomodationFee:200,
    meansOfTransport:'AirWays',
    advance:5000,
    notes:'To Attend Annual Sales Conference'
}))

const travelThree = store.dispatch(addTravel({
    name:'Bea Yugeros',
    project:'Irrigation',
    travelDestination:'Ciadad Real',
    dateOfDeparture:moment(1622548800000),//01 06 2021
    departureTime:moment().format('HH:mm'),
    dateOfReturn:moment().format('Do MM YYYY'),
    timeOdReturn:moment().format('HH:mm'),
    travelDuration:4,
    accompaniedBy:'Alone',
    withWhomToMeet:'Agriculture Official Of Ciaded Real',
    accomodationAddress:'Grand Ciudad Real',
    lengthOfStay:'3',
    accomodationFee:90,
    meansOfTransport:'Car',
    advance:7000,
    notes:'To Attend Farmers Questions'
}))
 
//store.dispatch(removeTravel(travelThree.travel.id))

//store.dispatch(editTravel(travelTwo.travel.id,{name:'Denis Rodman'}))




// ----------------------------------------------FILTERS DISPATCHES
 /*
store.dispatch(setSearchText())

store.dispatch(setSortByStartDate())

store.dispatch(setStartDate(moment(1614600000000)))
store.dispatch(setEndDate(moment(1619870400000))) 
*/
 


//store.dispatch(setTravelOrderByInc())
//store.dispatch(setTravelSortBy())


// TASK TABLE ROW DISPATCHES
/*
store.dispatch(addPersonToMeetRow_Task())
store.dispatch(addTaskDurationRow_Task())
store.dispatch(addTimeOfLeaveRow_Task())
store.dispatch(addTimeOfReturnRow_Task())
store.dispatch(addAdvanceRow_Task())
store.dispatch(addMeansOfTransportRow_Task())
*/


// TABLE TABLE ROW DISPATCHES
/*
store.dispatch(addDepartureTimeRow_Travel())
store.dispatch(addDateOfReturnRow_Travel())
store.dispatch(addTimeOfReturnRow_Travel())
store.dispatch(addTravelDurationRow_Travel())
store.dispatch(addAccompaniedByRow_Travel())
store.dispatch(addWithWhomToMeetRow_Travel())
store.dispatch(addAccomodationAdressRow_Travel())
store.dispatch(addAccomodationFeeRow_Travel())
store.dispatch(addLengthOfStayRow_Travel())
store.dispatch(addMeansOfTransportRow_Travel())
store.dispatch(addAdvanceRow_Travel())
*/


//store.dispatch(setTaskSearchText('rio'))

store.dispatch(setTravelSearchText('bea'))