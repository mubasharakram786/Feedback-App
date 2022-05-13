import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackList from './Component/FeedbackList'
import Header from './Component/Header'
import data from './data/data'
import FeedbackStats from './Component/FeedbackStats'
import FeedbackForm from './Component/FeedbackForm'
function App() {
  const [feedback, setFeedback] = useState(data);
  const handleFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={handleFeedback} />
      </div>
    </>
  )
}


export default App