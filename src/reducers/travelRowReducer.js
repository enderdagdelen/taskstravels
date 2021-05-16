

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

export default travelRowReducer