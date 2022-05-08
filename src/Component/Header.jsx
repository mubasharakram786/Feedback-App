function Header({text,bgColor,textColor}) {
    const headerStyle={
      backgroundColor:bgColor,
      color:textColor,
      padding:'20px'
    }
    return (
     <header style={headerStyle}>
         <h4 className="mb-0">{text}</h4>
     </header>
    )
  }
  
  Header.defaultProps={
      text:'FeedBack UI',
      bgColor:'rgba(0,0,0,0.4)',
      textColor:'#ff6a95'
  }
  
  export default Header