import moment from 'moment'

const taskFilterReducerDummyData ={
    searchText:'',
    sortBy:'date',//name,project,traveldestination,startDate,advance,lengthOfStay
    orderBy:'dec',
    startDate:moment().startOf('year'),
    endDate:moment().endOf('year'),
}

const taskFilterReducer = (state=taskFilterReducerDummyData,action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT_':
            return{
                ...state,
                searchText:action.txt
            }
        
        case 'SET_SORTBY_NAME_':
            return{
                ...state,
                sortBy:'name'
            }
                    
        case 'SET_SORTBY_PROJECT_':  
            return{
                ...state,
                sortBy:'project'
            }      

        case 'SET_SORTBY_STARTDATE_':   
            return{
                ...state,
                sortBy:'date'
            }     
        case 'SET_SORTBY_ADVANCE_': 
            return{
                ...state,
                sortBy:'advance'
            }       
        
        case 'SET_STARTDATE_':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_ENDDATE_':
            return{
                ...state,
                endDate:action.endDate
            }
    
        case 'ORDER_BY_DEC_':
            return {
                ...state,
                orderBy:'dec'
            }
        
        case 'ORDER_BY_INC_':
            return{
                ...state,
                orderBy:'inc'
            }
    
        default:
            return state
    }
}

export default taskFilterReducer