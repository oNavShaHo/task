import React from 'react'
import '../styles/hcard.css'
import plus from '../assests/plus.svg'
import dots from '../assests/3dot.svg'



function Hcard(props) {
  // console.log(props.img);
  return (
    <div className='hcard'>
      <div className='hc'>
           <img src={props.img} alt=''/>
           <p>{props.heading}</p>
      </div>
      <div>
           <img src={plus} alt='plus'/> 
           <img src={dots} alt='dots'/>   
      </div>
    </div>
  )
}

export default Hcard