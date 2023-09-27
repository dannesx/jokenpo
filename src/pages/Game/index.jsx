import Header from '../../components/Header'
import Options from '../../components/Options'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

import style from './style.module.css'

import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

function Game() {
	const { modal, openModal } = useContext(ModalContext)

	return (
		<>
			<div className={style.game}>
				<Header />
				<Options />
				<Button value="Rules" type="outlined" onClick={() => openModal()} />
			</div>

			{modal ? <Modal /> : null}
		</>
	)
}

export default Game
