import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import moment from 'moment';
import getVisibleTravels from '../selectors/travelSelector'

import {TravelRows, TravelRows1500,TravelRows1024,TravelRows768,TravelRows414} from './TravelRows'
import {TravelListItem, TravelListItem1500, TravelListItem1024, TravelListItem768, TravelListItem414} from './TravelListItem'
import TaskForm from './TaskForm';

window.addEventListener('resize',()=>{
    history.go(0)
})

const rowAdjustment = ()=>{
    if (window.innerWidth <= 414) {
                                
        return <TravelRows414/>
        
    } else if(window.innerWidth <= 768){
        return <TravelRows768 />

            
    }else if(window.innerWidth <= 1024){
       
        return <TravelRows1024 />

    }else if(window.innerWidth <= 1500){
       
        return <TravelRows1500 />
        
    }else {
         return <TravelRows />
        
    }
}



const TravelList = (props) => {
    return(
        <div id="travellist_container" className="mb-5">
        <h1>Travel List Component</h1>
        The Number of Tasks: {props.travels.length}
            <table className="table">
                <thead>
                    {rowAdjustment()}
                </thead>
                <tbody>
                   
                    {props.travels.map((travel)=>{
                        if(window.innerWidth <= 414){
                            return <TravelListItem414 key={travel.id} {...travel} />
                        }else if(window.innerWidth <=768){
                            return <TravelListItem768 key={travel.id} {...travel} />
                        }else if(window.innerWidth <=1024){
                            return <TravelListItem1024 key={travel.id} {...travel} />
                        }else if(window.innerWidth <=1500){
                            return <TravelListItem1500 key={travel.id} {...travel} />
                        }else{
                            return <TravelListItem key={travel.id} {...travel} />
                        }
                    })}

                </tbody>
            </table>
        
        
        </div>
        
    )
}


const mapStateToProps = (state) => {
    return{
        travels:getVisibleTravels(state.travels,state.travelFilters)
    }
}

export default connect(mapStateToProps)(TravelList)

