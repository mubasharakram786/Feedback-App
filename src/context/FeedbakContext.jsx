import { createContext, useState , useEffect } from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const[isLoading,setIsLoading]=useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
      fetchFeedback()
    },[])
    // Handle Delete
    const deleteFeedback = async(id) => {
        await fetch(`/feedback/${id}`,{
          method:'DELETE'
        })
       if(window.confirm(`Are you sure want to delete ? `)){
         setFeedback(feedback.filter((item) => item.id !== id))
       }
      }
    // Handle Add
      const addFeedback =async(newFeedback) => {
        const response= await fetch(`feedback`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(newFeedback)
        })
        const data= await response.json()
        setFeedback([data, ...feedback]);
      }
    // Handle Edit
      const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    // Handle Update
    const updateFeedback=async(id,updateItem)=>{
       const response= await fetch(`/feedback/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(updateItem)
        })
        const data= response.json();
        setFeedback(feedback.map((item)=> item.id === id ? {...item,...data} : item))
    }
    // Fetch Data
    const fetchFeedback=async()=>{
      const response= await fetch(`/feedback?_sort=id&_order=desc`)
      const data= await response.json()

      setFeedback(data);
      setIsLoading(false);
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            isLoading,
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