import {
    addPersonToMeetRow_Task,
    addTimeOfReturnRow_Task,
    addTimeOfLeaveRow_Task,
    addTaskDurationRow_Task,
    addMeansOfTransportRow_Task,
    addAdvanceRow_Task,
} from '../../actions/taskRows'


test('should add person to meet row', ()=>{
    const result = addPersonToMeetRow_Task()
    expect(result).toEqual({type:'ADD_PERSONTOMEET_ROW_'})
})

test('should add time of return row', ()=>{
    const result = addTimeOfReturnRow_Task()
    expect(result).toEqual({type:'ADD_TIMEOFRETURN_ROW_'})
})

test('should add time of leave row', ()=>{
    const result = addTimeOfLeaveRow_Task()
    expect(result).toEqual({type:'ADD_TIMEOFLEAVE_ROW_'})
})

test('should add task duration row', ()=>{
    const result = addTaskDurationRow_Task()
    expect(result).toEqual({type:'ADD_TASKDURATION_ROW_'})
})

test('should add means of transport row', ()=>{
    const result = addMeansOfTransportRow_Task()
    expect(result).toEqual({type:'ADD_MEANSOFTRANSPORT_ROW_'})
})

test('should add advance row', ()=>{
    const result = addAdvanceRow_Task()
    expect(result).toEqual({type:'ADD_ADVANCE_ROW_'})
})