import React from "react";
import {connect} from 'react-redux'
import {
    setTaskSearchText,
    setTaskSortByName,
    setTaskSortByProject,
    setTaskSortByDate,
    setTaskSortByAdvance,
    setTaskOrderByDec,
    setTaskOrderByInc,
    setTaskStartDate,
    setTaskEndDate} from '../actions/taskFilter'
import {DateRangePicker} from 'react-dates'; 

/*
 Normal bir component olan TaskFilterComponent'i, DateRangePicker kullanabilmek adına class component'e çevirdirdik.
 Çünkü calenderFocused state'ini ihtiyacımız var. Bu değişikliği yaptıktan sonra ise artık bir class olduğu için this 
 keyword'ünü props'lardan önce kullanmamız gerekiyor. Bu yüzden de gerekli yerlere this ekliyoruz.
*/

class TaskFilterComponent extends  React.Component {

    state={
        calenderFocused : null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setTaskStartDate(startDate))
        this.props.dispatch(setTaskEndDate(endDate))

    }   

    onFocusChange = (calenderFocused) => {
        this.setState(()=>{
            return{
                calenderFocused:calenderFocused
            }
        })
    }

    render () {
        return (
            <div id="FilterComponent">
            <div className="row" id="filterFrame">
                <h2 className="mb-3">Task Filters<span className="secret_name"> TaskFilterComponent</span></h2>
                <div className="col-sm-3">
                    
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText" 
                    autoComplete="off" size="30" value={this.props.taskFilters.searchText} onChange={(e)=>{
                        this.props.dispatch(setTaskSearchText(e.target.value))
                    }}/>  

                </div>

                <div className="col-sm-3">
                    
                    <label htmlFor="sortBy">SortBy</label>
                    <select className="form-select" value={this.props.taskFilters.sortBy} type="text" onChange={(e)=>{

                        if(e.target.value==='date'){
                            this.props.dispatch(setTaskSortByDate())
                        }else if(e.target.value==='name'){
                            this.props.dispatch(setTaskSortByName())
                        }else if(e.target.value==='project'){
                            this.props.dispatch(setTaskSortByProject())
                        }else if(e.target.value==='advance'){
                            this.props.dispatch(setTaskSortByAdvance())
                        }else{
                            this.props.dispatch(setTaskSortByDate())

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
                <div className="col-sm-2">
                    
                    <label htmlFor="orderBy">OrderBy</label>
                    <select className="form-select" id="orderBy" value={this.props.taskFilters.orderBy} onChange={(e)=>{
                        if(e.target.value !=='dec'){
                            this.props.dispatch(setTaskOrderByInc())
                        }else{
                            this.props.dispatch(setTaskOrderByDec())
                        }
                    }}>
                        <optgroup>
                            <option value="dec">Decreasing</option>
                            <option value="inc">Increasing</option>
                        </optgroup>
                        
                    </select>  

                </div>

                <div className="col-md-4"> 
                    <label htmlFor="from">Dates Between</label> <br>
                    </br>
                    <DateRangePicker
                        startDate={this.props.taskFilters.startDate} 
                        startDateId="1"
                        endDate={this.props.taskFilters.endDate} 
                        endDateId="2"
                        onDatesChange = {this.onDatesChange}
                        focusedInput = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange= {()=>false}
                        showClearDates={true}
                        
                    />  
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