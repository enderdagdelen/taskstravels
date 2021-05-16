import travelReducer from '../../reducers/travelReducer'
import {travelData} from '../fixtures/travel'

test('should return an empty array',()=>{
    const result = travelReducer(undefined, {
        type:'@@INIT'
    })

    expect(result).toEqual([])
})


test('should remove an item by id', ()=>{
    const action = {
        type:'REMOVE_TRAVEL',
        id:travelData[0].id
    }

    const result = travelReducer(travelData, action)

    expect(result).toEqual([travelData[1], travelData[2]])
})


test('should edit an item by id', ()=>{
    const action = {
        type:'EDIT_TRAVEL',
        id:travelData[0].id,
        updates:{
            name:'George Foreman'
        }
    }

    const result = travelReducer(travelData, action)

    expect(result[0].name).toEqual('George Foreman')
})


test('should add an item', ()=>{
    const action = {
        type:'ADD_TRAVEL',
        travel:{name:'Mike Tyson'}
    }

    const result = travelReducer(travelData, action)

    expect(result).toEqual([...travelData,action.travel])
})