import PropTypes from 'prop-types'
import style from './style.module.css'

function Button(props) {
	return (
		<button onClick={props.onClick} type={props.type} className={style.btn}>
			{props.value}
		</button>
	)
}

Button.propTypes = {
	value: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	type: 'fill',
}

export default Button
