import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import Card from './shared/card';
import Button from '../components/shared/button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState();

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
  /* second argument in useEffect is optional. If you leave it empty, it will simply run when the component loads. If you place the argument, it will run when whatever is in the array changes. */
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null);
    }
    setText(e.target.value)
  }
  {/** the rating in RatingSelect is a prop of select which is a function. This is coming from RatingSelect Component */ }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.id, newFeedback)
      } else {
        addFeedback(newFeedback)
        setText('')
      }
    }

  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}>

          </input>
          <Button type="submit" version='primary' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>

    </Card>
  )
}

export default FeedbackForm