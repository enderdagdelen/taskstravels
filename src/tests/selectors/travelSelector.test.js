import getVisibleTravels from '../../selectors/travelSelector';
import {travelData} from '../fixtures/travel'
import moment from 'moment'

//STARTTIME AND ENDTIME TESTS
//--------------------startTime
test('should filter by startDate',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:moment(1618012800000),
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2],travelData[1]])
})

//--------------------endTime
test('should filter by endDate',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:moment(1620604800000) //10.05.21
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[1],travelData[0]])
})

// SEARCHTEXT
//----------------name
test('should filter by #name searchText',()=>{
    const travelFilters={
        searchText:'jenny',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[1]])
})
//----------------project
test('should filter by #project searchText',()=>{
    const travelFilters={
        searchText:'Heaven Village',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0]])
})
//----------------travelDestination
test('should filter by #travelDestination searchText',()=>{
    const travelFilters={
        searchText:'istanbul',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[1]])
})
//----------------accomomodationAdress
test('should filter by #accomodation address searchText',()=>{
    const travelFilters={
        searchText:'ciudad',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2]])
})
//----------------notes
test('should filter by #notes searchText',()=>{
    const travelFilters={
        searchText:'farmers',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2]])
})


// SORTBY 
//-------------date inc
test('should filter date in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'date',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[1],travelData[2]])
})

//-------------date dec
test('should filter date in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2],travelData[1],travelData[0]])
})

//---------------project dec
test('should filter project in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'project',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[1],travelData[2],travelData[0]])
})
//---------------project dec

test('should filter project in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'project',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[2],travelData[1]])
})


//---------------name dec
test('should filter name in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'name',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[1],travelData[2]])
})
//---------------name inc
test('should filter name in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'name',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2],travelData[1],travelData[0]])
})




//---------------destination dec
test('should filter destination in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'destination',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[1],travelData[2]])
})
//---------------name inc
test('should filter destination in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'destination',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2],travelData[1],travelData[0]])
})




//---------------destination dec
test('should filter lenghtofstay in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'lengthofstay',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[1],travelData[2],travelData[0]])
})
//---------------name inc
test('should filter lenghtofstay in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'lengthofstay',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[2],travelData[1]])
})



//---------------advance dec
test('should filter advance in dec order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'advance',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[2],travelData[1],travelData[0]])
})
//---------------name inc
test('should filter advance in inc order',()=>{
    const travelFilters={
        searchText:'',
        sortBy:'advance',
        orderBy:'inc',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTravels(travelData,travelFilters)
    expect(result).toEqual([travelData[0],travelData[1],travelData[2]])
})