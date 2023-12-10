import React from 'react'
import '../styles/header.css'

import backlog from '../assests/backlog.svg'
import Hcard from './Hcard'
import canceled from '../assests/canceled.svg'
import done from '../assests/check.svg'
import inp from '../assests/In Progress.svg'
import todo from '../assests/todo.svg'
import high from '../assests/high.svg'
import mid from '../assests/mid.svg'
import low from '../assests/low.svg'
import dots from '../assests/3dot.svg'
import urgent from '../assests/urgent.svg'
import User from './User'

function Header(props) {
  /* eslint-disable */

     const data=props.data;
    
     let q=[];
     if(props.grouping=='status')
     {
         q=[[backlog,"Backlog"],[todo,"Todo"],[inp,"InProgress"],[done,"Done"],[canceled,"Canceled"]]; 

      //   console.log(q);
     }
     else if(props.grouping=='priority')
     {
          q=[[dots,"No priority"],[urgent,"Urgent"],[high,"High"],[mid,"Medium"],[low,"Low"]];
        
     }
     else 
     {
      q= data.users.map(user => ([  user.name.substring(0,2),user.name,user.available ]))
     }


    
    if(props.grouping!='user')
  return (
    <div className='header'>
      
      {q.map((item)=>(

        <Hcard img={item[0]} heading={item[1]}/>
      )
                
)}

    </div>
  )
  else 
  return (
      <div className='header'>

{q.map((item)=>(
        <div className='box'>
        <User content={props.content} logo={item[0]} heading={item[1]} available={item[2]}/>
         
        </div>
      )
                
)}

      </div>
    )
}

export default Header