import React from 'react';
import { Link } from 'react-router-dom';
import TravelList from '../components/TravelList'
import TravelFilterComponent from '../components/TravelFilter'

const TravelsPage = () => (
    <div id="travelspage">
        <h1 className="text-center ">TRAVELS PAGE</h1> 
        <Link to='/' className=""><i className="fas fa-home fa-2x"></i>_Home Page</Link>   
        
        <TravelFilterComponent/>

        <TravelList />
    </div>
)

export default TravelsPage