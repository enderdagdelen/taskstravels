import React from 'react';
import TravelFrom from '../components/TravelForm';
import { connect } from 'react-redux';
import { addTravel } from '../actions/travel';

const AddBusinessTravel = (props) => (
    <div>
        Add Business Travel
        <TravelFrom 
            onSubmit = {(bussinessTravel)=>{
                props.dispatch(addTravel(bussinessTravel))
                console.log(bussinessTravel)
                setTimeout(()=>{props.history.push('/travelspage')},750)
            }}
        />
    </div>
)

//experimental

export default connect()(AddBusinessTravel);