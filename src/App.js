import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import {v4 as uuidv4} from 'uuid'
// import PropTypes from 'prop-types';
import FeedbackList from './Component/FeedbackList'
import Header from './Component/Header'
import data from './data/data'
import FeedbackStats from './Component/FeedbackStats'
import FeedbackForm from './Component/FeedbackForm'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Component/Shared/AboutIconLink'
function App() {
  const [feedback, setFeedback] = useState(data);
  const handleFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  const handleNewFeedback = (newFeedback) => {
    // newFeedback.id= uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm addFeedback={handleNewFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} deleteFeedback={handleFeedback} />

            </>
          } />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
          <AboutIconLink/>
      </div>
    </Router>
  )
}


export default App