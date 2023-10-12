import *as React from 'react';
import { useState, useEffect } from 'react';
import *as ReactDom from 'react-dom';
import QuestionDetails from './QuestionDetails';
import EmptyQuestionMessage from './EmptyQuestionMessage';
import Loader from './Loader';
import NewQuestion from './NewQuestion';

const QuestionList = () => {

  const questionTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "JavaScript", value: 5 },
  ]

  const [questionsList, setQuestionsList] = useState([])
  const [selectedOption, setSelectedOption] = useState(questionTags[0].value)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [isShowLoader, setIsShowLoader] = useState(true)

  const questionUrl = `/api/v1/questions`
  // const questionList = fetch

  // Fetch data through fetch() method
  const fetchQuestionList = () => {
    setIsShowLoader(false)
    fetch(questionUrl)
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data)
      })
  }
  
  useEffect(() => {
    fetchQuestionList()
  }, [])

  const updateSelectedItem = (event) => {
    setIsShowLoader(false)
    setIsShowAlert(false)
    setQuestionsList([])
    setSelectedOption(event.target.value)
    fetch(questionUrl + `?tags=${questionTags[event.target.value].label}`)
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setQuestionsList(data)
        if(data.length == 0) {
          setIsShowAlert(true)
          setIsShowLoader(true)
        }
      })
  }

  // useEffect(() => {
  //   // Fetch question data when the component mounts
  //   fetch(questionUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setQuestionsList(data); // Update state with fetched data
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // Empty dependency array means this effect runs only once when the component mounts

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        <p className='lead fw-bold'>Fileter Question By Tags</p>
        <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Contribute Your Question
        </button>
        <select 
          className='form-select form-select-lg' 
          onChange={event => updateSelectedItem(event)}
          value={selectedOption}>
          {questionTags.map(tag => (
            <option key={tag.value} value={tag.value}>{tag.label}</option>
          ))}
        </select>
        { questionsList.length > 0 ?
          questionsList.map((question, index) => 
            <QuestionDetails question = {question} key={question.id} index = {index}/>
          ) : <Loader isShowLoader = {isShowLoader} />
        }
        { isShowAlert && <EmptyQuestionMessage tagname = {questionTags[selectedOption].label} /> }
      </div>
      <NewQuestion />
    </div>
  )
}

export default QuestionList