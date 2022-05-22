import { useContext } from 'react'
import FeedbackContext from '../context/FeedbakContext'
import FeedbackItems from './FeedbackItems'
import Spinner from './Shared/Spinner'

function FeedbackList() {
    const{feedback,isLoading}=useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length===0)){ 
        return <p>No feedback yet</p>
    }
    return isLoading === true ? <Spinner/> : ( <div className='feedback-list'>
    {feedback.map(item=> <FeedbackItems key={item.id} item={item} />
)}
</div>)
}

export default FeedbackList