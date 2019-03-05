import React from 'react'

const ProgressBar = ({progress = "50%", className=""}) => {
  return (
    <div className={`progressBar ${className}`}>
      <div style={{width: progress + "%"}}></div>
    </div>
  )
}

export default ProgressBar

