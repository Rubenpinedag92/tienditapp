import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Provider } from './components/ui/provider'

function App() {

	return (
		<Provider>
			<Home></Home>
		</Provider>
	)
}

export default App
