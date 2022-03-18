import './App.css'
import AuthBtn from './components/AuthBtn'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
	return (
		<div className='grid grid-cols-5'>
			<Nav />

			<main className='px-12 py-6 col-span-4 bg-cyan-50'>
				<AuthBtn />
				<Header />
			</main>
		</div>
	)
}

export default App
