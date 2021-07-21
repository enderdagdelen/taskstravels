import React from 'react';
import {connect} from 'react-redux'
import TravelForm from './TravelForm'
import { editTravel,removeTravel } from '../actions/travel';


const EditTravel = (props) => {
    console.log(props);
    return(
        <div>
            edittravel
            <br></br>
            id is = {props.match.params.id}

            <TravelForm 

                bussinessTravel = {props.travel}
                onSubmit = {(travel) => {
                    props.dispatch(editTravel(props.match.params.id,travel))
                    setTimeout(()=>{props.history.push('/travelspage')},750)
                }}
            />

            <div className="container" id="eraseframe">

                <form className="form-group mt-3 my-5">
                <label htmlFor="nametoerase" >To Remove The Record Type The Name Correctly</label>
                <div className="row">
                    <div className="col">
                        <input className="form-control" id="nametoerase" defaultValue="This Field is Case Sensitive"/>
                    </div>
                    <div className="col">
                        <button className="btn col-12 btn-danger btn-lg my-1" id="erasebutton" type="button"
                        onClick={
                            
                            ()=>{

                                
                                if(document.getElementById('nametoerase').value === props.travel.name){
                                    props.dispatch(removeTravel(props.match.params.id))
                                    document.getElementById('nametoerase').value = "Record Removed - Redirecting To Travels Page"

                                    setTimeout(()=>{props.history.push('/travelspage')},2000)
                                }else{
                                    document.getElementById('nametoerase').value = "Check The Name Please"
                                }

                            
                            
                        }}
                            >Remove The Record</button>
                    </div>
                
                </div>
                
                

                </form>
                
            </div>
        </div>
    )
}


const mapStateToProps = (state,props) => {
    return{

        travel:state.travels.find((travel)=>travel.id === props.match.params.id)

    }
}


export default connect(mapStateToProps)(EditTravel)