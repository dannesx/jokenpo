import Header from './components/Header'
import Options from './components/Options'
import Button from './components/Button'
import Modal from './components/Modal'

import style from './app.module.css'

import { useState } from 'react'

function App() {
	const [modal, setModal] = useState(false)

	function handleModal(){
		setModal(!modal)
	}

	return (
		<>
			<div className={style.app}>
				<Header />
				<Options />
				<Button value="Rules" type="outlined" onClick={() => handleModal()} />
			</div>

			{modal ? <Modal /> : null}
		</>
	)
}

export default App
