import getVisibleTasks from '../../selectors/taskSelector';
import {taskData} from '../fixtures/tasks'
import moment from 'moment';


//  SEARCH TEXT tests -> name,project,taskLocation,notes
test('should filter name by text value',()=>{
    const taskFilters = {
        searchText:'walter',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined,
    }

    const result = getVisibleTasks(taskData, taskFilters)
    expect(result).toEqual([taskData[1]])

})

test('should filter project by text value',()=>{
    const taskFilters = {
        searchText:'insur',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTasks(taskData, taskFilters)
    expect(result).toEqual([taskData[0]])

})

test('should filter taskLocation by text value',()=>{
    const taskFilters = {
        searchText:'media',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTasks(taskData, taskFilters)
    expect(result).toEqual([taskData[2]])

})

test('should filter notes by text value',()=>{
    const taskFilters = {
        searchText:'keys',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }

    const result = getVisibleTasks(taskData, taskFilters)
    expect(result).toEqual([taskData[1]])

})

// STARTDATE TESTS
test('should filter tasks by startDate',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:moment(1613347200000),//15.02.2021
        endDate:undefined
    }

    const result = getVisibleTasks(taskData, taskFilters)
    expect(result).toEqual([taskData[2]])

})



// SORTBY TESTS
//--------------------date
test('should sort by date decreasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'date',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[2],taskData[1],taskData[0]])
})

test('should sort by date increasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'date',
        orderBy:'inc',
        startDate:undefined,//15.02.2021
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[0],taskData[1],taskData[2]])
})

//--------------------name
test('should sort by name decreasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'name',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[1],taskData[2],taskData[0]])
})

test('should sort by name increasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'name',
        orderBy:'inc',
        startDate:undefined,//15.02.2021
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[0],taskData[2],taskData[1]])})



//--------------------project
test('should sort by project decreasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'project',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[1],taskData[0],taskData[2]])
})

test('should sort by project increasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'project',
        orderBy:'inc',
        startDate:undefined,//15.02.2021
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[2],taskData[0],taskData[1]])})


//--------------------advance
test('should sort by advance decreasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'advance',
        orderBy:'dec',
        startDate:undefined,
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[2],taskData[0],taskData[1]])
})

test('should sort by advance increasing order',()=>{
    const taskFilters = {
        searchText:'',
        sortBy:'advance',
        orderBy:'inc',
        startDate:undefined,//15.02.2021
        endDate:undefined
    }
    
    const result = getVisibleTasks(taskData,taskFilters)
    expect(result).toEqual([taskData[1],taskData[0],taskData[2]])})
    