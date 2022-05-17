import React from 'react'
import FeedbackItems from './FeedbackItems'

function FeedbackList({feedback,deleteFeedback}) {

    if(!feedback || feedback.length===0){
        return <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map(item=>{
      return  <FeedbackItems key={item.id} item={item} handleDelete={deleteFeedback}/>
    })}
    </div>
    
  )
}

export default FeedbackList