import React from 'react';

const EditTask = (props) => {
    console.log(props);
    return (
        <div>
            Edit Tasks
            <br></br>
            id is {props.match.params.id}
        </div>
    )
}



export default EditTask