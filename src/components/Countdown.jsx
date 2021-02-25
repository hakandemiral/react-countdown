import React, { useEffect } from 'react';

const Countdown = ({ hours, minutes, seconds }) => {

  return (  
<div className="container">
<div className="clock">
  <div className="item">
    <div className="number">{hours}</div>
    <div className="text">
      Hour
      {hours > 1 && 's'}
    </div>
  </div>
  <div className="item">
    <div className="number">{minutes}</div>
    <div className="text">
      Minute
      {minutes > 1 && 's'}
    </div>
  </div>
  <div className="item">
    <div className="number">{seconds}</div>
    <div className="text">
      Second
      {seconds > 1 && 's'}
    </div>
  </div>
</div>
</div>
)
};

export default Countdown;
