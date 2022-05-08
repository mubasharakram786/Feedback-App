import React from 'react'
import FeedbackItems from './FeedbackItems'

function FeedbackList({feedback}) {
  return (
    <div>{feedback.map(item=>{
      return  <FeedbackItems key={item.id} item={item}/>
    })}</div>
    
  )
}

export default FeedbackList