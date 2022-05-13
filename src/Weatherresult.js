import React from 'react';
import './weather.css';

function Weatherresult({date, mintemp, maxtemp, condition, icon}) {
  return (
   <div className="result">
      <ul className="icerik">
        <li>{date}</li>
        <li><img src={icon} alt="" /></li>
        <li>{condition}</li>
        <li>{mintemp} C / {maxtemp} C </li>
      </ul>
    </div>
  )
}

export default Weatherresult