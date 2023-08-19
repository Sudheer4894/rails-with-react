import React from 'react'

const ServerSideError = (props) => {
  return (
    <>
      <p className='lead fw-bold'>Please fix the error below</p>
      { props.errors.map((error, index) => {
        <p className='text-danger' key={index}>{error}</p>
      })}
    </>
  )
}

export default ServerSideError