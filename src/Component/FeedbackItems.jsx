import '../App.css'
import Card from './Shared/Card'
function FeedbackItems({ item,handleDelete }) {
    // const handleDelete=(id)=>{
    //     console.log(id)
    // }
    return (
        <Card reverse={false}>
            <div className="display-number">{item.rating}</div>
            <button onClick={()=>handleDelete(item.id)}>
                <i className="fas fa-times"></i>
             </button>
            <div className="display-text">{item.text}</div>
        </Card>
    )
}

export default FeedbackItems