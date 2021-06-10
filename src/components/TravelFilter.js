import { render } from 'enzyme/build';
import React from 'react'
import {connect} from 'react-redux';
import { setTaskOrderByDec, setTaskOrderByInc } from '../actions/taskFilter';
import {setTravelSearchText,
    setTravelSortByName,
    setTravelSortByProject,
    setTravelSortByDestination,
    setTravelSortByDate,
    setTravelSortByAdvance,
    setTravelSortByLengthOfStay,
    setTravelStartDate,
    setTravelEndDate,
    setTravelOrderByDec,
    setTravelOrderByInc
} from '../actions/travelFilter'
import {DateRangePicker} from 'react-dates'


/*
 Normal bir component olan TaskFilterComponent'i, DateRangePicker kullanabilmek adına class component'e çevirdirdik.
 Çünkü calenderFocused state'ini ihtiyacımız var. Bu değişikliği yaptıktan sonra ise artık bir class olduğu için this 
 keyword'ünü props'lardan önce kullanmamız gerekiyor. Bu yüzden de gerekli yerlere this ekliyoruz.
*/
class TravelFilterComponent extends React.Component {

    state={
        calenderFocused : null
    } 

    onDatesChange =({startDate,endDate})=>{
        this.props.dispatch(setTravelStartDate(startDate))
        this.props.dispatch(setTravelEndDate(endDate))
    }

    onFocusChange = (calenderFocused) => {
        this.setState(()=>{
            return{
                calenderFocused:calenderFocused
            }
        })
    }
    
    render(){
        return(
            <div id="FilterComponent">
        
            <div className="row" id="filterFrame">
            <h2 className="mb-3">Travel Filters<span className="secret_name"> TravelFilterComponent</span></h2>
                <div className="col-sm-3">
                    <label htmlFor="searchText">Text</label>
                    <input className="form-control" type="text" id="searchText" autoComplete="off" size="30"
                    value={this.props.travelFilters.searchText}  
                    onChange={
                        (e)=>{this.props.dispatch(setTravelSearchText(e.target.value))}
                    }/>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="sortBy">SortBy</label>
                    <select className="form-select" value={this.props.travelFilters.sortBy} 
                    onChange={(e)=>{
                        if(e.target.value === "advance"){
                            this.props.dispatch(setTravelSortByAdvance())
                        }else if(e.target.value === "name"){
                            this.props.dispatch(setTravelSortByName())
                        }else if(e.target.value === "project"){
                            this.props.dispatch(setTravelSortByProject())
                        }else if(e.target.value === "destination"){
                            this.props.dispatch(setTravelSortByDestination())
                        }else if(e.target.value === "lengthofstay"){
                            this.props.dispatch(setTravelSortByLengthOfStay())
                        }else{
                            this.props.dispatch(setTravelSortByDate())
                        }
                    }}
                    >
                        <optgroup>
                            <option value="date">Date--departure</option>
                            <option value="name">Name</option>
                            <option value="project">Project</option>
                            <option value="destination">Destination</option>
                            <option value="lengthofstay">LengthOfStay</option>
                            <option value="advance">Advance</option>
                        </optgroup>
                    </select>
                </div>
                <div className="col-sm-2">
                    <label htmlFor="orderBy">Order By</label>
                    <select className="form-select" id="orderBy" 
                    value={this.props.travelFilters.orderBy}
                    onChange={(e)=>{
                        if(e.target.value === "dec"){
                            this.props.dispatch(setTravelOrderByDec())
                        }else if(e.target.value === "inc"){
                            this.props.dispatch(setTravelOrderByInc())
                        }
                    }}
                    >
                        <optgroup>
                            <option value="dec">Decreasing</option>
                            <option value="inc">Increasing</option>
                        </optgroup>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>Date Between</label><br/>
                    <DateRangePicker 
                        startDate={this.props.travelFilters.startDate}
                        startDateId="5"
                        endDate={this.props.travelFilters.endDate}
                        endDateId="6"
                        onDatesChange = {this.onDatesChange}
                        focusedInput = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>false}
                        showClearDates={true}
                    />
    
                </div>
    
    
            </div>
        </div>
        )
    }

    
    
    
            }

const mapStateToProsp = (state) => {
    return{
        travelFilters:state.travelFilters
    }
}

export default connect(mapStateToProsp)(TravelFilterComponent)