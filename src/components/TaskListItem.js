import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

export const TaskListItem = ({id,name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td>{withWhomToMeet}</td>
                <td>{timeOfLeave}</td>
                <td>{timeOfReturn}</td>
                <td>{taskDuration}</td>
                <td>{meansOfTransport}</td>
                <td>{advance}</td>
                <td>{notes}</td>
                <td><Link to={`/edittask/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_1024 = ({id,name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td>{timeOfLeave}</td>
                <td>{timeOfReturn}</td>
                <td>{meansOfTransport}</td>
                <td>{advance}</td>
                <td><Link to={`/edittask/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_768 = ({id,name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td>{timeOfLeave}</td>
                <td><Link to={`/edittask/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_414 = ({id,name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td><Link to={`/edittask/${id}`}><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
    )
}





