import {
    addDepartureTimeRow_Travel,
    addDateOfReturnRow_Travel,
    addTimeOfReturnRow_Travel,
    addTravelDurationRow_Travel,
    addAccompaniedByRow_Travel,
    addWithWhomToMeetRow_Travel,
    addAccomodationAdressRow_Travel,
    addLengthOfStayRow_Travel,
    addAccomodationFeeRow_Travel,
    addMeansOfTransportRow_Travel,
    addAdvanceRow_Travel
} from '../../actions/travelRow.js'


test('Should add departure time row to travelRow',()=>{
    const result = addDepartureTimeRow_Travel()
    expect(result).toEqual({type:'ADD_DEPARTURETIME_ROW'})
})

test('Should add date of return row to travelRow',()=>{
    const result = addDateOfReturnRow_Travel()
    expect(result).toEqual({type:'ADD_DATEOFRETURN_ROW'})
})

test('Should add time of return row to travelRow',()=>{
    const result = addTimeOfReturnRow_Travel()
    expect(result).toEqual({type:'ADD_TIMEOFRETURN_ROW'})
})

test('Should add travel duration row to travelRow',()=>{
    const result = addTravelDurationRow_Travel()
    expect(result).toEqual({type:'ADD_TRAVELDURATION_ROW'})
})

test('Should add accompanied by row to travelRow',()=>{
    const result = addAccompaniedByRow_Travel()
    expect(result).toEqual({type:'ADD_ACCOMPANIEDBY_ROW'})
})

test('Should add with whom to meet row to travelRow',()=>{
    const result = addWithWhomToMeetRow_Travel()
    expect(result).toEqual({type:'ADD_WITHWHOMTOMEET_ROW'})
})

test('Should add accomodation address row to travelRow',()=>{
    const result = addAccomodationAdressRow_Travel()
    expect(result).toEqual({type:'ADD_ACCOMODATIONADRESS_ROW'})
})

test('Should add length of stay row to travelRow',()=>{
    const result = addLengthOfStayRow_Travel()
    expect(result).toEqual({type:'ADD_LENGTHOFSTAY_ROW'})
})

test('Should add accomodation fee row to travelRow',()=>{
    const result = addAccomodationFeeRow_Travel()
    expect(result).toEqual({type:'ADD_ACCOMODATIONFEE_ROW'})
})

test('Should add means of transport row to travelRow',()=>{
    const result = addMeansOfTransportRow_Travel()
    expect(result).toEqual({type:'ADD_MEANSOFTRANSPORT_ROW'})
})

test('Should add advance row to travelRow',()=>{
    const result = addAdvanceRow_Travel()
    expect(result).toEqual({type:'ADD_ADVANCE_ROW'})
})