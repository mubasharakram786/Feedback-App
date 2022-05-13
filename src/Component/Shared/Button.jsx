import PropTypes from 'prop-types'
function Button({children,version,isDisabled,type}) {
  return (
      <button className={`btn btn-${version}`} disabled={isDisabled} type={type} >
          {children}
      </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:'',

}
Button.propTypes={
children:PropTypes.node.isRequired,
version:PropTypes.string.isRequired,
type:PropTypes.string.isRequired,
isDisabled:PropTypes.bool.isRequired
}

export default Button