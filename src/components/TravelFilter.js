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
import { TravelListItem1024 } from './TravelListItem';

const TravelFilterComponent = (props) => (


        <div id="FilterComponent">
        
        <div className="row" id="filterFrame">
        <h2 className="mb-3">Travel Filters<span className="secret_name"> TravelFilterComponent</span></h2>
            <div className="col-3">
                <label htmlFor="searchText">Text</label>
                <input className="form-control" type="text" id="searchText" autoComplete="off" size="30"
                value={props.travelFilters.searchText}  
                onChange={
                    (e)=>{props.dispatch(setTravelSearchText(e.target.value))}
                }/>
            </div>
            <div className="col-3">
                <label htmlFor="sortBy">SortBy</label>
                <select className="form-select" value={props.travelFilters.sortBy} 
                onChange={(e)=>{
                    if(e.target.value === "advance"){
                        props.dispatch(setTravelSortByAdvance())
                    }else if(e.target.value === "name"){
                        props.dispatch(setTravelSortByName())
                    }else if(e.target.value === "project"){
                        props.dispatch(setTravelSortByProject())
                    }else if(e.target.value === "destination"){
                        props.dispatch(setTravelSortByDestination())
                    }else if(e.target.value === "lengthofstay"){
                        props.dispatch(setTravelSortByLengthOfStay())
                    }else{
                        props.dispatch(setTravelSortByDate())
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
            <div className="col-2">
                <label htmlFor="orderBy">Order By</label>
                <select className="form-select" id="orderBy" 
                value={props.travelFilters.orderBy}
                onChange={(e)=>{
                    if(e.target.value === "dec"){
                        props.dispatch(setTravelOrderByDec())
                    }else if(e.target.value === "inc"){
                        props.dispatch(setTravelOrderByInc())
                    }
                }}
                >
                    <optgroup>
                        <option value="dec">Decreasing</option>
                        <option value="inc">Increasing</option>
                    </optgroup>
                </select>
            </div>
            <div className="col-2">
                <label>From:</label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="col-2">
                <label>To:</label>
                <input className="form-control" type="text"></input>
            </div>

        </div>
    </div>
    
    
)

const mapStateToProsp = (state) => {
    return{
        travelFilters:state.travelFilters
    }
}

export default connect(mapStateToProsp)(TravelFilterComponent)