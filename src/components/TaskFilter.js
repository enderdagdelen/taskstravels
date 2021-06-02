import React from "react";
import {connect} from 'react-redux'
import {
    setTaskSearchText,
    setTaskSortByName,
    setTaskSortByProject,
    setTaskSortByDate,
    setTaskSortByAdvance,
    setTaskOrderByDec,
    setTaskOrderByInc} from '../actions/taskFilter'

const TaskFilterComponent = (props) => (

        <div id="taskFilter">
            <div className="row" id="filterFrame">
                <h2 className="mb-3">Task Filters<span className="secret_name"> TaskFilterComponent</span></h2>
                <div className="col-3">
                    
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText" 
                    autoComplete="off" size="30" value={props.taskFilters.searchText} onChange={(e)=>{
                        props.dispatch(setTaskSearchText(e.target.value))
                    }}/>  

                </div>

                <div className="col-3">
                    
                    <label htmlFor="sortBy">SortBy</label>
                    <select className="form-select" value={props.taskFilters.sortBy} type="text" onChange={(e)=>{

                        if(e.target.value==='date'){
                            props.dispatch(setTaskSortByDate())
                        }else if(e.target.value==='name'){
                            props.dispatch(setTaskSortByName())
                        }else if(e.target.value==='project'){
                            props.dispatch(setTaskSortByProject())
                        }else if(e.target.value==='advance'){
                            props.dispatch(setTaskSortByAdvance())
                        }else{
                            props.dispatch(setTaskSortByDate())

                        }
     
                    }}>
                        <optgroup>
                            <option value="date" >StartDate</option>
                            <option value="name">Name</option>
                            <option value="project">Project</option>
                            <option value="advance">Advance</option>
                        </optgroup>
                    </select>  

                </div>
                <div className="col-2">
                    
                    <label htmlFor="orderBy">OrderBy</label>
                    <select className="form-select" id="orderBy" value={props.taskFilters.orderBy} onChange={(e)=>{
                        if(e.target.value !=='dec'){
                            props.dispatch(setTaskOrderByInc())
                        }else{
                            props.dispatch(setTaskOrderByDec())
                        }
                    }}>
                        <optgroup>
                            <option value="dec">Decreasing</option>
                            <option value="inc">Increasing</option>
                        </optgroup>
                        
                    </select>  

                </div>

                <div className="col-2"> 
                    <label htmlFor="from">Date From</label>
                    <input className="form-control" type="text" id="from"/>  
                </div>

                <div className="col-2">    
                    <label htmlFor="to">To</label>
                    <input className="form-control" type="text" id="to"/>  
                </div>

            </div>
        
        </div>
        
)

const mapStateToProps = (state) => {

    return{
        taskFilters: state.taskFilters
    }
}

export default connect(mapStateToProps)(TaskFilterComponent)