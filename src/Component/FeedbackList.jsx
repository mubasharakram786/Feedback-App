import { useContext } from 'react'
import FeedbackContext from '../context/FeedbakContext'
import FeedbackItems from './FeedbackItems'

function FeedbackList() {
    const{feedback}=useContext(FeedbackContext)
    if(!feedback || feedback.length===0){ 
        return <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map(item=>{
      return  <FeedbackItems key={item.id} item={item} />
    })}
    </div>
    
  )
}

export default FeedbackList