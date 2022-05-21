import { createContext, useState } from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        text: 'This is term of context 1',
        rating: 8
       },
        {
        id: 2,
        text: 'This is term of context 2',
        rating: 6
       },
        {
        id: 3,
        text: 'This is term of context 3',
        rating: 9
       }
]);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    // Handle Delete
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    // Handle Add
      const addFeedback = (newFeedback) => {
        // newFeedback.id= uuidv4();
        setFeedback([newFeedback, ...feedback]);
      }
    // Handle Edit
      const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    // Handle Update
    const updateFeedback=(id,updateItem)=>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item,...updateItem} : item))

        // console.log(id,updateItem);
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext