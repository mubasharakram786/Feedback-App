import React from 'react'
import PropTypes from 'prop-types'
function Card({children,reverse}) {
  return (
    // <div className={`card ${reverse===true ? 'reverse':''} `}>
    //     {children}
    // </div>
    <div className='card' style={{
        backgroundColor:reverse?'rgba(0,0,0,0.4)':'#fff',
        color:reverse?'#fff':'#000'
    }}>
        {children}
    </div>
  )
}
Card.propType={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool.isRequired
}
export default Card