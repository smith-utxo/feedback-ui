// App.js is the 'Root Component' or highest level parent component
import React, { useState } from 'react';

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
  
  return (
    <FeedbackProvider>
      <Header pizza="hello world!"/>
      <div className='container'>
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
        <Card>Hello there!</Card>
      </div>
    </FeedbackProvider>
  )
}

export default App; 