import React from 'react';
import { Link } from 'react-router-dom'


export const TaskListItem = ({name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
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
                <td><Link to="/"><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_1024 = ({name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
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
                <td><Link to="/"><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_768 = ({name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td>{timeOfLeave}</td>
                <td><Link to="/"><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
            
    )
}

export const TaskListItem_414 = ({name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration,meansOfTransport,advance,notes}) => {
    return(
            <tr>
                <td>{name}</td>
                <td>{project}</td>
                <td>{taskLocation}</td>
                <td>{date}</td>
                <td><Link to="/"><i className="fas fa-user-edit" ></i></Link></td>
            </tr>
    )
}





