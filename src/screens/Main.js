import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import DropdownDisplay from '../components/DropdownDisplay';
import { fetchData } from '../data/data';


function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndInitialize = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if necessary
      }
    };

    fetchDataAndInitialize();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    /* eslint-disable */

    <div className="main">
      {data === null ? (
        <div className="center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="screen1">
          <DropdownDisplay data={data} />
        </div>
      )}
    </div>
  );
}

export default Main;
