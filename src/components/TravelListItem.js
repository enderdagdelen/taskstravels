import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

export const TravelListItem = ({id,name,project,travelDestination,
    dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,
    travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,
    lengthOfStay,accomodationFee,meansOfTransport,advance,notes}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{project}</td>
            <td>{travelDestination}</td>
            <td>{moment(dateOfDeparture).format('Do MM YYYY')}</td>
            <td>{moment(departureTime).format('HH:mm')}</td>
            <td>{moment(dateOfReturn).format('Do MM YYYY')}</td>
            <td>{moment(timeOfReturn).format('HH:mm')}</td>
            <td>{travelDuration}</td>
            <td>{accompaniedBy}</td>
            <td>{withWhomToMeet}</td>
            <td>{accomodationAddress}</td>
            <td>{lengthOfStay}</td>
            <td>{accomodationFee}</td>
            <td>{meansOfTransport}</td>
            <td>{advance}</td>
            <td>{notes}</td>
            <td><Link to={`/edittravel/${id}`}><i className="fas fa-user-edit" ></i></Link></td>

        </tr>
    )
}

export const TravelListItem1500 = ({id,name,project,travelDestination,
    dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,
    travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,
    lengthOfStay,accomodationFee,meansOfTransport,advance,notes}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{project}</td>
            <td>{travelDestination}</td>
            <td>{moment(dateOfDeparture).format('Do MM YYYY')}</td>
            <td>{moment(departureTime).format('HH:mm')}</td>
            <td>{moment(dateOfReturn).format('Do MM YYYY')}</td>
            <td>{travelDuration}</td>
            <td>{withWhomToMeet}</td>
            <td>{meansOfTransport}</td>
            <td>{advance}</td>
            <td>{notes}</td>
            <td><Link to={`/edittravel/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
        </tr>
    )
}

export const TravelListItem1024 = ({id,name,project,travelDestination,
    dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,
    travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,
    lengthOfStay,accomodationFee,meansOfTransport,advance,notes}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{project}</td>
            <td>{travelDestination}</td>
            <td>{moment(dateOfDeparture).format('Do MM YYYY')}</td>
            <td>{moment(departureTime).format('HH:mm')}</td>
            <td>{withWhomToMeet}</td>
            <td>{meansOfTransport}</td>
            <td>{advance}</td>
            <td><Link to={`/edittravel/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
        </tr>
    )
}

export const TravelListItem768 = ({id,name,project,travelDestination,
    dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,
    travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,
    lengthOfStay,accomodationFee,meansOfTransport,advance,notes}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{project}</td>
            <td>{travelDestination}</td>
            <td>{moment(dateOfDeparture).format('Do MM YYYY')}</td>
            <td>{withWhomToMeet}</td>
            <td><Link to={`/edittravel/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
        </tr>
    )
}

export const TravelListItem414 = ({id,name,project,travelDestination,
    dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,
    travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,
    lengthOfStay,accomodationFee,meansOfTransport,advance,notes}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{project}</td>
            <td>{travelDestination}</td>
            <td>{dateOfDeparture}</td>
            <td><Link to={`/edittravel/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
        </tr>
    )
}