import style from './style.module.css'
import PropTypes from 'prop-types'

function Score(props) {
	return (
		<div className={style.score}>
			<span>Score</span>
			<h3>{props.score}</h3>
		</div>
	)
}

Score.propTypes = {
	score: PropTypes.number,
}

Score.defaultProps = {
	score: 0,
}

export default Score
