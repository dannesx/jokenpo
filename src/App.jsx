import { ModalProvider } from './contexts/ModalContext'
import Game from './pages/Game'

function App() {
	return (
		<ModalProvider>
			<Game />
		</ModalProvider>
	)
}

export default App
