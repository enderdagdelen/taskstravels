import moment from "moment"


const travelFilterReducerDummyData ={
    searchText:'',
    sortBy:'date',//name,project,traveldestination,startDate,advance,lengthOfStay
    orderBy:'dec',
    startDate:moment().startOf('year'),
    endDate:moment().endOf('year'),
}

const travelFilterReducer = (state=travelFilterReducerDummyData,action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return{
                ...state,
                searchText:action.txt
            }
        
        case 'SET_SORTBY_NAME':
            return{
                ...state,
                sortBy:'name'
            }
                    
        case 'SET_SORTBY_PROJECT':  
            return{
                ...state,
                sortBy:'project'
            }      
        case 'SET_SORTBY_DESTINATION': 
            return{
                ...state,
                sortBy:'destination'
            }       
        case 'SET_SORTBY_STARTDATE':   
            return{
                ...state,
                sortBy:'date'
            }     
        case 'SET_SORTBY_ADVANCE': 
            return{
                ...state,
                sortBy:'advance'
            }       
        case 'SET_SORTBY_LENGTHOFSTAY':
            return{
                ...state,
                sortBy:'lengthofstay'
            }
        
        case 'SET_STARTDATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_ENDDATE':
            return{
                ...state,
                endDate:action.endDate
            }
    
        case 'ORDER_BY_DEC':
            return {
                ...state,
                orderBy:'dec'
            }
        
        case 'ORDER_BY_INC':
            return{
                ...state,
                orderBy:'inc'
            }
    
        default:
            return state
    }
}

export default travelFilterReducer