import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is Feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is Feedback item 2',
      rating: 9
    }
  ]);
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {}, 
    edit: false
  });

    // set item to be updated 
  const editFeedback = (item) => {
    setfeedbackEdit({
      item, 
      edit: true
    })
  }
  // takes in an id so we know which feedback we're updating along with the updated feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem} : item))
    // Take the current feedback array and use the map method, pass in each feedback as 'item', for each one we run a condition if the item id is equal to the id thats being passed in that we want to update. If so, then we want to spread across the current item. Else, return the curren titem. 
    )
  }
  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
    newFeedback.id = uuidv4()
    /*Recall that State is immutable so we have to make a copy of it by placing feedback in an array and utilizing the spread operator. Placing newFeedback at the beginning because we want newFeedback + the old feedback (..feedback) to give us all the feedback now */
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {

      setFeedback(feedback.filter((item) => item.id !== id))
    }

  }
  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit, 
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext; 