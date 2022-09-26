import FeedbackItem from './FeedbackItem'
import { useContext } from 'react';  
import React from 'react'
import FeedbackContext from '../context/FeedbackContext';

{/*Removed feedback as a prop we were passing and now assigned it to useContext*/} 
function FeedbackList() {
const {feedback} = useContext(FeedbackContext); 

  if(!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>FeedbackList
    {feedback.map((item) => (
      <FeedbackItem 
      key={item.id} 
      item={item} 
      />
  ))}
  </div>
  )
}

export default FeedbackList