import travelFilterReducer from '../../reducers/travelFilterReducer'

test('should set filters with default values',()=>{

    const result = travelFilterReducer(undefined,{
        type:'@@INIT'
    })
    
    expect(result).toEqual({
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined,
    })
})

test('should set search text',()=>{
    const txt = 'testing'
    const result = travelFilterReducer(undefined,{
        type:'SET_SEARCH_TEXT',
        txt
    })
    expect(result.searchText).toEqual(txt)
})


test('should set travel start date',()=>{
    const startDate = 1231413
    const result = travelFilterReducer(undefined,{
        type:'SET_STARTDATE',
        startDate
    })
    expect(result.startDate).toEqual(startDate)
})


test('should set travel end date',()=>{
    const endDate = 1231413
    const result = travelFilterReducer(undefined,{
        type:'SET_ENDDATE',
        endDate
    })
    expect(result.endDate).toEqual(endDate)
})

test('should set orderBy = inc',()=>{
    const result = travelFilterReducer(undefined,{
        type:'ORDER_BY_INC'
    })
    expect(result.orderBy).toEqual('inc')
})

test('should set orderBy = dec',()=>{
    const result = travelFilterReducer(undefined,{
        type:'ORDER_BY_DEC'
    })
    expect(result.orderBy).toEqual('dec')
})

test('should set orderBy = dec',()=>{
    const result = travelFilterReducer(undefined,{
        type:'ORDER_BY_DEC'
    })
    expect(result.orderBy).toEqual('dec')
})

test('should set sortBy to name',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_NAME'
    })

    expect(result.sortBy).toBe('name')
})

test('should set sortBy to project',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_PROJECT'
    })

    expect(result.sortBy).toBe('project')
})

test('should set sortBy to destination',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_DESTINATION'
    })

    expect(result.sortBy).toBe('destination')
})

test('should set sortBy to date',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_DATE'
    })

    expect(result.sortBy).toBe('date')
})

test('should set sortBy to advance',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_ADVANCE'
    })

    expect(result.sortBy).toBe('advance')
})

test('should set sortBy to lenght of stay',()=>{
    const result = travelFilterReducer(undefined,{
        type:'SET_SORTBY_LENGTHOFSTAY'
    })

    expect(result.sortBy).toBe('lengthofstay')
})


