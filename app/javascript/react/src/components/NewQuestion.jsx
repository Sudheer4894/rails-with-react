import React, { useState } from 'react'
import ServerSideError from './ServerSideError'

const NewQuestion = () => {
  const questionTags = [
    { label: "Ruby", value: 'Ruby' },
    { label: "Rails", value: 'Rails' },
    { label: "React", value: 'React' },
    { label: "Bootstrap", value: 'Bootstrap' },
    { label: "JavaScript", value: 'JavaScript' },
    { label: "DataStructure", value: 'DataStructure' }
  ]

  // const [title, setTitle] = useState('')
  // const [tag, setTag] = useState(questionTags[0].value)

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value)
  // }

  // const handleTagChange = (event) => {
  //   setTag(event.target.value)
  // }

 
  const [isServerSideError, setIsServerSideError] = useState(false)
  const [serverError, setServerError] = useState([])

  const [formField, setFormField] = useState({
    title: '',
    tag: questionTags[0].value
  })

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    console.log(formField);
    createQuestion(formField)
  }

  const handleFormField = (event) => {
    setFormField({ ...formField, [event.target.name]: event.target.value})
  }

  const createQuestion = (data) => [
    fetch(`api/v1/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((responce) => responce.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.log('Error:',error);
      if(data['status'] === "failure") {
        setIsServerSideError(true)
        setServerError(data['data'])
      } else {
        setIsServerSideError(false)
        setServerError([])
      }
    })
  ]

  return (
    <div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Wriete your Question and help the Developer grow!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleQuestionSubmit}>
              <div className="modal-body">

                { isServerSideError && <ServerSideError errors={serverError}/>}

                <div className='form-group'>
                  <label className='form-label mt-3 mb-3'>Title</label>
                  <input type='text' id='title' className='form-control form-control-lg rounded-0' value={formField.title} onChange={event => handleFormField(event)} name="title" />
                </div>

                <div className='form-group'>
                  <label className='form-label mt-3 mb-3'>Select the Question Tag</label>
                  <select className='form-select form-control-lg rounded-0' name={formField.tag} onChange={ event =>  handleFormField(event) } value={formField.tag} >
                    {questionTags.map(tag => (
                      <option key={tag.value} value={tag.value}>{tag.label}</option>
                    ))}
                  </select>
                </div>     

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit Question</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewQuestion
