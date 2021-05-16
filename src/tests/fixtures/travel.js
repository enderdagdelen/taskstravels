import moment from 'moment';

export const travelData = [
    {
        id:'4',
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
        lengthOfStay:2,
        accomodationFee:175,
        meansOfTransport:'AirWays',
        advance:2000,
        notes:'To Check The Formulation'
    },{
        id:'5',
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
        lengthOfStay:5,
        accomodationFee:200,
        meansOfTransport:'AirWays',
        advance:5000,
        notes:'To Attend Annual Sales Conference'
    },
    {
        id:'6',
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
        lengthOfStay:3,
        accomodationFee:90,
        meansOfTransport:'Car',
        advance:7000,
        notes:'To Attend Farmers Questions'
    }
]