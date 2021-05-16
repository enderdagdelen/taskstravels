//REDUX
import {createStore, combineReducers} from 'redux'

//REDUCERS
import taskReducer from '../reducers/taskReducer'
import travelReducer from '../reducers/travelReducer'
import taskFilterReducer from '../reducers/taskFilterReducer'
import travelFilterReducer from '../reducers/travelFilterReducer'
import taskRowReducer from '../reducers/taskRowReducer'
import travelRowReducer from '../reducers/travelRowReducer'

export default () => {

    
const store = createStore(combineReducers(
    {
        tasks:taskReducer,
        travels:travelReducer,
        taskFilters:taskFilterReducer,
        travelFilters:travelFilterReducer,
        taskRows:taskRowReducer,
        travelRows:travelRowReducer
    },
),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    return store
}