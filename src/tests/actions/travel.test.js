import {travelData} from '../fixtures/travel';
import {addTravel,editTravel,removeTravel} from '../../actions/travel';

test('should remove travel',()=>{
    const result = removeTravel('123')
    expect(result).toEqual({
        type:'REMOVE_TRAVEL',
        id:'123'
    })
})

test('should edit travel',()=>{
    const result = editTravel('123',{name:'Jason Bourne'})
    expect(result).toEqual({
        type:'EDIT_TRAVEL',
        id:'123',
        updates:{name:'Jason Bourne'}
    })
})

test('should add travel', ()=>{
    const result = addTravel(travelData[0])
    expect(result).toEqual({
        type:'ADD_TRAVEL',
        travel:{
        ...travelData[0],
        id:expect.any(String)
        }
    })
})


