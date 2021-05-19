
import React from 'react';
import ReactDOM from 'react-dom';

//react-redux
import {Provider} from 'react-redux'

//router
import AppRouter from './routers/appRouter';

// Redux Store
import configureStore from './store/configureStore'
const store = configureStore()

//Redux Action Generators
import {addTask} from './actions/task.js'
import {addTravel} from './actions/travel.js'

// Redux visible tasks and travels
import getVisibleTasks from './selectors/taskSelector'
import getVisibleTravels from './selectors/travelSelector'

//Redux Actions
import {setTaskSearchText,
    setTaskSortByName,
    setTaskSortByAdvance,
    setTaskSortByDate,
    setTaskSortByProject,
    setTaskStartDate,
    setTaskEndDate,
    setTaskOrderByDec,
    setTaskOrderByInc
    } from './actions/taskFilter'
import {setTravelEndDate, 
    setTravelSearchText, 
    setTravelSortByAdvance, 
    setTravelSortByDate, 
    setTravelSortByName, 
    setTravelStartDate,
    setTravelOrderByInc,
    setTravelOrderByDec} from './actions/travelFilter'

    import {
        addDepartureTimeRow_Travel,
        addDateOfReturnRow_Travel,
        addTimeOfReturnRow_Travel,
        addTravelDurationRow_Travel,
        addAccompaniedByRow_Travel,
        addWithWhomToMeetRow_Travel,
        addAccomodationAdressRow_Travel,
        addLengthOfStayRow_Travel,
        addAccomodationFeeRow_Travel,
        addMeansOfTransportRow_Travel,
        addAdvanceRow_Travel
    } from './actions/travelRow'

//css-scss-normalize
import 'normalize.css/normalize.css'; 
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';

//moment
import moment from 'moment'
import { addPersonToMeetRow_Task, 
        addTimeOfReturnRow_Task,
        addTimeOfLeaveRow_Task,
        addTaskDurationRow_Task,
        addMeansOfTransportRow_Task,
        addAdvanceRow_Task } from './actions/taskRows';






const taskOne = store.dispatch(addTask({
    name:'Rio Ferdinand',
    project:'New Insurance Policy',
    taskLocation:'Insurance Co.',
    withWhomToMeet:'Ms. Jen White',
    date:moment(1609502400000).format('Do MM YYYY'),//1st 01 2021
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
    date:moment(1612180800000).format('Do MM YYYY'),//1st 02 2021
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
    date:moment(1614600000000).format('Do MM YYYY'),//1st 03 2021
    timeOfLeave:moment().format('HH:mm'),
    timeOfReturn:moment().format('HH:mm'),
    taskDuration:4,
    meansOfTransport:'Company Car',
    advance:3000,
    notes:'To Purchase New Hard Drives'
}))
/*
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
*/


 // place dispatch calls over store.getState()

//store.dispatch(setTaskSearchText(''))    
//store.dispatch(setTravelSearchText('bea'))   ok 

//store.dispatch(setTaskSortByName()) ok
//store.dispatch(setTravelSortByName()) ok 

//store.dispatch(setTaskSortByAdvance()) ok
//store.dispatch(setTravelSortByAdvance()) ok

//store.dispatch(setTaskSortByProject())
//store.dispatch(setTravelSortByAdvance())

//store.dispatch(setTaskSortByName()) ok
//store.dispatch(setTravelSortByName()) ok

//store.dispatch(setTaskSortByDate()) ok 
//store.dispatch(setTravelSortByDate()) ok 

//store.dispatch(setTaskStartDate(5)) ok
//store.dispatch(setTravelStartDate(10)) ok 

//store.dispatch(setTaskEndDate(20)) ok
//store.dispatch(setTravelEndDate(30)) ok 

//store.dispatch(setTaskOrderByInc()) ok 
//store.dispatch(setTravelOrderByInc()) ok 

//store.dispatch(setTaskOrderByDec())
//store.dispatch(setTravelOrderByDec())


// task row actions
/*
store.dispatch(addPersonToMeetRow_Task())
store.dispatch(addTimeOfReturnRow_Task())
store.dispatch(addTimeOfLeaveRow_Task())
store.dispatch(addTaskDurationRow_Task())
store.dispatch(addMeansOfTransportRow_Task())
store.dispatch(addAdvanceRow_Task())
*/
const state = store.getState()


// travel row actions
/*
store.dispatch(addDepartureTimeRow_Travel())
store.dispatch(addDateOfReturnRow_Travel())
store.dispatch(addTimeOfReturnRow_Travel())
store.dispatch(addTravelDurationRow_Travel())
store.dispatch(addAccompaniedByRow_Travel())
store.dispatch(addWithWhomToMeetRow_Travel())
store.dispatch(addAccomodationAdressRow_Travel())
store.dispatch(addLengthOfStayRow_Travel())
store.dispatch(addAccomodationFeeRow_Travel())
store.dispatch(addMeansOfTransportRow_Travel())
store.dispatch(addAdvanceRow_Travel())
*/

const visibleTasks = getVisibleTasks(state.tasks,state.taskFilters)
const visibleTravels = getVisibleTravels(state.travels, state.travelFilters)



console.log(visibleTasks);
console.log(visibleTravels);





const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'));