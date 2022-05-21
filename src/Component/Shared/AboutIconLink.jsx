import {Link} from 'react-router-dom'
function AboutIconLink() {
  return (
    <div className="about-link">
        <Link  to="/about">
        <i className="fas fa-question"></i>
        </Link>
    </div>
  )
}

export default AboutIconLink