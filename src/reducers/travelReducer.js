
const travelReducer = (state=[],action) => {
    switch (action.type) {
        case 'ADD_TRAVEL':
            return[
                ...state,
                action.travel
            ]
        
        case 'REMOVE_TRAVEL':
            return state.filter(travel => travel.id !==action.id)
            
        case 'EDIT_TRAVEL':
            return state.map((travel)=>{
                if(travel.id === action.id){
                    return{
                        ...travel,
                        ...action.updates
                    }
                }else{
                    return travel
                }
            })

        default:
            return state;
    }
}

export default travelReducer