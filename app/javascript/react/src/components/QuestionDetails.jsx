import *as React from 'react';
import { useState, useEffect } from 'react';
import *as ReactDom from 'react-dom';

// import React, { Component } from 'react'
// export class QuestionDetails extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { 
//       likeCount: this.props.question.like_count,
//       dislikeCount: this.props.question.dislike_count
//     }
//     this.updateLikeCounter = this.updateLikeCounter.bind(this)
//     this.updateDislikeCounter = this.updateDislikeCounter.bind(this)
//   }
//   updateLikeCounter() {
//     this.setState(function (state) {
//       return {
//         likeCount: state.likeCount + 1
//       }
//     })
//     this.updateDislikeCounter({cont_for: 'like'})
//   }
//   updateDislikeCounter() {
//     this.setState(function (state) {
//       return {
//         disLikeCount: state.dislikeCount + 1
//       }
//     })
//     this.updateDislikeCounter({cont_for: 'dislike'})
//   }

//   updateQuestionCounter = (data) => {
//     fetch('http://localhost:3006/api/v1/questions/${this.props.question.id}/update_counter', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       }) 
//   }

//   render() {
//     return (
//       <div>
//       {/* // if uniqe key is not provided like id then we user index but this is not a good way  */}
//       {/* // {questionList.map((question, index) =>  */}
//       <div className='card rounded-0 mt-3'>
//       {/* <div className='card rounded-0 mt-3' key={index.toString()}> */}
//         <div className='card-body'>
//           <h3 className='card-title'>{this.props.question.title}</h3>
//           <p className='lead'>
//             <span className='badge bg-primary'>{this.props.question.tag}</span>
//           </p>
//           <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCounter} style={{marginRight: 1 + 'em'}}>
//             Like
//             { this.likeCount > 0 ?
//             <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{likeCount}</span> : ''
//             }
//           </button>
//           <button type="button" className="btn btn-primary position-relative" onClick={this.updateDislikeCounter}>
//             Dilike
//             { disLikeCount > 0 ?
//             <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{disLikeCount}</span> : ''
//             }
//           </button>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }
// export default QuestionDetails


const QuestionDetails = (props) => {
  const [likeCount, setLikeCount] = useState(props.question.likes_count)
  const [disLikeCount, setdisLikeCount] = useState(props.question.dislikes_count)

  const updateQuestionCounter = (data) => {
    fetch(`http://localhost:3006/api/v1/questions/${props.question.id}/update_counter`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ count_for: data })
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <div>
      {/* // if uniqe key is not provided like id then we user index but this is not a good way  */}
      {/* // {questionList.map((question, index) =>  */}
      <div className='card rounded-0 mt-3'>
      {/* <div className='card rounded-0 mt-3' key={index.toString()}> */}
        <div className='card-body'>
          <h3 className='card-title'>{props.question.title}</h3>
          <p className='lead'>
            <span className='badge bg-primary'>{props.question.tag}</span>
          </p>
          <button type="button" className="btn btn-primary position-relative" onClick={() => updateQuestionCounter('like')} style={{marginRight: 1 + 'em'}}>
            Like
            { likeCount > 0 ?
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{likeCount}</span> : ''
            }
          </button>
          <button type="button" className="btn btn-primary position-relative" onClick={() => updateQuestionCounter('dislike')}>
            Dilike
            { disLikeCount > 0 ?
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{disLikeCount}</span> : ''
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetails
