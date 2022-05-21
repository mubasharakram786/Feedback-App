import { useContext } from 'react'
import '../App.css'
import FeedbackContext from '../context/FeedbakContext'

import Card from './Shared/Card'
function FeedbackItems({ item }) {
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext);
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={()=>deleteFeedback(item.id)}>
                <i className="fas fa-times"></i>
             </button>
             <button className="edit" onClick={()=>editFeedback(item)}>
                 <i className="fas fa-edit"></i>
             </button>
            <div className="display-text">{item.text}</div>
        </Card>
    )
}

export default FeedbackItems