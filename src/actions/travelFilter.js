

export const setTravelSearchText = (txt) => ({
    type:'SET_SEARCH_TEXT',
    txt
})


export const setTravelSortByName = () =>({
    type:'SET_SORTBY_NAME',
})

export const setTravelSortByProject = () =>({
    type:'SET_SORTBY_PROJECT',
})

export const setTravelSortByDestination = () =>({
    type:'SET_SORTBY_DESTINATION',
})

export const setTravelSortByDate = () =>({
    type:'SET_SORTBY_STARTDATE',
    
})

export const setTravelSortByAdvance = () =>({
    type:'SET_SORTBY_ADVANCE',
})

export const setTravelSortByLengthOfStay = () =>({
    type:'SET_SORTBY_LENGTHOFSTAY',
})

export const setTravelStartDate = (startDate) => ({
    type:'SET_STARTDATE',
    startDate
})

export const setTravelEndDate = (endDate) => ({
    type:'SET_ENDDATE',
    endDate
})


export const setTravelOrderByDec = () => ({
    type:'ORDER_BY_DEC'
})


export const setTravelOrderByInc = () => ({
    type:'ORDER_BY_INC'
})