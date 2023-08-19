import React from 'react'

const EmptyQuestionMessage = (props) => {
  return (
    <div className='mt-5'>
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>OOPS !</strong> No Question found with the tag: {props.tagname}, Please select another from the list.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}

export default EmptyQuestionMessage
