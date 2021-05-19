import React from "react";
import {connect} from 'react-redux'


class TaskFilterComponent extends React.Component{
/* 
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            sortBy:'date',
            orderBy:'dec',
            startDate:'',
            endDate:''
        }
    }

    SortByOnChange(e){
        const sortData = e.target.value
        this.setState(()=>{
            return{
                sortBy:sortData
            }
        })
    }
  */
    render(){
        return(
        <div id="taskFilter">
            <div className="row" id="filterFrame">
            <h2 className="mb-3">Task Filters</h2>
                <div className="col-3">
                    
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText" autoComplete="off" size="30"/>  

                </div>

                <div className="col-3">
                    
                    <label htmlFor="sortBy">SortBy</label>
                    <select className="form-select" type="text" onChange={this.SortByOnChange}>
                        <optgroup>
                            <option value="date" >StartDate</option>
                            <option value="name">Name</option>
                            <option value="project">Project</option>
                            <option value="advance">Advance</option>
                        </optgroup>
                    </select>  

                </div>
                <div className="col-2">
                    
                    <label htmlFor="sortBy">SortBy</label>
                    <select className="form-select">
                        <optgroup>
                            <option value="dec">Decreasing</option>
                            <option value="inc">Increasing</option>
                        </optgroup>
                        
                    </select>  

                </div>

                <div className="col-2"> 
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText"/>  
                </div>

                <div className="col-2">    
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText"/>  
                </div>

            </div>
        
        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{
        taskFilters: state.taskFilters
    }
}

export default connect(mapStateToProps)(TaskFilterComponent)