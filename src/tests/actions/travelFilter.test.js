import   {
    setTravelSearchText,
    setTravelSortByName,
    setTravelSortByProject,
    setTravelSortByDestination,
    setTravelSortByDate,
    setTravelSortByAdvance,
    setTravelSortByLengthOfStay,
    setTravelStartDate,
    setTravelEndDate,
    setTravelOrderByDec,
    setTravelOrderByInc
} from '../../actions/travelFilter'


test('should set travel search text',()=>{
    const result = setTravelSearchText('testing')
    expect(result).toEqual({
        type:'SET_SEARCH_TEXT',
        txt:'testing'
    })
})

test('should set travel set sortby to name',()=>{
    const result = setTravelSortByName()
    expect(result).toEqual({
        type:'SET_SORTBY_NAME'
    })
})

test('should set travel set sotby to project',()=>{
    const result = setTravelSortByProject()
    expect(result).toEqual({
        type:'SET_SORTBY_PROJECT'
    })
})

test('should set travel sortby to destination',()=>{
    const result = setTravelSortByDestination()
    expect(result).toEqual({
        type:'SET_SORTBY_DESTINATION'
    })
})

test('should set travel sortby to date',()=>{
    const result = setTravelSortByDate()
    expect(result).toEqual({
        type:'SET_SORTBY_STARTDATE'
    })
})

test('should set travel sortby to advance',()=>{
    const result = setTravelSortByAdvance()
    expect(result).toEqual({
        type:'SET_SORTBY_ADVANCE'
    })
})

test('should set travel srotby to length of stay',()=>{
    const result = setTravelSortByLengthOfStay()
    expect(result).toEqual({
        type:'SET_SORTBY_LENGTHOFSTAY'
    })
})

test('should set travel startdate',()=>{
    const result = setTravelStartDate(12312123123)
    expect(result).toEqual({
        type:'SET_STARTDATE',
        startDate:12312123123
    })
})

test('should set travel enddate',()=>{
    const result = setTravelEndDate(12312123123)
    expect(result).toEqual({
        type:'SET_ENDDATE',
        endDate:12312123123
    })
})

test('should set travel order by decreasing',()=>{
    const result = setTravelOrderByDec()
    expect(result).toEqual({
        type:'ORDER_BY_DEC'
    })
})

test('should set travel order by increasing',()=>{
    const result = setTravelOrderByInc()
    expect(result).toEqual({
        type:'ORDER_BY_INC'
    })
})

