import {
    setTaskSearchText,
    setTaskStartDate,
    setTaskEndDate,
    setTaskSortByDate,
    setTaskSortByAdvance,
    setTaskSortByName,
    setTaskSortByProject,
    setTaskOrderByDec,
    setTaskOrderByInc
} from '../../actions/taskFilter'


test('should set task search text',()=>{
    const result = setTaskSearchText('Testing')
    
    expect(result).toEqual({
        type:'SET_SEARCH_TEXT_',
        txt:'Testing'
    })
})

test('should set task start date',()=>{
    const result = setTaskStartDate(1620686596000)
    
    expect(result).toEqual({
        type:'SET_STARTDATE_',
        startDate:1620686596000
    })
})

test('should set ',()=>{
    const result = setTaskEndDate(1620686596000)
    
    expect(result).toEqual({
        type:'SET_ENDDATE_',
        endDate:1620686596000
    })
})

test('should set sortby to date',()=>{
    const result = setTaskSortByDate()
    
    expect(result).toEqual({
        type:'SET_SORTBY_STARTDATE_'
        
    })
})

test('should set sortBy to name',()=>{
    const result = setTaskSortByName()
    
    expect(result).toEqual({
        type:'SET_SORTBY_NAME_',
        
    })
})

test('should set sortBy advance',()=>{
    const result = setTaskSortByAdvance()
    
    expect(result).toEqual({
        type:'SET_SORTBY_ADVANCE_',
        
    })
})



test('should set sortBy project',()=>{
    const result = setTaskSortByProject()
    
    expect(result).toEqual({
        type:'SET_SORTBY_PROJECT_',
        
    })
})

test('should set orderBy Dec',()=>{
    const result = setTaskOrderByDec()
    
    expect(result).toEqual({
        type:'ORDER_BY_DEC_',
        
    })
})


test('should set orderBy Dec',()=>{
    const result = setTaskOrderByInc()
    
    expect(result).toEqual({
        type:'ORDER_BY_INC_',
        
    })
})

