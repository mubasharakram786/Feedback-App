import React from 'react';
import './Connection.css'

export const Connection = (props) => {
    return (
        <div className='connection-box'>
            <div className='cover-photo'>
                <img src={props.coverPhoto} alt="Cover Photo" />
                <div className="profile-pic">
                    <img src={props.photo} alt="Cover Photo" />
                </div>
            </div>

            <h2>{props.name}</h2>
            <p>{props.designation}</p>
            <input onChange={props.change} value={props.name} />
            <div className='text-center'>
                <button className='cancel-btn' onClick={props.del}>Cancel Request</button>
            </div>

        </div>
    )
}
export default Connection;
