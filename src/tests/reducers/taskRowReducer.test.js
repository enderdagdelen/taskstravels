import taskRowReducer from '../../reducers/taskRowReducer'

test('should set default row values',()=>{
    const result = taskRowReducer(undefined,{type:'@@INIT'})
    expect(result).toEqual(["name","project","taskLocation","date","notes"])
})

test('should add timeofreturn row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_TIMEOFRETURN_ROW_'
    })

    expect(result.length).toEqual(6)
})

test('should add perosntomeet row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_PERSONTOMEET_ROW_'
    })

    expect(result.length).toEqual(6)
})

test('should add timeofleave row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_TIMEOFLEAVE_ROW_'
    })

    expect(result.length).toEqual(6)
})

test('should add taskduration row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_TASKDURATION_ROW_'
    })

    expect(result.length).toEqual(6)
})

test('should add means of transport row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_MEANSOFTRANSPORT_ROW_'
    })

    expect(result.length).toEqual(6)
})

test('should add advance row to default array',()=>{
    const rowArray = ["name","project","taskLocation","date","notes"]
    const result = taskRowReducer(undefined, {
        type:'ADD_ADVANCE_ROW_'
    })

    expect(result.length).toEqual(6)
})