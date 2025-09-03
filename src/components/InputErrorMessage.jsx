import PropTypes from "prop-types"

const InputErrorMessage = (props) => {
  return <p className="text-left text-xs text-brand-danger">{props.children}</p>
}

InputErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}
export default InputErrorMessage
