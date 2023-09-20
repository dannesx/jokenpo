import Score from '../Score'
import style from './style.module.css'

function Header() {
	return (
		<header className={style.header}>
			<img src="/images/logo.svg" alt="Logo" />
			<Score />
		</header>
	)
}

export default Header
