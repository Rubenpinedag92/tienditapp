import './App.css'
import { Provider } from './components/ui/provider'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/login'

function App() {
	const router = createBrowserRouter([
		{
			path: "/", Component: Login
		}
	])

	return (
		<Provider>
			<RouterProvider router={router}>

			</RouterProvider>
		</Provider>
	)
}

export default App
