import taskFilterReducer from '../../reducers/taskFilterReducer';



test('should setup with default filters',()=>{
    const result = taskFilterReducer(undefined, {type:'@@INIT'})
    expect(result).toEqual({
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    })
})


test('should set sortBy to name',()=>{
    const result = taskFilterReducer(undefined,{
        type:'SET_SORTBY_NAME_'
    })

    expect(result.sortBy).toEqual('name')
})

test('should set sortBy to project',()=>{
    const result = taskFilterReducer(undefined,{
        type:'SET_SORTBY_PROJECT_'
    })

    expect(result.sortBy).toEqual('project')
})

test('should set sortBy to startdate',()=>{
    const result = taskFilterReducer(undefined,{
        type:'SET_SORTBY_STARTDATE_'
    })

    expect(result.sortBy).toEqual('date')
})

test('should set sortBy to advance',()=>{
    const result = taskFilterReducer(undefined,{
        type:'SET_SORTBY_ADVANCE_'
    })

    expect(result.sortBy).toEqual('advance')
})


test('should set startDate',()=>{
    const startDate=1231231231
    const result = taskFilterReducer(undefined,{
        type:'SET_STARTDATE_',
        startDate
    })

    expect(result.startDate).toEqual(startDate)
})

test('should set endDate',()=>{
    const endDate=1231231231
    const result = taskFilterReducer(undefined,{
        type:'SET_ENDDATE_',
        endDate
    })

    expect(result.endDate).toEqual(endDate)
})


test('should set searchText',()=>{
    const txt='testing'
    const result = taskFilterReducer(undefined,{
        type:'SET_SEARCH_TEXT_',
        txt
    })

    expect(result.searchText).toBe(txt)
})

test('should set orderBy to increasing',()=>{

    const result = taskFilterReducer(undefined,{
        type:'ORDER_BY_INC_'
    })

    expect(result.orderBy).toEqual('inc')
})

test('should set orderBy to decreasing',()=>{

    const result = taskFilterReducer(undefined,{
        type:'ORDER_BY_DEC_'
    })

    expect(result.orderBy).toEqual('dec')
})