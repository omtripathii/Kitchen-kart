import React, { useState } from 'react'

const UserF = ({ name , location , contact }) => {

  return (
    <div className='UserFun'>
        <h2>Name : {name}</h2>
        <h2>Locatoin :{location}</h2>
        <h3>Contact :{contact}</h3>
        </div>
  )
}

export default UserF