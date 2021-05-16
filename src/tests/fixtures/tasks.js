import moment from 'moment'

export const taskData = [{
    id:'1',
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
},
{
    id:'2',
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
},
{
    id:'3',
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
}]
