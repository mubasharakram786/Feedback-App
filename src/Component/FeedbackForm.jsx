import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button'
import RatingSelect from './RatingSelect';
function FeedbackForm({addFeedback}){
    const[text,setText]=useState('');
    const[rating,setRating]=useState('');
    const[btnDisabled,setBtnDisabled]=useState(true);
    const[message,setMessage]=useState('');
    const handleText=(e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !=='' && text.trim().length <=10 ){
            setBtnDisabled(true)
            setMessage('Review at least 10 characters')
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback={
                text,
                rating
            }
            addFeedback(newFeedback);
            setText('')
        }
    }
    return(
        <Card>
            <form onSubmit={handleSubmit}>
            <h2 className='review-heading'>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
            <input onChange={handleText} value={text} className='review_box' type="text" placeholder='Enter your review here' />
            <Button isDisabled={btnDisabled}  type="submit">Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm;