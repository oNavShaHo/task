import React, { useState, useEffect } from 'react';
import '../styles/dropdown.css';
import display from '../assests/display.svg';
import up from '../assests/up (2).svg';
import down from '../assests/down (2).svg';
import { content } from '../utils/Process';

import Lower from './Lower';

const DropdownDisplay = (props) => {
  /* eslint-disable */

  const[data,setData]=useState(props.data);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');
  const [con,setCon]=useState(content(grouping,data));
  const [head,SetHead]=useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
 

  useEffect(()=>{
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
    setCon(content(grouping,data,ordering));
    

    
  },[grouping, ordering])

 
  


  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
 <div>
<div className='dropdownm'>

    <div className="dropdown-container">
      <button id="display" onClick={toggleDropdown}>
        <img src={display} alt="dis" />
        <p>Display</p>
        {dropdownOpen ? <img className="ud" src={up} alt="up" /> : <img className="ud" src={down} alt="down" />}
      </button>

      {dropdownOpen && (
        <div className="dropdown">
          <div id="d1" className="drop">
            <label htmlFor="groupingDropdown">Grouping:</label>
            <select id="groupingDropdown" value={grouping} onChange={handleGroupingChange}>
              <option value="user">By User</option>
              <option value="priority">By Priority</option>
              <option value="status">By Status</option>
            </select>
          </div>

          <div id="d2" className="drop">
            <label htmlFor="orderingDropdown"> Ordering:</label>
            <select id="orderingDropdown" value={ordering} onChange={handleOrderingChange}>
              <option value="priority">By Priority</option>
              <option value="title">By Title</option>
            </select>
          </div>
        </div>
      )}

     
    </div>
  </div>

   <Lower data={data} content={con} grouping={grouping} ordering={ordering}/>

  </div>
  );
};

export default DropdownDisplay;
