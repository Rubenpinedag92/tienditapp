import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { Provider } from './components/ui/provider'
import { LightMode } from './components/ui/color-mode'

function App() {

	return (
		<Provider>
			<LightMode>
				<Home></Home>
			</LightMode>
		</Provider>
	)
}

export default App
