
export const setTaskSearchText = (txt) => ({
    type:'SET_SEARCH_TEXT_',
    txt
})


export const setTaskSortByName = () =>({
    type:'SET_SORTBY_NAME_',
})

export const setTaskSortByProject = () =>({
    type:'SET_SORTBY_PROJECT_',
})

export const setTaskSortByDate = () =>({
    type:'SET_SORTBY_STARTDATE_',
    
})

export const setTaskSortByAdvance = () =>({
    type:'SET_SORTBY_ADVANCE_',
})

export const setTaskStartDate = (startDate) => ({
    type:'SET_STARTDATE_',
    startDate
})

export const setTaskEndDate = (endDate) => ({
    type:'SET_ENDDATE_',
    endDate
})


export const setTaskOrderByDec = () => ({
    type:'ORDER_BY_DEC_'
})


export const setTaskOrderByInc = () => ({
    type:'ORDER_BY_INC_'
})