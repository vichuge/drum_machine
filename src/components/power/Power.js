import React, { useState } from 'react';
import './Power.scss';

const Power = () => {
  const [on, setOn] = useState(true);
  return (
    <>
      <p id='power-label'>Power</p>
        <div className="form-switch">
          <input 
            className="form-check-input"
            type="checkbox"
            checked
            />
        </div>
    </>
  );
}

export default Power;
