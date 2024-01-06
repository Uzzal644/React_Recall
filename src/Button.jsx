import PropTypes from "prop-types"

const Button = (props) => {
    console.log(props)

  return (
    <div>
      <button style = {{backgroundColor: `${props.bgColor}`}}>{props.textInsideButton}</button>
    </div>
  )
}

Button.protoType ={
  textInsideButton : PropTypes.string.isRequired
}


Button.defaultProps= {
  backgroundColor: "yellow",
  textInsideButton: "Hello world"
}

export default Button
