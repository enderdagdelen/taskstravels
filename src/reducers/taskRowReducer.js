

const taskRowReducer = (state=["name","project","taskLocation","date","notes"],action) => {
    switch (action.type) {
        case 'ADD_PERSONTOMEET_ROW_':
    
            return[
                ...state,
                "personToMeet"
            ]
        case 'ADD_TIMEOFLEAVE_ROW_':
            return[
                ...state,
                "timeOfLeave"
            ]

        case 'ADD_TIMEOFRETURN_ROW_':
            return[
                ...state,
                "timeOfReturn"
            ]
        case 'ADD_TASKDURATION_ROW_':
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


export default taskRowReducer