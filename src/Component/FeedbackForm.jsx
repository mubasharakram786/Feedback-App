import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button'
import RatingSelect from './RatingSelect';
function FeedbackForm(){
    const[text,setText]=useState('');
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
    
    return(
        <Card>
            <form>
            <h2 className='review-heading'>How would you rate your service with us?</h2>
            <RatingSelect/>
            <div className="input-group">
            <input onChange={handleText} value={text} className='review_box' type="text" placeholder='Enter your review here' />
            <Button isDisabled={btnDisabled}  type="submit">Send</Button>
            {message && <div className='message'>{message}</div>}
            </div>
            </form>
        </Card>
    )
}
export default FeedbackForm;