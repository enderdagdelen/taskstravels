import {v4 as uuidv4} from 'uuid'

export const addTravel = ({
    name='',
    project='',
    travelDestination='',
    dateOfDeparture='',
    departureTime='',
    dateOfReturn='',
    timeOfReturn='',
    travelDuration=0,
    accompaniedBy='',
    withWhomToMeet='',
    accomodationAddress='',
    lengthOfStay='',
    accomodationFee=0,
    meansOfTransport='',
    advance=0,
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
        timeOfReturn,
        travelDuration,
        accompaniedBy,
        withWhomToMeet,
        accomodationAddress,
        lengthOfStay,
        accomodationFee,
        meansOfTransport,
        advance,
        notes
    }
})

export const removeTravel = (id) => ({
    type:'REMOVE_TRAVEL',
    id
})


export const editTravel = (id,updates) => ({
    type:'EDIT_TRAVEL',
    id,
    updates
})