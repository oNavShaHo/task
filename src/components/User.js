import React from 'react'
import Img from './Img'
import plus from '../assests/plus.svg'
import dots from '../assests/3dot.svg'


function User(props) {

     let q={
      "true":"green",
      "false":"white"
     }
    // console.log(props.content,"qqq");

  return (
    <div>
    <div className='hcard'>
    <div className='hc'>
          <Img   color={q[props.available]} logo={props.logo}/>
         <p>{props.heading}</p>
    </div>
    <div>
         <img src={plus} alt='plus'/> 
         <img src={dots} alt='dots'/>   
    </div>
  </div>
     
    {/* <Card content={props.content}/> */}
  </div>
  )
}

export default User