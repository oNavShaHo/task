import React from 'react';
import '../styles/lower.css';
import Header from './Header';
import Card from './Card';

function Lower(props) {
 // console.log(props.content);
  
 
 var ac;
  return (
    /* eslint-disable */

    <div className='lower'>
      

      <Header  data={props.data} content={props.content} grouping={props.grouping}/>
      <div className='header'>
      {props.content.map((div1,good) => {
        // console.log(div1,"before");
        if(props.ordering!=='title')
         ac= div1.sort((a,b)=>{
             
          return b[7]-a[7];
        })
        else 
        { 
           
            ac= div1.sort((a,b)=>{
            if(a[4]!==undefined && b[4]!==undefined)
            return a[4].localeCompare(b[4],'en',{sensitivity:'base'});
          });
        }
        return (
         <div> {ac.map((c,index)=>(

            <div key={index}>{<Card data={props.data}   grouping={props.grouping} content={c}/>}</div>
          ))} 
          </div>
        )
        // console.log(div1,"after");

      })}
      </div>
    </div>
  );
}

export default Lower;
