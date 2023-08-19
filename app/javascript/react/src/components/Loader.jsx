import React from 'react'

const Loader = (props) => {
  return (
    <div>
      { !props.isShowLoader ? 
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> : ''
      } 
    </div>
  )
}

export default Loader
