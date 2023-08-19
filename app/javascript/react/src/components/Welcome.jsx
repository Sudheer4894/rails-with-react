import *as React from 'react';
import *as ReactDom from 'react-dom/client';
import QuestionList from './QuestionList';

// import React, { Component } from 'react'
// // How to use class component
// export class Welcome extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <h1>Hello, Welcome to rails 7 project with react applition</h1>
//         <p className='lead'>This is dummy test</p>
//         <QuestionList />
//       </div>
//     )
//   }
// }

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello, Welcome to rails 7 project with react applition</h1>
      <p className='lead'>This is dummy test</p>
      <QuestionList />
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDom.render(<Welcome />, document.getElementById('welcome'))
// })

export default Welcome