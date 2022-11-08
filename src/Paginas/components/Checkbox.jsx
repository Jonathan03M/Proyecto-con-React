import React from 'react'

function Checkbox({label}) {
  return (
    <div className="checkbox-wrapper">
    
      <input type="checkbox"/>
      <span>{label}</span>
    
  </div>
  )
}

export default Checkbox