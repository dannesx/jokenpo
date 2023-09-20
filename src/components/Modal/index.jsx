import style from './style.module.css'

function Modal() {
	return (
		<div className={style.modal}>
			<section className={style.modal_wrapper}>
				<header>
					<h2>RULES</h2>
					<img src="/images/icon-close.svg" alt="icon close" />
				</header>

				<img src="/images/image-rules.svg" alt="rules"/>
			</section>
		</div>
	)
}

export default Modal
