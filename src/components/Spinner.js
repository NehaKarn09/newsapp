import React from 'react'
import duck from './duck.gif'


export default function Spinner() {
 
    return (
      <div>
      <div className='text-center' >
        <img src={duck} alt="loading" height="70px" width="70px"/>
      </div>
      </div>
    )
  
}

