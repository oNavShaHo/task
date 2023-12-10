import React, { useState } from 'react'
import Img from './Img';
import canceled from '../assests/canceled.svg'
import done from '../assests/check.svg'
import inp from '../assests/In Progress.svg'
import todo from '../assests/todo.svg'
import high from '../assests/high.svg'
import mid from '../assests/mid.svg'
import low from '../assests/low.svg'
import dots from '../assests/3dot.svg'
import urgent from '../assests/urgent.svg'
import backlog from '../assests/backlog.svg'
import '../styles/card.css'

function Card(props) {
  /* eslint-disable */

    const data=props.data;
    // console.log(data,"datt");
  // console.log(props.content,"asdas");
  const c=props.content;

  //console.log(c,"con")
  let qq={
    "true":"green",
    "false":"white"
   }

   
     const  sq={"Backlog":backlog,"Todo":todo,"In progress":inp,"Done":done,"Canceled":canceled}; 

      // console.log(q);
   
  
   const  pq={"0":dots,"4":urgent,"3":high,"2":mid,"1":low};
      
   
 
   const uq= data.users.map(user => ([  user.name.substring(0,2),user.name,user.available ]))
   
  //  if(props.content[6]!=undefined)
  //  console.log(q,"assass",q.props.content[6])
  
  //  alert(c[7]);

       
   const [clickk,setClick]=useState(false);

   function fun()
   {
          setClick(!clickk)
   }

   if (c && c[3] !== undefined && c[6] !== undefined) 
  return (
    <div className='card'>
      
      <div className='row1'>
          <p>{c[3]}</p>
          {(props.grouping!='user')?(<Img  logo={c[1].substring(0,2)} color={qq[c[2]]}/>):(null)}
          
           
      </div>
      <div className='row2'>
        {(props.grouping!='status')?( <img src={sq[c[6]]} alt={c[6]}/>):(null)}
       
        
         <p onClick={()=>{fun()}}> {(props.content[4].length<60 )?(props.content[4]):((!clickk)?(props.content[4].substring(0,50)+"..."):(props.content[4]))}
         </p>
      </div>

      <div className='row3'>
        
        {(props.grouping!='priority')?(<img src={pq[c[7]]} alt="a"/>):(null)}
         <ul>
        {c[5].map((c)=>(
          <li className='tags'>{c}</li>
        ))}
        </ul>

      </div>


    </div>
  )
}

export default Card