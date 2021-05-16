import travelRowReducer from '../../reducers/travelRowReducer'

test('should fire default row values',()=>{

    const result = travelRowReducer(undefined,{
        type:'@@INIT'
    })

    expect(result).toEqual(["name","project","travelDestination","dateOfDeparture","notes"])
})


test('should add departure time row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_DEPARTURETIME_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add date of return row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_DATEOFRETURN_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add time of return row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_TIMEOFRETURN_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add travel duration row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_TRAVELDURATION_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add accompanied by row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_ACCOMPANIEDBY_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add with whom to meet row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_WITHWHOMTOMEET_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add accomodation address row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_ACCOMODATIONADRESS_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add length of stay row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_LENGTHOFSTAY_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add accomodation fee row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_ACCOMODATIONFEE_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add means of tranport row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_MEANSOFTRANSPORT_ROW'
    })

    expect(result.length).toEqual(6)
})

test('should add advance row to default array',()=>{
    const result = travelRowReducer(undefined,{
        type:'ADD_ADVANCE_ROW'
    })

    expect(result.length).toEqual(6)
})