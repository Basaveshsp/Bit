import React, { useState, useEffect } from 'react';
import './DynamicHeader.css'
const DynamicHeader = () => {

    const [header, setHeader] = useState('ANALYTICS');

    useEffect(() => {
      const interval = setInterval(() => {
        // Update the header
        setHeader('ANALYTICS');
      }, 3000); // 3seconds
      const interval1 = setInterval(() => {
        // Update the header
        setHeader('NFT');
      }, 6000);
      const interval3 = setInterval(() => {
        // Update the header
        setHeader('DEX');
      }, 9000);
      const interval4 = setInterval(() => {
        // Update the header
        setHeader('MINT');
      }, 12000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []);
    return ( 
        <div className='coloredHeader'>
            <h1>{header}</h1>
        </div>
     );
}
 
export default DynamicHeader;