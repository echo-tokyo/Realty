import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro'
import One from './quiz/one/One'
import Two from './quiz/two/Two'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro/>}/>
				<Route path='/first' element={<One/>}/>
				<Route path='/second' element={<Two/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router