import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Working - fetching your user details...</h3>
    }

    return (
        <div className='friend container'>
            <h2>{details.username}</h2>
            <p> {details.email}</p>
            <p> {details.password}</p>



        </div>
    )


}

export default User