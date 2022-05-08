import '../App.css'
import Card from './Shared/Card'
function FeedbackItems({ item }) {

    return (
        <Card reverse={false}>
            <div className="display-number">{item.rating}</div>
            <div className="display-text">{item.text}</div>
        </Card>
    )
}

export default FeedbackItems