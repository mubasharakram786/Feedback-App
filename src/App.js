import React,{useState} from 'react';
import FeedbackList from './Component/FeedbackList'
import Header from './Component/Header'
import data from './data/data'
function App() {
  const [feedback,setFeedback]=useState(data);

  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackList feedback={feedback}/>
    </div>
    </>
  )
}

export default App