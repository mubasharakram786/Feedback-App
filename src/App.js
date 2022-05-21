import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import {v4 as uuidv4} from 'uuid'
// import PropTypes from 'prop-types';
import FeedbackList from './Component/FeedbackList'
import { FeedbackProvider } from './context/FeedbakContext';
import Header from './Component/Header'
import FeedbackStats from './Component/FeedbackStats'
import FeedbackForm from './Component/FeedbackForm'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Component/Shared/AboutIconLink'
function App() {
  // const [feedback, setFeedback] = useState(data);
  

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats  />
              <FeedbackList   />

            </>
          } />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
          <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  )
}


export default App