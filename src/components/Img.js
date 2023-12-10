import React from 'react'

function Img(props) {
  return (
    <div>
       <div>
            <svg width='50' height='50' xmlns="http://www.w3.org/2000/svg">
  <g fill='grey' fillOpacity={1}  stroke="grey" strokeWidth=".1">
    <circle cx="26" cy="26" r="13" />
    <text x="26" y="26" fontSize="20" fill="white" textAnchor="middle"  dy=".3em">{props.logo}</text>
    <circle cx="36" cy="38" fill={props.color} r="5" />
  </g>
</svg>
            </div>
    </div>
  )
}

export default Img