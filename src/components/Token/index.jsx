import PropTypes from 'prop-types'
import style from './style.module.css'

function Token(props) {
	const choices = {
		'🪨': 'rock',
		'📄': 'paper',
		'✂️': 'scissors',
	}

	return (
		<button className={style.coin} color={choices[props.choice]}>
			<div>
				<img
					src={`/images/icon-${choices[props.choice]}.svg`}
					alt={choices[props.choice]}
				/>
			</div>
		</button>
	)
}

Token.propTypes = {
	choice: PropTypes.string,
}

export default Token
