import React from 'react';
import '../power/Power.scss';

const Bank = () => {
  return (
    <>
      <p id='power-label'>Bank</p>
        <div className="form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        </div>
    </>
  );
}

export default Bank;
