import React from 'react';

const EvaSelect = ({children, onChange}) => {
  return(
    <div className="eva-3-select -lg">
      <div className="select-container">
        <select className="select-tag" onChange={onChange}>
          {children}
        </select>
      </div>
    </div>)
}
export default EvaSelect;