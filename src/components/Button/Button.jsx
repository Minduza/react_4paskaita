import "./Button.css"
import PropTypes from 'prop-types'

const Button = ({btnName}) => {

    return <button className="btn">{btnName}</button>
}

Button.propTypes = {
    title: PropTypes.string
}

export default Button