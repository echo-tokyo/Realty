import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro'
import One from './quiz/one/One'
import Two from './quiz/two/Two'
import Three from './quiz/three/Three'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro/>}/>
				<Route path='/first' element={<One/>}/>
				<Route path='/second' element={<Two/>}/>
				<Route path='/third' element={<Three/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router